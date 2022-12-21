const fs = require('fs');
const ta = require("./static");
var p = require('esprima').parse;

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

var results_dynamic = JSON.parse(readFileContent("./results/dynamic/result.json"));
// var results_spidermonkey = JSON.parse(readFileContent("./dynamic_results_spidermonkey/dynamic_analysis.json"));
let data1 = JSON.stringify(results_dynamic);

//initializes all tables
var table = ta.parseJSON();
var table_func = table[0]
var table_vars = table[1]
var table_syntax = table[2]
var table_operators = table[3]
var table_global=table[4]
var pathTest262 = "../test262/"

function mixedAnalysisNode(){
    var results = {}
    for (v in results_dynamic){
        if (v ==="notSupported"){
            for (test in results_dynamic[v]){
                var fileToAnalyse = pathTest262 + results_dynamic[v][test];
                if (results.hasOwnProperty(v)){
                    results[v].push(fileToAnalyse);
                }else{
                    results[v] = [fileToAnalyse];
                }
            }
            continue
        }
        for (test in results_dynamic[v]){
            var version = v;

            //loads the test
            var fileToAnalyse = pathTest262 + results_dynamic[v][test];
            var program_text = readFileContent(fileToAnalyse);

            //checks if test belongs to intl
            if (fileToAnalyse.includes("intl")){
                version = "intl"
            }
            //checks if test belongs to property-escapes
            else if (fileToAnalyse.includes("property-escapes")){
                version = "property-escapes"
            }

            else{
                //if test is module-code or block-scope belongs to es6 version
                if (fileToAnalyse.includes("module-code") || fileToAnalyse.includes("arrow") || fileToAnalyse.includes("generator") || fileToAnalyse.includes("dstr")){
                    if(isLowerVersion(version, "es6")){
                        version = "es6"
                    }
                }
                if (fileToAnalyse.includes("async")){
                    if(isLowerVersion(version, "es8")){

                        version = "es8"
                    }
                }
                //if test belongs to named-groups has version es9
                if (fileToAnalyse.includes("named-groups") ){
                    if(isLowerVersion(version, "es9")){

                        version ="es9"
                    }
                }

                //use of esprima to analyse the test
                try{
                    var program = p(program_text);
                    var version = ta.analysis(program, table_func, table_vars, table_syntax, table_operators, table_global, version);

                } catch(e){
                    //fault in esprima
                    //var version = "notSupported";
                }
            }

            //adds the test to the correspondent version
            if (results.hasOwnProperty(version)){
                results[version].push(fileToAnalyse);
            }else{
                results[version] = [fileToAnalyse];
            }

        }
    }
    let data2 = JSON.stringify(results);
    fs.writeFileSync('./results/mixed_analysis.json', data2);
}

function mixedAnalysisSM(){
    var results = {}

    for (v in results_spidermonkey){
        if (v ==="notSupported"){
            for (test in results_spidermonkey[v]){
                var fileToAnalyse = results_spidermonkey[v][test];
                if (results.hasOwnProperty(v)){
                    results[v].push(fileToAnalyse);
                }else{
                    results[v] = [fileToAnalyse];
                }
            }
            continue
        }
        for (test in results_spidermonkey[v]){
            var version = v;

            //loads the test
            var fileToAnalyse = results_spidermonkey[v][test]["path"];
            var program_text = readFileContent(fileToAnalyse);

            //checks if test belongs to intl
            if (fileToAnalyse.includes("intl")){
                version = "intl"
            }
            //checks if test belongs to property-escapes
            else if (fileToAnalyse.includes("property-escapes")){
                version = "property-escapes"
            }

            else{
                //if test is module-code or block-scope belongs to es6 version
                if (fileToAnalyse.includes("module-code") || fileToAnalyse.includes("arrow") || fileToAnalyse.includes("generator") || fileToAnalyse.includes("dstr")){
                    if(isLowerVersion(version, "es6")){
                        version = "es6"
                    }
                }
                if (fileToAnalyse.includes("async")){
                    if(isLowerVersion(version, "es8")){

                        version = "es8"
                    }
                }
                //if test belongs to named-groups has version es9
                if (fileToAnalyse.includes("named-groups") ){
                    if(isLowerVersion(version, "es9")){

                        version ="es9"
                    }
                }

                //use of esprima to analyse the test
                try{
                    var program = p(program_text);
                    var version = ta.analysis(program, table_func, table_vars, table_syntax, table_operators, table_global, version);

                } catch(e){
                    //fault in esprima
                    //var version = "notSupported";
                }
            }

            //adds the test to the correspondent version
            if (results.hasOwnProperty(version)){
                results[version].push(fileToAnalyse);
            }else{
                results[version] = [fileToAnalyse];
            }
        }
    }
    let data3 = JSON.stringify(results);
    fs.writeFileSync('./dynamic/mixed_analysis_sm.json', data3);

}

if (process.argv.length === 2){
    mixedAnalysisNode()
    mixedAnalysisSM()
}
else if (process.argv[2] === "node"){
    mixedAnalysisNode()
}
else if (process.argv[2] === "spidermonkey" ){
    mixedAnalysisSM()
}
else{
    console.log("Wrong Argument")
}
