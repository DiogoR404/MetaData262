//node taintedAnalysis.js 
var p = require('esprima').parse;
const fs = require('fs');
var map = require('./tese/Tese/javascript/map.js')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

//runs through the stmt to find some function, variable, syntax or operator that's exclusively from a version
function analysis(stmt, fileToAnalyse, results){
    var file = readFileContent("esVersions.json");
    var metadata = JSON.parse(file)["es11"]["globalVars"];
    
    function mapper(stmt){
        
        if(stmt === undefined){
            return stmt
        }

        if (results.hasOwnProperty(fileToAnalyse) && !(results[fileToAnalyse].includes(stmt.type))){

            results[fileToAnalyse].push(stmt.type);
            
        }else if (!results.hasOwnProperty(fileToAnalyse) ){
            
            results[fileToAnalyse] = [stmt.type];
            
                
            return stmt;
        }
    }

    map(mapper, stmt);
    return results
}

//loads all metadata file
var file = readFileContent("metadata_test262.json");
var metadata = JSON.parse(file);
var results = {};

//cycles all selected tests initializing at version es5, and if the test contains a function, variable, syntax or operator
//exclusevily from an upper version associates the test to that version
for (var i=0; i < metadata.length; i++){
   
    //loads the test
    var fileToAnalyse = metadata[i].path;
    var program_text = readFileContent(fileToAnalyse);

    //use of esprima to analyse the test
    try{
        var program = p(program_text);
        results = analysis(program, fileToAnalyse, results);
        
    } catch(e){
        //fault in esprima

    }         

}

//writes the result in a file
fs.writeFile("metadata_syntactic.json", JSON.stringify(results), function(){});