//node taintedAnalysis.js 
var p = require('esprima').parse;
const fs = require('fs');
var map = require('./map.js')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

//checks if version1 is lower than version2
function isLowerVersion(version1, version2){
    var numberPattern = /\d+/g;
    if (version1 ==="notSupported"){
        return true
    }
    if (parseInt(version1.match(numberPattern)[0]) < parseInt(version2.match(numberPattern)[0])){
        return true;
    }
    else return false
}

//for the given version checks if table of built-ins already contains
//  if not associates the built-ins to the version
//  else check if the version associated to it is lower
function parseBuiltIn(table_func, version, builtInObject){
    if (builtInObject.hasOwnProperty("functions")){
        for (var i = 0; i < builtInObject.functions.length; i++){
            var func = builtInObject.functions[i]
            
            if (func==="hasOwnProperty")
             continue
            if (!table_func.hasOwnProperty(func)){
                table_func[func] = version
            }
            else{
                if (isLowerVersion(version, table_func[func])){
                    table_func[func] = version
                }
            }  
        }        
    }
}

//for the given version checks if table of global vars already contains
//  if not associates the global vars to the version
//  else check if the version associated to it is lower
function parseGlobalVars(table_vars, versionObject, version){
    for (var i=0; i< versionObject.globalVars.length; i++){
        var gV = versionObject.globalVars[i]

        if (!table_vars.hasOwnProperty(gV)){
            table_vars[gV] = version
        }
        else{
            if (isLowerVersion(version, table_vars[gV])){
                table_vars[gV] = version
            }
        } 
    }
}

//for the given version checks if table of syntaxes already contains
//  if not associates the syntaxes to the version
//  else check if the version associated to it is lower
function parseSyntax(table_syntax, versionObject, version){
    for (var i=0; i< versionObject.Syntax.length; i++){
        var s = versionObject.Syntax[i]

        if (!table_syntax.hasOwnProperty(s)){
            table_syntax[s] = version
        }
        else{
            if (isLowerVersion(version, table_syntax[s])){
                table_syntax[s] = version
            }
        } 
    }
}

//for the given version checks if table of operators already contains
//  if not associates the operator to the version
//  else check if the version associated to it is lower
function parseOperators(table_operators, versionObject, version){
    for (var i=0; i< versionObject.Operators.length; i++){
        var s = versionObject.Operators[i]

        if (!table_operators.hasOwnProperty(s)){
            table_operators[s] = version
        }
        else{
            if (isLowerVersion(version, table_operators[s])){
                table_operators[s] = version
            }
        } 
    }
}

function parseOther(table_functions, versionObject, version){
    for (var i=0; i< versionObject.Other.length; i++){
        var s = versionObject.Other[i]

        if (!table_functions.hasOwnProperty(s)){
            table_functions[s] = version
        }
        else{
            if (isLowerVersion(version, table_functions[s])){
                table_functions[s] = version
            }
        } 
    }
}

//for the given version parses global vars, syntax, operators and built-ins
function parseVersion(table_func, table_vars, table_syntax, table_operators, table_global, versionObject, version){

    parseGlobalVars(table_vars, versionObject, version);

    parseSyntax(table_syntax, versionObject, version);

    parseOperators(table_operators, versionObject, version)

    parseOther(table_global, versionObject, version)
    for (var builtIn in versionObject.builtIns){
        if (versionObject.builtIns.hasOwnProperty(builtIn)){
            if (builtIn === "GlobalObject"){
                parseBuiltIn(table_global, version, versionObject.builtIns[builtIn])
            }
            else{
                parseBuiltIn(table_global,version, versionObject.builtIns[builtIn])

                parseBuiltIn(table_func,version, versionObject.builtIns[builtIn])
            }
        }
    }
}

//for each version calls parseVersion
function parseJSON(){
    //loads esVersion file
    var program_text = readFileContent("esVersions.json")
    var metadata = JSON.parse(program_text)
    
    //initialize tables
    var table_func = {}
    var table_vars = {}
    var table_syntax = {}
    var table_operators = {}
    var table_global={}
    //for each version calls parseVersion()
    for(var version in metadata){
        if (metadata.hasOwnProperty(version)){
            parseVersion(table_func, table_vars, table_syntax, table_operators, table_global, metadata[version], version)
        }
    }
    return [table_func, table_vars, table_syntax, table_operators, table_global]
}

// table -> {function1: es5, function2: es6}

//runs through the stmt to find some function, variable, syntax or operator that's exclusively from a version
function analysis(stmt, table_func, table_vars, table_syntax, table_operators, table_global, init_version){
    
    //functions from assert
    var local_functions = ["throws", "sameValue", "notSameValue"];

    function mapper(stmt){
        if(stmt === undefined){
            return stmt
        }

        //verifies the type of stmt version, if it's from an upper version associates that version to the test
        if (stmt.hasOwnProperty("type") && table_syntax.hasOwnProperty(stmt.type)){
            if (isLowerVersion(progVersion,table_syntax[stmt.type])){
                progVersion = table_syntax[stmt.type];
            }
        }

        //if the stmt has operator, verifies that operator version
        if (stmt.hasOwnProperty("operator") && table_operators.hasOwnProperty(stmt.operator)){
            if (isLowerVersion(progVersion,table_operators[stmt.operator])){
                progVersion = table_operators[stmt.operator];
            }
        }

        //analyse of the syntax by type
        switch(stmt.type) {
            case "VariableDeclaration":{
                if (stmt.hasOwnProperty("kind")){
                    //const and let are only introduced in version es6
                    if (stmt.kind ==="const" || stmt.kind === "let"){
                    
                        if (isLowerVersion(progVersion, "es6")){
                            progVersion = "es6";
                        }    
                    }     
                }
                return stmt
            } 
            case "ArrowFunctionExpression":
            case "FunctionExpression":{
                //generator only introduced in es6
                if (stmt.hasOwnProperty("generator") && stmt.generator){
                    if (isLowerVersion(progVersion,"es6")){
                        progVersion = "es6";
                    }
                }
                //async property is only introduced in es8
                if (stmt.hasOwnProperty("async") && stmt.async){
                    if (isLowerVersion(progVersion,"es8")){
                        progVersion = "es8";
                    }
                }
                return stmt
            }
            case "Identifier":{
                //checks whether the identifier is in the table_vars
                if (stmt.hasOwnProperty("name")){
                    if (table_vars.hasOwnProperty(stmt.name)){
                        if (isLowerVersion(progVersion, table_vars[stmt.name])){
                            progVersion = table_vars[stmt.name];
                        }
                    }
                    
                }
                return stmt
            }
            case "CallExpression":{
                //in case of the call expression is eval
                if (stmt.hasOwnProperty("callee") && stmt.hasOwnProperty("arguments") && stmt.callee.hasOwnProperty("name") && stmt.callee.name ==="eval"){
                    try{
                        var program = p(stmt.arguments[0].value);
                        progVersion = analysis(program, table_func, table_vars, table_syntax, table_operators, progVersion);
                    } catch(e){
                        //fault in esprima
                        //progVersion = "notSupported";
                    }  
                }

                //checks the function version
                if(stmt.hasOwnProperty("callee") && stmt.callee.hasOwnProperty("type") && stmt.callee.type === "MemberExpression"){
                    
                    if (!local_functions.includes(stmt.callee.property.name) && table_func.hasOwnProperty(stmt.callee.property.name)) {
                        if (isLowerVersion(progVersion, table_func[stmt.callee.property.name])){
                            progVersion = table_func[stmt.callee.property.name];
                        }
                    }
                                     
                }
                if(stmt.hasOwnProperty("callee") && stmt.callee.hasOwnProperty("type") && stmt.callee.type === "Identifier"){
                    
                    if (!local_functions.includes(stmt.callee.name) && table_global.hasOwnProperty(stmt.callee.name)) {
                        if (isLowerVersion(progVersion, table_global[stmt.callee.name])){
                            progVersion = table_global[stmt.callee.name];
                        }
                    }
                                     
                }
                return stmt;
            }
            case "MemberExpression":{
                //verifies if a member expression is associated to a version
                if(stmt.hasOwnProperty("property") && stmt.property.hasOwnProperty("name")){
                    if (table_global.hasOwnProperty(stmt.property.name) && stmt.property.name !=="set" && stmt.property.name !=="get") {
                        if (isLowerVersion(progVersion, table_global[stmt.property.name])){
                            progVersion = table_global[stmt.property.name];
                        }
                    }             
                }
                return stmt;

            }
            case "Literal":{
                //checks if the value of a literal is a function or variable associatd to a version
                if (stmt.hasOwnProperty("value")) {
                    
                    if (table_vars.hasOwnProperty(stmt.value) && isLowerVersion(progVersion, table_vars[stmt.value])){
                        progVersion = table_vars[stmt.value];
                    }
                }     

                return stmt
            }
            case "FunctionDeclaration":{
                //adds the declared version to local functions
                local_functions.push(stmt.id.name);

                //if the declared function uses generator or  async associates specific version
                if (stmt.hasOwnProperty("generator") && stmt.generator){
                    if (isLowerVersion(progVersion,"es6")){
                        progVersion = "es6";
                    }
                }
                if (stmt.hasOwnProperty("async") && stmt.async){
                    if (isLowerVersion(progVersion,"es8")){
                        progVersion = "es8";
                    }
                }
                return stmt;
            }
            default: return stmt;
        }
    }

    var progVersion = init_version    
    map(mapper, stmt);
    return progVersion
}

//loads all metadata file
var file = readFileContent("metadata_test262.json");
var metadata = JSON.parse(file);
var results = {};

//initializes all tables
var table = parseJSON();
var table_func = table[0]
var table_vars = table[1]
var table_syntax = table[2]
var table_operators = table[3]
var table_global=table[4]

//cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
//exclusevily from an upper version associates the test to that version
for (var i=0; i < metadata.length; i++){
    version = "es5"
    
    //loads the test
    var fileToAnalyse = metadata[i].path;
    var program_text = readFileContent(fileToAnalyse);

    if (metadata[i].hasOwnProperty("negative")){
        if (metadata[i]["negative"].hasOwnProperty("type") && metadata[i]["negative"].hasOwnProperty("phase")){
            if (metadata[i]["negative"]["phase"] ==="SyntaxError" || metadata[i]["negative"]["type"]==="SyntaxError"){
                continue
            }
        }
            
    }
            

    //checks if test belongs to intl
    if (metadata[i].path.includes("intl")){
        version = "intl"
    }
    //checks if test belongs to property-escapes
    else if (metadata[i].path.includes("property-escapes")){
        version = "property-escapes"
    }
    else{
        if (fileToAnalyse.includes("module-code") || fileToAnalyse.includes("arrow") || fileToAnalyse.includes("generator") || fileToAnalyse.includes("dstr")){
            version = "es6"
        }
        if (fileToAnalyse.includes("async")){
            version = "es8"
        }
        //if test belongs to named-groups has version es9
        if (fileToAnalyse.includes("named-groups") ){
            version ="es9"
        }

        //use of esprima to analyse the test
        try{
            var program = p(program_text);
            var version = analysis(program, table_func, table_vars, table_syntax, table_operators, table_global, version);
            
        } catch(e){
            //fault in esprima
            var version = "notSupported";
        }  
    }

    //adds the test to the correspondent version
    if (results.hasOwnProperty(version)){           
        results[version].push(metadata[i]);
    }else{
        results[version] = [metadata[i]];
    }

    

}
for (var v in results)
{
    console.log(results[v].length)
    fs.writeFile("./tainted_results/"+v+".json", JSON.stringify(results[v]), function(){});
}
//writes the result in a file
fs.writeFile("./tainted_results/tainted_analysis.json", JSON.stringify(results), function(){});
module.exports = {analysis,parseBuiltIn, parseJSON };
