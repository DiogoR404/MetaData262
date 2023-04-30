const fs = require('fs');
const runProcess = require('../utils/runProcess');
const computeStaticVersion = require('./static')

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');
}

function getHigherVersion(version1, version2) {
    v1 = parseInt(version1);
    v2 = parseInt(version2);

    if (!v1 && !v2) return 'notSupported';
    else if (!v1) return version2;
    else if (!v2) return version1;

    return v1 > v2 ? version1 : version2;
}

function minimumVersion(test, version) {
    function pathHasElements(arrayElements) {
        return arrayElements.some(elm => {
            return test.path.includes(elm) ? true : false;
        });
    }

    if (!parseInt(version)) return version;

    if (pathHasElements(["named-groups"])) {
        return getHigherVersion(version, 9)

    } if (pathHasElements(['Array/prototype/includes', 'async'])) {
        return getHigherVersion(version, 8);

    } if (pathHasElements(['module-code', 'arrow', 'generator', 'dstr'])) {
        return getHigherVersion(version, 6)
    }

    return version;
}

async function computeVersion(pathToTest262, metadata, configuration, testing) {
    const resultsStatic = computeStaticVersion(pathToTest262, metadata);
    let args = [__dirname + '/dynamic.py'];
    let dynamicOuputFile = 'result.json';
    if (testing) {
        args.push('-t');
        dynamicOuputFile = 'result_test.json'
    }
    await runProcess('python3', args);
    const resultsDynamic = [];
    for (const engine in configuration['engines']) {
        resultsDynamic.push(JSON.parse(readFileContent(__dirname + "/results/dynamic/" + engine+ "/" + dynamicOuputFile)))
    }

    const results = {};
    const stats = {};
    // const diffVersion = [];
    for (let test in metadata) {
        const path = metadata[test].path;
        let version = resultsStatic[path].slice(2);

        for (let i = 0; i < resultsDynamic.length; i++) {
            version = getHigherVersion(version, resultsDynamic[i][path]);
        }

        version = minimumVersion(metadata[test], version);
        results[path] = version;

        // for checking results
        if (!stats.hasOwnProperty(version)) stats[version] = 0;
        stats[version] += 1;
    }

    fs.writeFileSync(__dirname + '/results/stats.json', JSON.stringify(stats));
    console.log(stats);

    fs.writeFileSync(__dirname + '/results/result.json', JSON.stringify(results));
    return results;
}

if (require.main === module) {
    const metadata = JSON.parse(readFileContent(__dirname + "/../official/results/metadata_test262.json"));
    const configuration = JSON.parse(readFileContent(__dirname + "/../configurations/dynamicAnalysis.json"));
    const testing = process.argv[2] === '-t';
    computeVersion(__dirname + "/../../resources/test262/", metadata, configuration, testing);
} else {
    module.exports = computeVersion;
}
