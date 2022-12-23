const fs = require('fs');
const esprima = require('esprima');
const map = require('../utils/map');
const runProcess = require('../utils/runProcess');
const computeOfficialMetadata = require('../official/search_metadata_from_test262');
const computeVersion = require('../version/version');
const computeConstructs = require('../constructs/search_syntactic_constructs');
const computeBuiltIns = require('../builtIns/builtIns');
const { exit } = require('process');

function getLines(file) {
    var program = file.split("\n");
    var count = 0;
    var in_commentary = false;
    for (var line = 0; line < program.length - 1; line++) {
        if (program[line].slice(0, 5) === "/*---") {
            in_commentary = true;
        }
        else if (program[line].slice(0, 5) === "---*/") {
            in_commentary = false;
        }
        else if (!in_commentary && program[line].slice(0, 2) !== "//" && program[line] !== "") {
            count++;
        }
    }
    return count;
}

function analysisProgram(stmt) {
    function mapper(stmt) {
        if (stmt === undefined) {
            return stmt;
        }

        if (stmt.type === "Identifier") {
            if (stmt.name === "assert") assert++;
            else if (stmt.name === "$ERROR") error++;
        }
        return stmt;
    }

    let assert = 0, error = 0;
    map(mapper, stmt);
    return [assert, error];
}

function addFinalMetadata(test) {
    //loads the test
    const fileToAnalyse = test.path;
    const program_text = fs.readFileSync('../test262/' + fileToAnalyse, 'utf-8');
    test['pathSplit'] = fileToAnalyse.replace('test/', '').split('/');

    try {
        [test["asserts"], test["error"]] = analysisProgram(esprima.parse(program_text));
        test["isSupportedEsprima"] = true;

    } catch (e) {
        //fault in esprima
        test["asserts"] = (program_text.match(/assert/g) || []).length;
        test["error"] = (program_text.match(/ERROR/g) || []).length;
        test["isSupportedEsprima"] = false;
    }
    test["lines"] = getLines(program_text);
}


async function main() {
    let metadata = computeOfficialMetadata();
    let testing = false;
    if (process.argv[2] === '-t') {
        // testing
        testing = true;
        const testingPaths = JSON.parse(fs.readFileSync('../support/testingDynamicSubSet.json')).map((test) => {
            return test.path;
        });
        metadata = metadata.filter((test) => { return testingPaths.includes(test.path) });
    }
    console.log(`Number of test = ${metadata.length}`);

    const versions = await computeVersion(metadata, testing);
    const constructs = computeConstructs(metadata);
    const builtIns = await computeBuiltIns(metadata, testing);

    for (let i in metadata) {
        let test = metadata[i];

        const testVersion = parseInt(versions[test.path]);
        if (testVersion) test['version'] = testVersion;

        const testBuiltIns = builtIns[test.path];
        if (Object.keys(testBuiltIns).length !== 0) test['built-ins'] = testBuiltIns;

        const testConstructs = constructs[test.path];
        if (testConstructs) test['syntactic_constructors'] = testConstructs;

        addFinalMetadata(test);
    }
    fs.writeFile("results/metadata_version.json", JSON.stringify(metadata), function () { });
}

main()