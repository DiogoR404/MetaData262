const p = require('esprima').parse;
const fs = require('fs');
const map = require('../utils/map.js')

//function to read a file
function readFile(file) {
    return fs.readFileSync(file, 'utf8');

}
function memberParse(stmt) {
    let array = [];
    while (true) {
        array.push(stmt.property.name)
        if (stmt.object.type === "MemberExpression") {
            stmt = stmt.object;
        } else {
            array.push(stmt.object.name)
            break
        }

    }
    return array.reverse().join(".")
}
//runs through the stmt to find some function, variable, syntax or operator that's exclusively from a version
function analysis(stmt, test, esInfo) {
    function mapper(stmt) {
        if (stmt === undefined) {
            return stmt
        }
        //analyse of the syntax by type
        switch (stmt.type) {
            case "Identifier": {
                if (esGlobalVars.includes(stmt.name)) {
                    if (!test.hasOwnProperty(stmt.name)) {
                        test[stmt.name] = [];
                    }
                }
                return stmt;
            }
            case "ArrayPattern":
            case "ArrayExpression": {
                if (!test.hasOwnProperty("Array")) {
                    test["Array"] = [];
                }

                return stmt;
            }
            case "ObjectPattern":
            case "ObjectExpression": {
                if (!test.hasOwnProperty("Object")) {
                    test["Object"] = [];
                }

                return stmt;
            }
            case "CallExpression": {
                if (stmt.callee.type === "MemberExpression") {
                    if (esInfo["builtIns"]["FunctionObject"]["functions"].includes(stmt.callee.property.name)) {
                        if (test.hasOwnProperty("Function")) {
                            test["Function"].push('property.' + stmt.callee.property.name)
                        } else {
                            test["Function"] = ['property.' + stmt.callee.property.name]
                        }
                    }
                }
                return stmt;
            }
            case "MemberExpression": {
                let obj = memberParse(stmt)
                let obj1 = obj.split(".")[0]
                let obj_last = obj.split(".")[obj.split(".").length - 1]
                let obj_function = obj.split(".").slice(1).join(".")
                if (esGlobalVars.includes(obj1)) {
                    if (!test[obj1].includes(obj_function)) {
                        if (esInfo["builtIns"][(obj1 + "Object")]["functions"].includes(obj_last) ||
                            esInfo["builtIns"][(obj1 + "Object")]["fields"].includes(obj_last)) {
                            test[obj1].push(obj_function);
                        }
                        return stmt
                    }
                }

                const hasObj = test.hasOwnProperty("Object");

                if (hasObj && test["Object"].includes(obj_function)) {
                    return stmt;
                }

                if (esInfo["builtIns"][("ObjectObject")]["functions"].includes(obj_last) ||
                    esInfo["builtIns"][("ObjectObject")]["fields"].includes(obj_last)) {
                        if (!hasObj) test["Object"] = [];
                        test["Object"].push(obj_function);
                }
                return stmt
            }

            default: return stmt;
        }
    }

    const esGlobalVars = esInfo["globalVars"];
    map(mapper, stmt);
    Object.keys(test).forEach(builtIn => {
        test[builtIn] = test[builtIn].filter(elm => {
            return 'prototype' !== elm;
        })
    });
    return results;
}

function staticBuiltInsComputation(pathToTest262, metadata, lastVersion) {
    //loads all metadata_global file
    let results = {};
    let esInfo = JSON.parse(readFile(__dirname + "/../utils/esVersions.json"))['es' + lastVersion];
    //cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
    //exclusevily from an upper version associates the test to that version
    for (let i = 0; i < metadata.length; i++) {
        //loads the test
        const fileToAnalyse = metadata[i].path;
        const program_text = readFile(pathToTest262 + fileToAnalyse);
        results[fileToAnalyse] = {}
        //use of esprima to analyse the test
        try {
            results[fileToAnalyse] = {};
            analysis(p(program_text), results[fileToAnalyse], esInfo);

        } catch (e) {
            //fault in esprima
        }

    }

    //writes the result in a file
    fs.writeFile(__dirname + "/results/static.json", JSON.stringify(results), function () { });
    return results;
}

if (require.main === module) {
    const metadata = JSON.parse(readFile(__dirname + "/../official/results/metadata_test262.json"));
    const versions = JSON.parse(readFile(__dirname + "/../configurations/dynamicAnalysis.json")).versions;
    staticBuiltInsComputation(__dirname + '/../../resources/test262/', metadata, versions.pop());
} else {
    module.exports = staticBuiltInsComputation;
}