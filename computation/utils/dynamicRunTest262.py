import json
import subprocess
import multiprocessing
from itertools import repeat
import os
import tqdm
import sys

def runSubProcess(command: list) -> tuple:
    process = subprocess.Popen(command,  bufsize=4096, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = ''
    try:
        output, error = process.communicate(timeout=6)
        output = output.decode("latin1")
        output += error.decode("latin1")
    except subprocess.TimeoutExpired:
        process.kill()
    return process.returncode == 0, output

def getPathTest262() -> str:
    currentDirectory = os.path.dirname(os.path.abspath(__file__))
    with open(currentDirectory + '/../main/conf.json') as f:
        conf = json.load(f)
    if 'pathToTest262' in conf:
        return conf['pathToTest262']
    return currentDirectory + '/../../resources/test262/'

def runTest(engine: str, test: dict, harness: dict, version: int, builtInWrappers: str) -> tuple:
    def getHarness() -> str:
        return harness['module' if hasFlag('module') else 'default'][version]
    def hasFlag(flag: str) -> bool:
        return testFlags != None and flag in testFlags

    # create test file with every thing needed to run
    codeToExecute = ''
    testFlags = test.get('flags')
    if hasFlag('onlyStrict'):
        codeToExecute += '"use strict";\n'
    if builtInWrappers: # if is running the builtIn dynamic approach
        codeToExecute += builtInWrappers
    if not hasFlag('raw'):
        codeToExecute += getHarness()
    if 'includes' in test:
        for file in test['includes']:
            with open(getPathTest262() + 'harness/' + file, 'r') as f:
                codeToExecute += f.read()
    if builtInWrappers != '':
        codeToExecute += 'log42 = [];\n'
    with open(test['path'], 'r') as f:
        codeToExecute += f.read()
    if builtInWrappers:
        codeToExecute += '\nconst t= JSON.parse(JSON.stringify(log42));\nconsole.log(t);'
    with open(test['path'], "w") as f:
        f.write(codeToExecute)
    command = [engine]
    if hasFlag('module'):
        command += ['--module']
    command += [test['path']]
    # run test
    hasNoError, output = runSubProcess(command)

    # check if the result is correct
    if hasFlag('async'):
        return (output.strip() == 'Test262:AsyncTestComplete', output)
    elif hasNoError and 'negative' not in test:
        return (True, output)
    elif hasFlag('module') and version < 11 and version > 6 \
            and 2 == len(output.split('\n')) and '' == output.split('\n')[1]:
        return (True, output)
    elif 'negative' in test and test['negative']['type'] in output:
        # does not need to check that phase coincides
        return (True, output)
    return (False, output)

def dynamicComputation(configuration: dict, engine: str, version: int, testMetaData: list, builtInWrappers='') -> dict:
    harness = loadHarness(configuration['harness'])
    enginePath = configuration['engines'][engine][str(version)]
    os.system('rm -rf test/')
    os.system('cp -r ' + getPathTest262() + 'test test')
    result = {'correct': {}, 'error': {}}
    inputs = zip(repeat(enginePath), testMetaData, repeat(harness), repeat(version), repeat(builtInWrappers))
    with multiprocessing.Pool() as p:
        r = p.starmap(runTest, tqdm.tqdm(inputs, total=len(testMetaData)))
    for i in range(len(testMetaData)):
        keyName = 'correct' if r[i][0] else 'error'
        result[keyName][testMetaData[i]['path']] = r[i][1]
    os.system('rm -rf test/')
    return result

def loadHarness(data) -> dict:
    currentDirectory = os.path.dirname(os.path.abspath(__file__))
    harness = {}
    for harnessType in data:
        harness[harnessType] = {}
        for key, value in data[harnessType].items():
            with open(currentDirectory + '/../../resources/harness/' + value, 'r') as f:
                harness[harnessType][int(key)] = f.read()
    return harness

def getTestMetaData() -> tuple:
    currentDirectory = os.path.dirname(os.path.abspath(__file__))
    if len(sys.argv) > 1 and sys.argv[1] == '-t':
        pathMetadata = currentDirectory + '/../support/testingDynamicSubSet.json'
    else:
        pathMetadata = currentDirectory + '/../official/results/metadata_test262.json'
    with open(pathMetadata, 'r') as f:
        testMetaData = json.load(f)
    if len(sys.argv) > 2:
        testMetaData = testMetaData[int(sys.argv[2]):]
    ignore = []
    toTest = []
    for test in testMetaData:
        if 'negative' in test and test['negative']['type'] == 'SyntaxError' \
                or 'flags' in test and 'non-deterministic' in test['flags']:
            ignore += [test]
        else:
            toTest += [test]
    return toTest, ignore
