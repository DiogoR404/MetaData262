const { spawn } = require('child_process');
const { exit } = require('process');
const fs = require('fs');
const esprima = require('esprima');
const map = require('../utils/map')

function getLines(file) {
    var program = file.split("\n")
    var count = 0
    var in_commentary = false
    for (var line = 0; line < program.length - 1; line++) {
        if (program[line].slice(0, 5) === "/*---") {
            in_commentary = true
        }
        else if (program[line].slice(0, 5) === "---*/") {
            in_commentary = false
        }
        else if (!in_commentary && program[line].slice(0, 2) !== "//" && program[line] !== "") {
            count++
        }
    }
    return count
}

function analysisProgram(stmt) {
    function mapper(stmt) {
        if (stmt === undefined) {
            return stmt
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

async function runProcess(app, input) {
    console.log(`running: ${[app, ...input]}`)
    const process = spawn(app, input);

    process.stdout.on('data', (data) => console.log(`${data}`))
    process.stderr.on('data', (data) => console.log(`stderr: ${data}`))

    const exitCode = await new Promise((code, _) => process.on('close', (code)))
    if (exitCode) { exit(1); }
}

async function main() {
    await runProcess('node', ['../official/search_metadata_from_test262.js'])

    await runProcess('node', ['../version/static.js'])
    await runProcess('python3', ['../version/dynamic.py'])
    await runProcess('node', ['../version/mixedAnalysis.js'])

    await runProcess('node', ['../constructs/search_syntactic_constructs.js'])

    await runProcess('node', ['../builtIns/static.js'])
    await runProcess('python3', ['../builtIns/collectBuiltInSignatures.py'])
    await runProcess('node', ['../builtIns/generateBuiltInWrappers.js'])
    await runProcess('python3', ['../builtIns/dynamic.py'])
    await runProcess('node', ['../builtIns/builtIns.js'])

    const metadata = JSON.parse(fs.readFileSync('../official/results/metadata_test262.json'))
    const versions = JSON.parse(fs.readFileSync('../version/results/mixedAnalysis.json'))
    const builtIns = JSON.parse(fs.readFileSync('../builtIns/results/result.json'))
    const constructs = JSON.parse(fs.readFileSync('../constructs/results/result.json'))

    for (let i in metadata) {
        let test = metadata[i];

        const testVersion = parseInt(versions[test.path]);
        if(testVersion) test['version'] = testVersion;

        const testBuiltIns = builtIns[test.path];
        if(Object.keys(testBuiltIns).length !== 0) test['built-ins'] = testBuiltIns;

        const testConstructs = constructs[test.path];
        if(testConstructs) test['syntactic_constructors'] = testConstructs;

        addFinalMetadata(test);
    }
    fs.writeFile("metadata_version.json", JSON.stringify(metadata), function () { });
}

main()