//node taintedAnalysis.js
var p = require('esprima').parse;
const fs = require('fs');
var map = require('../utils/map.js')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

//runs through the stmt to find some function, variable, syntax or operator that's exclusively from a version
function analysis(stmt, fileToAnalyse, results) {
    function mapper(stmt) {
        if (stmt === undefined) {
            return;
        }
        if (!results.hasOwnProperty(fileToAnalyse)) {
            results[fileToAnalyse] = [stmt.type];

        } else if (!results[fileToAnalyse].includes(stmt.type)) {
            results[fileToAnalyse].push(stmt.type);
        }
    }

    map(mapper, stmt);
}

function computeConstructs(pathToTest262, metadata) {
    //loads all metadata file
    let results = {};

    for (let i = 0; i < metadata.length; i++) {
        //reads the test
        let fileToAnalyse = metadata[i].path;
        let program_text = readFileContent(pathToTest262 + fileToAnalyse);

        //use of esprima to analyse the test
        try {
            analysis(p(program_text), fileToAnalyse, results);
        } catch (e) {
            //error in esprima
        }

    }

    //writes the result in a file
    fs.writeFile(__dirname + "/results/result.json", JSON.stringify(results), function () { });
    return results;
}

if (require.main === module) {
    let metadata = JSON.parse(readFileContent(__dirname + "/../official/results/metadata_test262.json"));
    computeConstructs(__dirname + '/../../resources/test262/', metadata);
} else {
    module.exports = computeConstructs;
}