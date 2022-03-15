//GetMetadata
//  runs through a directory, given as argument 
//  recursively analyses every file in the directory and files in the directory
//    for each file it takes the metadata associated to it - written in commentary in the beginning of the file  

var p = require('esprima').parse;
const fs = require('fs');
var map = require('./tese/Tese/javascript/map.js')

//reads file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

function GetMetadata(path){

    function multiple_lines(intial_string){
        var i = 1;
        var string = intial_string;
        
        while (!(program[line + i].charAt(0) !== " " && program[line + i].split(":").length > 1) && program[line + i] !== "---*/") {

            string = string.concat(program[line + i].replace(/\s{2,}/g, '') + "\n");
            i++;
        }
        return string;
    }

    var program_text = readFileContent(path);

    var metadata = {
        path: path
    };

    program = program_text.split("\n");
    //metadata["eval"] = searchEval(program_text, path);

    //saltar o copyright
    for (var line = 2; line < program.length - 1; line++) {
        lineArray = program[line].split(":");
        switch (lineArray[0].replace(/ /g, "")) {
            case "description":
            case "info":
            
            {
                metadata[lineArray[0].replace(/ /g, "")] = multiple_lines(lineArray[1]);
                break;
            }
            case "negative":{
                var negative ={
                    "phase": program[++line].split(":")[1].replace(" ", ""),
                    "type":program[++line].split(":")[1].replace(" ", "")
                };
                metadata[lineArray[0].replace(/ /g, "")] = negative
                break;
            }
            case "flags":
            case "features":
            case "includes":{
                var string = lineArray[1].replace("[", "").replace("]", "").replace(" ", "")
                var array =string.split(", ");
                metadata[lineArray[0].replace(/ /g, "")] = array;
                break;
            }

            case "timeout":
            case "author":
            case "esid": {
                metadata[lineArray[0].replace(/ /g, "")] = lineArray[1];
                break;
            }
            case "es5id":{
                metadata["version"] = 5;
                metadata["esid"] = lineArray[1];
                break;
            }
            case "es6id":{ 
                metadata["version"] = 6;
                metadata["esid"] = lineArray[1];
                break;
            }
            case "---*/":{
                return metadata;
            }
        }
    }
    return metadata;
}

/*
function searchEval(program_text, path){
    try{
        var program = p(program_text);
    }
    catch(e){
        console.log(path)
        console.log(e.stack);
        console.log(e.name);
        console.log(e.message);
        console.log("\n------------------------------------------------\n")
    }
    var has_eval=false;
    function mapper(stmt){
        switch(stmt.type){
            case "CallExpression" : {
                if (stmt.callee !== undefined && stmt.callee.name === 'eval'){
                    has_eval=true;
                }
            }
            default: return stmt;

        }
    }
    map(mapper, program)
    return has_eval;
}*/

function recursive(path, json) {
    const st = fs.lstatSync(path);
    var files;

    if (st.isDirectory()){
        files = fs.readdirSync(path);
        for (file in files){
            const stat = fs.lstatSync(path + "/" + files[file]);
    
            if (stat.isDirectory()){
                if (files[file] !== "harness" && files[file] !== "annexB"){
                    recursive(path + "/" + files[file], json);
                }
            }
            else {
                var metadata_final = GetMetadata(path + "/" + files[file]);
                if (metadata_final === null){
                    console.log(path + "/" + files[file]);
                }
                json.push(metadata_final);
            }
        }
    }
    else {
        var metadata_final = GetMetadata(path);
        if (metadata_final === null){
            console.log(path + "/" + files[file]);
        }
        json.push(metadata_final);
    }
    return json;
}

var new_prog_str = recursive(process.argv[2], []);

fs.writeFile("metadata_test262.json", JSON.stringify(new_prog_str), function(){});