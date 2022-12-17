//node taintedAnalysis.js 
var p = require('esprima').parse;
const fs = require('fs');
var map = require('./map.js')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}
function memberParse(stmt){
    var array = [];
    while(true){
        array.push(stmt.property.name)
        if (stmt.object.type==="MemberExpression"){
            stmt = stmt.object;
        } else {
            array.push(stmt.object.name)
            break
        }
        
    }
    //console.log(array.reverse().join("."))
    return array.reverse().join(".")
}
//runs through the stmt to find some function, variable, syntax or operator that's exclusively from a version
function analysis(stmt, fileToAnalyse, results){
    var file = readFileContent("esVersions.json");
    var metadata = JSON.parse(file)["es11"]
    var metadata_global = metadata["globalVars"];
    function mapper(stmt){
        if(stmt === undefined){
            return stmt
        }
        //analyse of the syntax by type
        switch(stmt.type) {
            case "Identifier":
            {
                if (metadata_global.includes(stmt.name)){
                    var obj = stmt.name
                    
                    if (!results.hasOwnProperty(fileToAnalyse) ){
                        results[fileToAnalyse]={};
                        results[fileToAnalyse][obj]=[];

                    }
                    else if (!results[fileToAnalyse].hasOwnProperty(obj)) {
                        results[fileToAnalyse][obj]=[];
                    }
                }
                return stmt;
            }
            case "ArrayPattern":
            case "ArrayExpression":
            {
                if (!results.hasOwnProperty(fileToAnalyse) ){
                    results[fileToAnalyse]={"Array":[]};
                }
                else if (!results[fileToAnalyse].hasOwnProperty("Array")) {
                    results[fileToAnalyse]["Array"]=[];
                }
                
                return stmt;
            }
            case "ObjectPattern":
            case "ObjectExpression":
            {
                if (!results.hasOwnProperty(fileToAnalyse) ){
                    results[fileToAnalyse]={"Object":[]};
                }
                else if (!results[fileToAnalyse].hasOwnProperty("Object")) {
                    results[fileToAnalyse]["Object"]=[];
                }
                
                return stmt;
            }
            case "CallExpression":{
                //console.log(stmt)
                if(stmt.callee.type === "MemberExpression"){
                    if (metadata["builtIns"]["FunctionObject"]["functions"].includes(stmt.callee.property.name)){
                        if (results[fileToAnalyse].hasOwnProperty("Function")){
                            results[fileToAnalyse]["Function"].push(stmt.callee.property.name)
                        }
                        else{
                            results[fileToAnalyse]["Function"] = [stmt.callee.property.name]
                        }
                    }
                }
                return stmt;
            }
            case "MemberExpression":
            {                
                var obj = memberParse(stmt)
                var obj1 = obj.split(".")[0]
                var obj_last= obj.split(".")[obj.split(".").length-1]
                var obj_function = obj.split(".").slice(1).join(".")
                if (metadata_global.includes(obj1)){
                    if (!results[fileToAnalyse][obj1].includes(obj_function)){
                      
                        if (metadata["builtIns"][(obj1+"Object")]["functions"].includes(obj_last)){
                            results[fileToAnalyse][obj1].push(obj_function);
                            return stmt
                        } else if (metadata["builtIns"][(obj1+"Object")]["fields"].includes(obj_last)){
                            results[fileToAnalyse][obj1].push(obj_function);
                            return stmt
                        }

                    }
                    
                }
                
                if (!results[fileToAnalyse].hasOwnProperty("Object")){
                    if (metadata["builtIns"][("ObjectObject")]["functions"].includes(obj_last)){
                        results[fileToAnalyse]["Object"]=[obj_function]
                    } else if (metadata["builtIns"][("ObjectObject")]["fields"].includes(obj_last)){
                        results[fileToAnalyse]["Object"]=[obj_function]
                    }                        
                }
                else{
                    if (!results[fileToAnalyse]["Object"].includes(obj_function)){
                    
                        if (metadata["builtIns"][("ObjectObject")]["functions"].includes(obj_last)){
                            results[fileToAnalyse]["Object"].push(obj_function);
                        } else if (metadata["builtIns"][("ObjectObject")]["fields"].includes(obj_last)){
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

//loads all metadata_global file
var file = readFileContent("metadata_test262.json");
//var metadata_global =[{"path":"./test262/test/built-ins/AsyncGeneratorFunction/name.js","info":" |The [[Prototype]] property of the newly constructed object\nis set to the original Array prototype object, the one that\nis the initial value of Array.prototype\n","version":5,"esid":" 15.4.1_A1.1_T1","description":" >Create new property of Array.prototype. When new Array object has\nthis property\n"}]
var metadata_global = JSON.parse(file);
var results = {};
//cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
//exclusevily from an upper version associates the test to that version
for (var i=0; i < metadata_global.length; i++){
    //loads the test
    var fileToAnalyse = metadata_global[i].path;
    var program_text = readFileContent(fileToAnalyse);
    //console.log(fileToAnalyse)
    results[fileToAnalyse]={}
    //use of esprima to analyse the test
    try{
        var program = p(program_text);
        results = analysis(program, fileToAnalyse, results);
        
    } catch(e){

        //fault in esprima

    }         

}

//writes the result in a file
fs.writeFile("metadata_built-in.json", JSON.stringify(results), function(){});
