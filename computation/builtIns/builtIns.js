const fs = require('fs');

function main() {
    let staticResult = JSON.parse(fs.readFileSync(__dirname + '/results/static.json'));
    let dynamicResult = JSON.parse(fs.readFileSync(__dirname + '/results/dynamic.json'))['correct'];
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
}

main()
