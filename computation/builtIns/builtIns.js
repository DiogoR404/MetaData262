const fs = require('fs');
const computeStaticBuiltIns = require('./static');
const generateBuiltInWrappers = require('./generateBuiltInWrappers');
const runProcess = require(__dirname + '/../utils/runProcess');

async function computeBuiltIns(pathToTest262, metadata, testing, conf) {
    const staticResult = computeStaticBuiltIns(pathToTest262, metadata, conf.versions.at(-1));

    generateBuiltInWrappers(conf.versions);

    let args = [__dirname + '/dynamic.py'];
    let dynamicOuputFile = 'dynamic.json';
    if (testing) {
        args.push('-t');
        dynamicOuputFile = 'dynamic_test.json'
    }
    await runProcess('python3', args);
    const dynamicResult = JSON.parse(fs.readFileSync(__dirname + '/results/' + dynamicOuputFile))['correct'];

    let result = {};
    for (const test in staticResult) {
        result[test] = {};
        if (!dynamicResult.hasOwnProperty(test)) {
            result[test] = {...staticResult[test]};
        } else {
            for (const builtIn in staticResult[test]){
                result[test][builtIn] = [ ... new Set([
                    ...dynamicResult[test].hasOwnProperty(builtIn) ? dynamicResult[test][builtIn]: [],
                    ...staticResult[test][builtIn]
                ])];
            }
        }
    }
    for (const test in dynamicResult) {
        for (const builtIn in dynamicResult[test]) {
            if (!result[test].hasOwnProperty(builtIn)) {
                result[test][builtIn] = dynamicResult[test][builtIn];
            }
        }
    }
    fs.writeFile(__dirname + "/results/result.json", JSON.stringify(result), () => { });
    return result;
}

if (require.main === module) {
    const conf = JSON.parse(fs.readFileSync(__dirname + "/../configurations/dynamicAnalysis.json"));
    let metadata = JSON.parse(fs.readFileSync(__dirname + "/../official/results/metadata_test262.json"), 'utf-8');
    const testing = process.argv[2] === '-t';
    computeBuiltIns(__dirname + '/../../resources/test262/', metadata, testing, conf);
} else {
    module.exports = computeBuiltIns;
}
