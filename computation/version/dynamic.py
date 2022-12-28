import json
import os
import sys
currentDirectory = os.path.dirname(os.path.abspath(__file__))
sys.path.append(currentDirectory + "/../utils/")
from dynamicRunTest262 import getTestMetaData, dynamicComputation


def main():
    with open(currentDirectory + '/../configurations/dynamicAnalysis.json', 'r') as f:
        configuration = json.load(f)

    resultsPerVersion = {}
    results = {}
    testMetaData, resultsPerVersion["notSupportedIgnored"] = getTestMetaData()

    for version in configuration['versions']:
        print('Computing', version)
        output = dynamicComputation(configuration, "v8", version, testMetaData)
        resultsPerVersion[version] = list(output['correct'].keys())
        listFailed = list(output['error'].keys())
        testMetaData = list(filter(lambda x: x['path'] in listFailed, testMetaData))
    resultsPerVersion["notSupported"] = list(map(lambda x: x['path'], testMetaData + resultsPerVersion["notSupportedIgnored"]))

    stats = list(map(lambda x : {x: len(resultsPerVersion[x])}, resultsPerVersion))
    with open(currentDirectory + "/results/dynamic/stats.json", "w") as f:
        json.dump(stats, f, indent=4)
        
    resultsPerVersion.pop('notSupportedIgnored')
    results = {test : version for version in resultsPerVersion for test in resultsPerVersion[version]}

    outputPath = currentDirectory + '/results/dynamic/'
    if len(sys.argv) > 1 and sys.argv[2] == '-t':
        outputPath += 'result_test.json'
    else:
        outputPath += 'result.json'
    with open(outputPath, 'w') as f:
        json.dump(results, f)


if __name__ == '__main__':
    main()
