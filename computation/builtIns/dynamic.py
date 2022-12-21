import json
import sys
sys.path.append("../utils")
from dynamicRunTest262 import getTestMetaData, dynamicComputation

def main():
    with open('../configurations/dynamicAnalysis.json', 'r') as f:
        configuration = json.load(f)

    with open('results/builtInsWrappers.js', 'r') as f:
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
        wrapperTextTest = list(map(lambda x: x.split('.'), result.replace('Test262:AsyncTestComplete', '').strip().split(',')))
        outputResult = {}
        for wrapperOutput in wrapperTextTest:
            builtIn = wrapperOutput[0]
            if builtIn == '': continue
            outputResult[wrapperOutput[0]] = outputResult.get(wrapperOutput[0], [])+ ['.'.join(wrapperOutput[1:])]
        resultsBuiltIns['correct'][test] = outputResult
    print('Number of errors:', len(resultsBuiltIns['error']))
    with open('results/dynamic.json', 'w') as f:
        f.write(json.dumps(resultsBuiltIns))

if __name__ == '__main__':
    main()
