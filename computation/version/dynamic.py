import json
import sys
sys.path.append("../utils/")
from dynamicRunTest262 import getTestMetaData, dynamicComputation


def main():
    with open('../configurations/dynamicAnalysis.json', 'r') as f:
        configuration = json.load(f)

    results = {}
    testMetaData, results["notSupportedIgnored"] = getTestMetaData()

    for version in configuration['versions']:
        print('Computing', version)
        output = dynamicComputation(configuration, "v8", version, testMetaData)
        results[version] = list(output['correct'].keys())
        listFailed = list(output['error'].keys())
        testMetaData = list(filter(lambda x: x['path'] in listFailed, testMetaData))
    results["notSupported"] = testMetaData + results["notSupportedIgnored"]

    with open("results/dynamic/stats.json", "w") as f:
        stats = list(map(lambda x : {x: len(results[x])}, results))
        json.dump(stats, f, indent=4)
        
    with open("results/dynamic/result.json", "w") as f:
        versionsToDelete = list(filter(lambda key: isinstance(key, int), results.keys()))
        for key in versionsToDelete:
            results['es' + str(key)] = results[key]
            del results[key]
        json.dump(results, f)


if __name__ == '__main__':
    main()
