var p = require('esprima').parse;
const fs = require('fs');
var map = require('./tese/Tese/javascript/map.js')

function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}
var analyseStatement = require('./analyse.js')

var local_functions = [];

function analysis(stmt, gamma){
    function mapper(stmt){
        switch(stmt.type) {
            case "CallExpression":{
                if (stmt.callee.type === "MemberExpression" && !local_functions.includes(stmt.callee.property.name)) {
                    var program_text = readFileContent("esVersions.json")
                    var program = JSON.parse(program_text)
                    
                    if (stmt.callee.object.name in gamma) {
                        switch(gamma[stmt.callee.object.name]){
                            case "string":{
                                type = "StringObject";
                                break;
                            }
                            
                        }
                    }

                    for (const version in program) {  
                        if (program[version]["builtIns"][type]["functions"] !== undefined && 
                        program[version]["builtIns"][type]["functions"].includes(stmt.callee.property.name)){
                            console.log("existe função " +stmt.callee.object.name + "." + stmt.callee.property.name + "()" + " - na versão " + version);
                            return stmt;
                        }                       
                    }
                }
                return stmt;
            }
            case "FunctionDeclaration":{
                local_functions.push(stmt.id.name);
                return stmt;
            }
            default: return stmt;
        }
    }

    analyseStatement(stmt, gamma);

    console.log(gamma);
    
    return map(mapper, stmt);
}

var fileToAnalyse = process.argv[2];

var program_text = readFileContent(fileToAnalyse);

var program = p(program_text);

var gamma={};

analysis(program, gamma);
