import json
import os
import sys
currentDirectory = os.path.dirname(os.path.abspath(__file__))
sys.path.append(currentDirectory + "/../utils/")
from dynamicRunTest262 import getTestMetaData, dynamicComputation

def runEngine(configuration, engine):
    resultsPerVersion = {}
    results = {}
    testMetaData, resultsPerVersion["notSupportedIgnored"] = getTestMetaData()

    for version in configuration['versions']:
        print('Computing', version)
        output = dynamicComputation(configuration, engine, version, testMetaData)
        resultsPerVersion[version] = list(output['correct'].keys())
        listFailed = list(output['error'].keys())
        testMetaData = list(filter(lambda x: x['path'] in listFailed, testMetaData))
    resultsPerVersion["notSupported"] = list(map(lambda x: x['path'], testMetaData + resultsPerVersion["notSupportedIgnored"]))

    stats = list(map(lambda x : {x: len(resultsPerVersion[x])}, resultsPerVersion))
    outputPath = f'{currentDirectory}/results/dynamic/{engine}/'
    os.makedirs(os.path.dirname(outputPath), exist_ok=True)
    with open(outputPath + "stats.json", "w") as f:
        json.dump(stats, f, indent=4)
        
    resultsPerVersion.pop('notSupportedIgnored')
    results = {test : version for version in resultsPerVersion for test in resultsPerVersion[version]}

    resultOutputPath = outputPath
    if len(sys.argv) > 1 and sys.argv[1] == '-t':
        resultOutputPath += 'result_test.json'
    elif '-lastVersion' in sys.argv:
        resultOutputPath += 'result_lastVersion.json'
    else:
        resultOutputPath += 'result.json'
    with open(resultOutputPath, 'w') as f:
        json.dump(results, f)

def main():
    with open(currentDirectory + '/../configurations/dynamicAnalysis.json', 'r') as f:
        configuration = json.load(f)

    if '-lastVersion' in sys.argv:
        configuration['versions'] = configuration['versions'][-1:]
    
    for engine in configuration['engines'].keys():
        print('Running engine', engine)
        runEngine(configuration, engine)


if __name__ == '__main__':
    main()
