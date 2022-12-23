const fs = require('fs');
const computeStaticBuiltIns = require('./static');
const generateBuiltInWrappers = require('./generateBuiltInWrappers');
const runProcess = require(__dirname + '/../utils/runProcess');

async function computeBuiltIns(pathToTest262, metadata, testing) {
    const staticResult = computeStaticBuiltIns(pathToTest262, metadata);
    await runProcess('python3', [__dirname + '/collectBuiltInSignatures.py']);
    generateBuiltInWrappers();
    let args = [__dirname + '/dynamic.py'];
    if (testing) args.push('-t');
    await runProcess('python3', args);
    const dynamicResult = JSON.parse(fs.readFileSync(__dirname + '/results/dynamic.json'))['correct'];

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
    fs.writeFile(__dirname + "/results/result.json", JSON.stringify(result), () => { });
    return result;
}

if (require.main === module) {
    let metadata = JSON.parse(fs.readFileSync(__dirname + "/../official/results/metadata_test262.json"), 'utf-8');
    computeBuiltIns(__dirname + '/../../resources/test262/', metadata, true);
} else {
    module.exports = computeBuiltIns;
}
