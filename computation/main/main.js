const fs = require('fs');
const esprima = require('esprima');
const map = require('../utils/map');
const computeOfficialMetadata = require('../official/search_metadata_from_test262');
const computeVersion = require('../version/version');
const computeConstructs = require('../constructs/search_syntactic_constructs');
const computeBuiltIns = require('../builtIns/builtIns');

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
            else if (stmt.name === "Test262Error") error++;
        }
        return stmt;
    }

    let assert = 0, error = 0;
    map(mapper, stmt);
    return [assert, error];
}

function addFinalMetadata(pathToTest262, test) {
    //loads the test
    const fileToAnalyse = test.path;
    const program_text = fs.readFileSync(pathToTest262 + fileToAnalyse, 'utf-8');

    try {
        [test["asserts"], test["errors"]] = analysisProgram(esprima.parse(program_text));
        test["isSupportedEsprima"] = true;

    } catch (e) {//fault in esprima
        //ignore frontmatter
        const code = program_text.slice(program_text.indexOf('---*/'));

        test["asserts"] = (code.match(/assert\.|assert\(/g) || []).length;
        test["errors"] = (code.match(/Test262Error/g) || []).length;
        test["isSupportedEsprima"] = false;
    }
    test["lines"] = getLines(program_text);
}


async function main() {
    const conf = JSON.parse(fs.readFileSync(__dirname + '/conf.json'));
    const computationConfig = JSON.parse(fs.readFileSync(__dirname + '/../configurations/dynamicAnalysis.json'));
    const pathToTest262 = conf.hasOwnProperty('pathToTest262') ? conf.pathToTest262 : __dirname + "/../../resources/test262/";

    let metadata = computeOfficialMetadata(pathToTest262);
    let testing = false;
    if (process.argv[2] === '-t') {
        // testing => run with a subset of test262
        testing = true;
        const testingPaths = JSON.parse(fs.readFileSync(__dirname + '/../support/testingDynamicSubSet.json')).map((test) => {
            return test.path;
        });
        metadata = metadata.filter((test) => { return testingPaths.includes(test.path) });
    }
    console.log(`Will test ${metadata.length} tests`);

    let versions, constructs, builtIns;
    if (process.argv[2] === '-nc') {
        versions = JSON.parse(fs.readFileSync(__dirname + '/../version/results/result.json'));
        constructs = JSON.parse(fs.readFileSync(__dirname + '/../constructs/results/result.json'));
        builtIns = JSON.parse(fs.readFileSync(__dirname + '/../builtIns/results/result.json'));
    } else {
        versions = await computeVersion(pathToTest262, metadata, computationConfig, testing);
        constructs = computeConstructs(pathToTest262, metadata);
        builtIns = await computeBuiltIns(pathToTest262, metadata, testing, computationConfig);
    }


    for (let i in metadata) {
        let test = metadata[i];

        const testVersion = parseInt(versions[test.path]);
        if (testVersion) test['version'] = testVersion;

        const testBuiltIns = builtIns[test.path];
        if (Object.keys(testBuiltIns).length !== 0) test['builtIns'] = testBuiltIns;

        const testConstructs = constructs[test.path];
        if (testConstructs) test['syntacticConstructors'] = testConstructs;

        addFinalMetadata(pathToTest262, test);
    }
    fs.writeFile(__dirname + "/results/metadata_version.json", JSON.stringify(metadata), function () { });
}

main()
