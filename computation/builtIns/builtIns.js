const fs = require('fs');

function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');
}

function main() {
    let staticResult = JSON.parse(readFileContent('./results/static.json'));
    let dynamicResult = JSON.parse(readFileContent('./results/dynamic.json'))['correct'];
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
    fs.writeFile("./results/result.json", JSON.stringify(result), () => { });
}

main()
