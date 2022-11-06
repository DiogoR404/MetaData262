import json
import subprocess
import multiprocessing
from itertools import repeat
import os
import tqdm
import sys

def runSubProcess(command: list) -> tuple:
    process = subprocess.Popen(command,  bufsize=4096, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = error = ''

    try:
        output, error = process.communicate(timeout=10)
        output = output.decode("latin1")
        error = error.decode("latin1")
    except subprocess.TimeoutExpired:
        pass

    if process.returncode != 0:
        error += output
    return (output, error)

def changeNodeVersion(version:str) -> None:
    _, error = runSubProcess(["n", version])
    if error != '':
        print('ERROR: was not able to change node version!')
        print('Check that the program has super user premissions.')
        exit()


def changeNextEngine(engine: str, version: str) -> str:
    if (engine == 'node'):
        changeNodeVersion(version)
        return 'node'
    elif (engine == 'spiderMonkey'):
        return version
    elif (engine == 'v8'):
        return version
    print("ERROR: Engine not recognized")
    exit(1)


def runTest(engine: str, test: dict, harness: dict, version: int, builtInFunctions: str) -> tuple:
    def getHarness() -> str:
        return harness['module' if hasFlag('module') else 'default'][version]
    def hasFlag(flag: str) -> bool:
        return testFlags != None and flag in testFlags

    # create test file with every thing needed to run
    codeToExecute = ''
    testFlags = test.get('flags')
    if hasFlag('onlyStrict'):
        codeToExecute += '"use strict";\n'
    if builtInFunctions: # if is running the builtIn dynamic approach
        codeToExecute += builtInFunctions
    if not hasFlag('raw'):
        codeToExecute += getHarness()
    if 'includes' in test:
        for file in test['includes']:
            with open('test262/harness/'+file, 'r') as f:
                codeToExecute += f.read()
    if builtInFunctions != '':
        codeToExecute += 'log42 = [];\n'
    with open(test['path'], 'r') as f:
        codeToExecute += f.read()
    if builtInFunctions:
        codeToExecute += '\nconst t= JSON.parse(JSON.stringify(log42));\nconsole.log(t);'
    with open(test['path'], "w") as f:
        f.write(codeToExecute)
    command = [engine]
    if hasFlag('module'):
        command += ['--module']
    command += [test['path']]
    # run test
    output, errorOutput = runSubProcess(command)

    # check if the result is correct
    if hasFlag('async') and output == 'Test262:AsyncTestComplete':
        return (True, output)
    elif errorOutput == '' and 'negative' not in test:
        return (True, output)
    elif hasFlag('module') and version < 11 and version > 6 \
            and 2 == len(errorOutput.split('\n')) and '' == errorOutput.split('\n')[1]:
        return (True, output)
    elif 'negative' in test and test['negative']['type'] in errorOutput:
        # does not need to check that phase coincides
        return (True, errorOutput)
    return (False, output + errorOutput)

def dynamicComputation(harness: dict, testMetaData: list, engine: str, version: int, builtInFunctions='') -> dict:
    result = {'correct': {}, 'error': {}}
    with multiprocessing.Pool() as p:
        inputs = zip(repeat(engine), testMetaData, repeat(harness), repeat(version), repeat(builtInFunctions))
        r = p.starmap(runTest, tqdm.tqdm(inputs, total=len(testMetaData)))

    for i in range(len(testMetaData)):
        keyName = 'correct' if r[i][0] else 'error'
        result[keyName][testMetaData[i]['path']] = r[i][1]

    return result

def loadHarness(data) -> dict:
    harness = {}
    for harnessType in data:
        harness[harnessType] = {}
        for key, value in data[harnessType].items():
            with open(value, 'r') as f:
                harness[harnessType][int(key)] = f.read()
    return harness

def getTestMetaData() -> tuple:
    if len(sys.argv) > 2 and sys.argv[2] == '-t':
        pathMetadata = 'test.json'
    else:
        pathMetadata = 'metadata_test262.json'
    with open(pathMetadata, 'r') as f:
        testMetaData = json.load(f)
    if len(sys.argv) > 3:
        testMetaData = testMetaData[int(sys.argv[3]):]
    ignore = []
    toTest = []

    # separate tests (usual, module and SystaxError)
    for test in testMetaData:
        if 'negative' in test and test['negative']['type'] == 'SyntaxError' \
                or 'flags' in test and 'non-deterministic' in test['flags']:
            ignore += [test]
        else:
            toTest += [test]
    return toTest, ignore

def versionDynamicComputation(listVersions: list[int], harness: dict, listEngines: dict) -> None:
    results = {}
    testMetaData, results["notSupportedIgnored"] = getTestMetaData()
    for version in listVersions:
        print('Computing', version)
        os.system('rm -rf test/')
        os.system('cp -r test262/test test')
        engine = changeNextEngine("v8", listEngines["v8"][str(version)])
        output = dynamicComputation(harness, testMetaData, engine, version)
        results[version] = list(output['correct'].keys())
        listFailed = list(output['error'].keys())
        testMetaData = list(filter(lambda x: x['path'] in listFailed, testMetaData))

    results["notSupported"] = testMetaData + results["notSupportedIgnored"]
    with open("new_dynamic/stats.json", "w") as f:
        stats = list(map(lambda x : {x: len(results[x])}, results))
        json.dump(stats, f, indent=4)
    with open("new_dynamic/result.json", "w") as f:
        del results["notSupportedIgnored"]
        versionsToDelete = list(filter(lambda key: isinstance(key, int), results.keys()))
        for key in versionsToDelete:
            results['es' + str(key)] = results[key]
            del results[key]
        json.dump(results, f)

def builtInDynamicComputation(listVersions: list[int], harness: dict, listEngines: dict) -> None:
    with open('func.js', 'r') as f:
        builtInFunctions = f.read()
    version = listVersions[-1]

    resultsBuiltIns = {'negative': {}, 'correct': {}, 'error': {}}
    testMetaData, resultsBuiltIns["negative"] = getTestMetaData()
    print('Computing', version)
    os.system('rm -rf test/')
    os.system('cp -r test262/test test')
    engine = changeNextEngine("v8", listEngines["v8"][str(version)])
    output = dynamicComputation(harness, testMetaData, engine, version, builtInFunctions)
    resultsBuiltIns['correct'] |= output['correct']
    resultsBuiltIns['error'] |= output ['error']

    print('Number of errors:', len(resultsBuiltIns['error']))
    with open('dynamic_built-in_results.json', 'w') as f:
        f.write(json.dumps(resultsBuiltIns))

def main():
    if len(sys.argv) < 1 or sys.argv[1] not in ['version', 'builtIn']:
        print('Error: expected "version" or "builtIn" analisys')
        exit(1)

    analisysType = sys.argv[1]

    with open('dynamicAnalisis.json', 'r') as f:
        data = json.load(f)

    if analisysType == 'version':
        versionDynamicComputation(data['versions'], loadHarness(data['harness']), data['engines'])

    elif analisysType == 'builtIn':
        builtInDynamicComputation(data['versions'], loadHarness(data['harness']), data['engines'])

if __name__ == '__main__':
    main()
