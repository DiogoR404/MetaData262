const fs = require('fs');
const p = require('esprima').parse;

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');
}

//checks if version1 is lower than version2
function getHigherVersion(version1, version2) {
    v1 = parseInt(version1);
    v2 = parseInt(version2);

    if (!v1 && !v2) return 'notSupported';
    else if (!v1) return version2;
    else if (!v2) return version1;

    return v1 > v2 ? version1 : version2;
}

function main() {
    const resultsDynamic = JSON.parse(readFileContent(__dirname + "/results/dynamic/result.json"));
    const resultsStatic = JSON.parse(readFileContent(__dirname + "/results/static/result.json"));
    const metadata = JSON.parse(readFileContent(__dirname + "/../official/results/metadata_test262.json"));
    const results = {};

    for (let test in metadata) {
        const path = metadata[test].path; 
        results[path] = getHigherVersion(resultsDynamic[path], resultsStatic[path].slice(2));
    }

    fs.writeFileSync(__dirname + '/results/mixedAnalysis.json', JSON.stringify(results));
}

main()