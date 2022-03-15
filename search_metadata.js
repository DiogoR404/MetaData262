//node taintedAnalysis.js 
var p = require('esprima').parse;
const fs = require('fs');
var map = require('./tese/Tese/javascript/map.js')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

function parseVersion(){
    var version = readFileContent("./dynamic_results/mixed_analysis.json");
    var version_metadata = JSON.parse(version)
    var versions={};
    for(v in version_metadata){
        for(file in version_metadata[v]){
            versions[version_metadata[v][file]] = v
        }
    }
    return versions
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
        
        if (results[fileToAnalyse].hasOwnProperty("syntactic_construct") && !(results[fileToAnalyse]["syntactic_construct"].includes(stmt.type))){

            results[fileToAnalyse]["syntactic_construct"].push(stmt.type);
            
        }else if (!results[fileToAnalyse].hasOwnProperty("syntactic_construct")){
            
            results[fileToAnalyse]["syntactic_construct"] = [stmt.type];
            
        }

        //analyse of the syntax by type
        switch(stmt.type) {
            case "Identifier":
            {
                if (metadata_global.includes(stmt.name)){

                    if (stmt.name === "let" || stmt.name==="const"){
                        return stmt
                    }
                    else if (stmt.name ==="TA"){
                        
                        if (results[fileToAnalyse].hasOwnProperty("builtIns") && (!results[fileToAnalyse]["builtIns"].includes("TypedArray"))){
                            results[fileToAnalyse]["builtIns"]["TypedArray"]=[];
                            
                        }else if (!results[fileToAnalyse].hasOwnProperty("builtIns")){
                            results[fileToAnalyse]["builtIns"] = {};
                            results[fileToAnalyse]["builtIns"]["TypedArray"]=[];
                        }
                    }
                    else{

                        if (results[fileToAnalyse].hasOwnProperty("builtIns") && (!results[fileToAnalyse]["builtIns"].hasOwnProperty(stmt.name))){
                            results[fileToAnalyse]["builtIns"][stmt.name] =[];
                            
                        }else if (!results[fileToAnalyse].hasOwnProperty("builtIns")){
                            results[fileToAnalyse]["builtIns"] = {};
                            results[fileToAnalyse]["builtIns"][stmt.name] =[];
                            
                        }
                    }
                }
                else if(stmt.name ==="assert"){
                    assert++
                }
                else if (stmt.name ==="$ERROR"){
                    error++
                }
                return stmt;
            }
            case "ArrayPattern":
            case "ArrayExpression":
            {
                if (results[fileToAnalyse].hasOwnProperty("builtIns")  && !(results[fileToAnalyse]["builtIns"].hasOwnProperty("Array"))){
    
                    results[fileToAnalyse]["builtIns"]["Array"]=[];
                    
                }else if (!results[fileToAnalyse].hasOwnProperty("builtIns")  ){
                    
                    results[fileToAnalyse]["builtIns"]={"Array":[]};
                    
                }
                
                return stmt;
            }
            case "ObjectPattern":
            case "ObjectExpression":
            {
                if (results[fileToAnalyse].hasOwnProperty("builtIns")  && !(results[fileToAnalyse]["builtIns"].hasOwnProperty("Object"))){
    
                    results[fileToAnalyse]["builtIns"]["Object"]=[];
                    
                }else if (!results[fileToAnalyse].hasOwnProperty("builtIns") ){
                    
                    results[fileToAnalyse]["builtIns"]={"Object":[]};
                    
                }
                
                return stmt;
            }
            case "CallExpression":{

                if(stmt.callee.type === "MemberExpression"){
                    if (metadata["builtIns"]["FunctionObject"]["functions"].includes(stmt.callee.property.name)){
                        if (results[fileToAnalyse]["builtIns"].hasOwnProperty("Function")){
                            results[fileToAnalyse]["builtIns"]["Function"].push(stmt.callee.property.name)
                        }
                        else{
                            results[fileToAnalyse]["builtIns"]["Function"] = [stmt.callee.property.name]
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
                    if (!results[fileToAnalyse]["builtIns"][obj1].includes(obj_function)){
                      
                        if (metadata["builtIns"][(obj1+"Object")]["functions"].includes(obj_last)){
                            results[fileToAnalyse]["builtIns"][obj1].push(obj_function);
                            return stmt
                        } else if (metadata["builtIns"][(obj1+"Object")]["fields"].includes(obj_last)){
                            results[fileToAnalyse]["builtIns"][obj1].push(obj_function);
                            return stmt
                        }

                    }
                    
                }
                
                if (!results[fileToAnalyse].hasOwnProperty("Object")){
                    if (metadata["builtIns"][("ObjectObject")]["functions"].includes(obj_last)){
                        results[fileToAnalyse]["builtIns"]["Object"]=[obj_function]
                    } else if (metadata["builtIns"][("ObjectObject")]["fields"].includes(obj_last)){
                        results[fileToAnalyse]["builtIns"]["Object"]=[obj_function]
                    }                        
                }
                else{
                    if (!results[fileToAnalyse]["builtIns"]["Object"].includes(obj_function)){
                    
                        if (metadata["builtIns"][("ObjectObject")]["functions"].includes(obj_last)){
                            results[fileToAnalyse]["builtIns"]["Object"].push(obj_function);
                        } else if (metadata["builtIns"][("ObjectObject")]["fields"].includes(obj_last)){
                            results[fileToAnalyse]["builtIns"]["Object"].push(obj_function);
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

function getLines(file){
    var program = file.split("\n")
    var count = 0
    var in_commentary=false
    for (var line = 0; line < program.length - 1; line++) {
        if (program[line].slice(0, 5)==="/*---"){
            in_commentary=true
        }
        else if (program[line].slice(0, 5)==="---*/"){
            in_commentary=false
        }
        else if(!in_commentary && program[line].slice(0,2)!=="//" && program[line]!==""){
            count++
        }
    }
    return count
}

function directories(filepath, metadata){
    var path = filepath.replace('./test262-main/test/','');
    var folders = path.split('/');
    
    for (f in folders){
        if (!path.includes('/')){
            break;
        }

        path = path.replace(folders[f]+'/','')
        metadata[folders[f]] = folders[parseInt(f)+1]
    } ;
    
}


//loads all metadata file
var file = readFileContent("metadata_test262.json");
var metadata = JSON.parse(file);
//var metadata =[{"path":"./test262-main/test/built-ins/Array/15.4.5-1.js","info":" |The [[Prototype]] property of the newly constructed object\nis set to the original Array prototype object, the one that\nis the initial value of Array.prototype\n","version":5,"esid":" 15.4.1_A1.1_T1","description":" >Create new property of Array.prototype. When new Array object has\nthis property\n"}]
version =parseVersion();

//cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
//exclusevily from an upper version associates the test to that version
for (var i=0; i < metadata.length; i++){
    var assert=0
    var error=0

    //loads the test
    var fileToAnalyse = metadata[i].path;
    var program_text = readFileContent(fileToAnalyse);
    directories(fileToAnalyse, metadata[i])
    //use of esprima to analyse the test
    var path = fileToAnalyse.replace('./test262-main/test/','');
    var folders = path.split('/');
    
    for (f in folders){
        if (!path.includes('/')){
            break;
        }

        path = path.replace(folders[f]+'/','')
        metadata[i][folders[f]] = folders[parseInt(f)+1]
    };

    if (version.hasOwnProperty(fileToAnalyse)) {
        if (version[fileToAnalyse].substring(0, 2) ==="es"){
            metadata[i]["version"] = parseInt(version[fileToAnalyse].substring(2), 10)
        }
    } 

    try{
        var program = p(program_text);

        analysis(program, i, metadata);

        metadata[i]["asserts"] = assert
        metadata[i]["error"] = error 
        metadata[i]["esprima"] = "supported"

    } catch(e){
        //fault in esprima

        metadata[i]["asserts"] = (program_text.match(/assert/g) || []).length
        metadata[i]["error"] = (program_text.match(/ERROR/g) || []).length 
        metadata[i]["esprima"] = "not supported"
    }      
    metadata[i]["lines"] = getLines(program_text)
      

}

//writes the result in a file
fs.writeFile("metadata_version.json", JSON.stringify(metadata), function(){});