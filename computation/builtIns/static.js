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
function analysis(stmt, fileToAnalyse, results, es11Info) {
    let es11GlobalVars = es11Info["globalVars"];
    function mapper(stmt) {
        if (stmt === undefined) {
            return stmt
        }
        //analyse of the syntax by type
        switch (stmt.type) {
            case "Identifier":
            {
                if (es11GlobalVars.includes(stmt.name)) {
                    let obj = stmt.name
                    if (!results.hasOwnProperty(fileToAnalyse)) {
                        results[fileToAnalyse] = {};
                        results[fileToAnalyse][obj] = [];
                    } else if (!results[fileToAnalyse].hasOwnProperty(obj)) {
                        results[fileToAnalyse][obj] = [];
                    }
                }
                return stmt;
            }
            case "ArrayPattern":
            case "ArrayExpression":
            {
                if (!results.hasOwnProperty(fileToAnalyse)) {
                    results[fileToAnalyse] = { "Array": [] };
                } else if (!results[fileToAnalyse].hasOwnProperty("Array")) {
                    results[fileToAnalyse]["Array"] = [];
                }

                return stmt;
            }
            case "ObjectPattern":
            case "ObjectExpression":
            {
                if (!results.hasOwnProperty(fileToAnalyse)) {
                    results[fileToAnalyse] = { "Object": [] };
                } else if (!results[fileToAnalyse].hasOwnProperty("Object")) {
                    results[fileToAnalyse]["Object"] = [];
                }

                return stmt;
            }
            case "CallExpression":
            {
                if (stmt.callee.type === "MemberExpression") {
                    if (es11Info["builtIns"]["FunctionObject"]["functions"].includes(stmt.callee.property.name)) {
                        if (results[fileToAnalyse].hasOwnProperty("Function")) {
                            results[fileToAnalyse]["Function"].push(stmt.callee.property.name)
                        } else {
                            results[fileToAnalyse]["Function"] = [stmt.callee.property.name]
                        }
                    }
                }
                return stmt;
            }
            case "MemberExpression":
            {
                let obj = memberParse(stmt)
                let obj1 = obj.split(".")[0]
                let obj_last = obj.split(".")[obj.split(".").length - 1]
                let obj_function = obj.split(".").slice(1).join(".")
                if (es11GlobalVars.includes(obj1)) {
                    if (!results[fileToAnalyse][obj1].includes(obj_function)) {
                        if (es11Info["builtIns"][(obj1 + "Object")]["functions"].includes(obj_last)) {
                            results[fileToAnalyse][obj1].push(obj_function);
                        } else if (es11Info["builtIns"][(obj1 + "Object")]["fields"].includes(obj_last)) {
                            results[fileToAnalyse][obj1].push(obj_function);
                        }
                        return stmt
                    }

                }

                if (!results[fileToAnalyse].hasOwnProperty("Object")) {
                    if (es11Info["builtIns"][("ObjectObject")]["functions"].includes(obj_last)) {
                        results[fileToAnalyse]["Object"] = [obj_function]
                    } else if (es11Info["builtIns"][("ObjectObject")]["fields"].includes(obj_last)) {
                        results[fileToAnalyse]["Object"] = [obj_function]
                    }
                }
                else {
                    if (!results[fileToAnalyse]["Object"].includes(obj_function)) {

                        if (es11Info["builtIns"][("ObjectObject")]["functions"].includes(obj_last)) {
                            results[fileToAnalyse]["Object"].push(obj_function);
                        } else if (es11Info["builtIns"][("ObjectObject")]["fields"].includes(obj_last)) {
                            results[fileToAnalyse]["Object"].push(obj_function);
                        }
                    }
                }
                return stmt
            }
            default: return stmt;
        }
    }

    map(mapper, stmt);
    return results
}

function main(){
    //loads all metadata_global file
    let metadata_global = JSON.parse(readFile("../official/results/metadata_test262.json"));
    let results = {};
    let es11Info = JSON.parse(readFile("../utils/esVersions.json"))['es11'];
    //cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
    //exclusevily from an upper version associates the test to that version
    for (let i = 0; i < metadata_global.length; i++) {
        //loads the test
        let fileToAnalyse = metadata_global[i].path;
        let program_text = readFile("../test262/" + fileToAnalyse);
        results[fileToAnalyse] = {}
        //use of esprima to analyse the test
        try {
            results = analysis(p(program_text), fileToAnalyse, results, es11Info);
    
        } catch (e) {
            //fault in esprima
        }
    
    }
    
    //writes the result in a file
    fs.writeFile(__dirname + "/results/static.json", JSON.stringify(results), function () { });
}

main()