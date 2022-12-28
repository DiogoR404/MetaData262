import json
import os
import sys
currentDirectory = os.path.dirname(os.path.abspath(__file__))
sys.path.append(currentDirectory + "/../utils")
from dynamicRunTest262 import getTestMetaData, dynamicComputation

def main():
    with open(currentDirectory + '/../configurations/dynamicAnalysis.json', 'r') as f:
        configuration = json.load(f)

    with open(currentDirectory + '/results/builtInsWrappers.js', 'r') as f:
        builtInWrappers = f.read()
    version = configuration['versions'][-1]

    resultsBuiltIns = {'negative': {}, 'correct': {}, 'error': {}}
    testMetaData, resultsBuiltIns["negative"] = getTestMetaData()
    print('Computing', version)
    output = dynamicComputation(configuration, "v8", version, testMetaData, builtInWrappers)
    resultsBuiltIns['correct'] |= output['correct']
    resultsBuiltIns['error'] |= output ['error']

    # prepare results
    for test, result in resultsBuiltIns['correct'].items():
        wrapperTextTest = list(map(lambda x: x.split('.'), result[1].split(',')))
        outputResult = {}
        for wrapperOutput in wrapperTextTest:
            builtIn = wrapperOutput[0]
            if builtIn == '': continue
            outputResult[wrapperOutput[0]] = outputResult.get(wrapperOutput[0], [])+ ['.'.join(wrapperOutput[1:])]
        resultsBuiltIns['correct'][test] = outputResult

    print('Number of errors:', len(resultsBuiltIns['error']))
    outputPath = currentDirectory + '/results/'
    if len(sys.argv) > 1 and sys.argv[1] == '-t':
        outputPath += 'dynamic_test.json'
    else:
        outputPath += 'dynamic.json'
    with open(outputPath, 'w') as f:
        f.write(json.dumps(resultsBuiltIns))

if __name__ == '__main__':
    main()
