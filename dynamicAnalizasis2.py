import json
import subprocess
import multiprocessing
from itertools import repeat
import os
import tqdm
import sys

def runSubProcess(command: list) -> tuple:
    process = subprocess.Popen(command,  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    process.wait()
    return (output.decode("latin1"), error.decode("latin1"))

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
    print("ERROR: Engine not recognized")
    exit(1)


def runTest(engine: str, test: dict, harness: str, version: int) -> bool:
    # creat test file with every thing needed to run
    codeToExecute = ''
    testFlags = test.get('flags')
    if testFlags and 'onlyStrict' in testFlags:
        codeToExecute += '"use strict";\n'
    if not testFlags or 'raw' not in testFlags:
        codeToExecute += harness
    if 'includes' in test:
        for file in test['includes']:
            with open('test262/harness/'+file, 'r') as f:
                codeToExecute += f.read()
    with open(test['path'], 'r') as f:
        codeToExecute += f.read()
    with open(test['path'], "w") as f:
        f.write(codeToExecute)
    command = ["timeout", "-s", "SIGXCPU", "10", engine]
    if testFlags and 'module' in testFlags and version < 11 and version > 6:
        command += ['--experimental-modules']
    command += [test['path']]
    # run test
    output, errorOutput = runSubProcess(command)

    # check if the result is correct
    if 'flags' in test and 'async' in test['flags'] and output == 'Test262:AsyncTestComplete':
        return True
    elif errorOutput == '' and 'negative' not in test:
        return True
    elif testFlags and 'module' in testFlags and version < 11 and version > 6 \
            and 2 == len(errorOutput.split('\n')) and '' == errorOutput.split('\n')[1]:
        return True
    elif 'negative' in test and test['negative']['type'] in errorOutput:
        # still need to check that phase coincides
        return True
    return False

def dynamicComputation(harness: str, testMetaData: list, engine: str, version: int) -> list:
    result = [[],[]]
    with multiprocessing.Pool() as p:
        inputs = zip(repeat(engine), testMetaData, repeat(harness), repeat(version))
        r = p.starmap(runTest, tqdm.tqdm(inputs, total=len(testMetaData)))

    for i in range(len(testMetaData)):
        if r[i]:
            result[0].append(testMetaData[i])
        else:
            result[1].append(testMetaData[i])

    return result

def loadHarness() -> dict:
    harness = {}
    with open("harness9.js", "r") as f:
         harness[9] = f.read()
    with open("harness_f_module.js", "r") as f:
         harness["10"] = f.read()
         harness["11"] = harness["10"]
         harness["12"] = harness["10"]
    with open("harness_f.js", "r") as f:
         harness[10] = f.read()
         harness[11] = harness[10]
         harness[12] = harness[10]
    with open("harness_es5.js", "r") as f:
        harness[5] = f.read()
    with open("harness_es6_v1.js", "r") as f:
        harness[6] = f.read()
        harness[8] = harness[5]
    return harness

def partitionTests(testMetaData: dict) -> tuple:
    ignore = []
    moduleToTest = []
    toTest = []
    for test in testMetaData:
        if 'negative' in test and test['negative']['type'] == 'SyntaxError' \
                or 'flags' in test and 'non-deterministic' in test['flags']:
            ignore += [test]
        elif 'flags' in test and 'module' in test['flags']:
            moduleToTest += [test]
        else:
            toTest += [test]
    return toTest, moduleToTest, ignore

def getTestMetaData() -> tuple:
    if len(sys.argv) > 1 and sys.argv[1] == '-t':
        pathMetadata = 'test.json'
    else:
        pathMetadata = 'metadata_test262.json'
    with open(pathMetadata, 'r') as f:
        testMetaData = json.load(f)
    if len(sys.argv) > 2:
        testMetaData = testMetaData[int(sys.argv[2]):]
    return partitionTests(testMetaData)

def main():
    listVersions = (5, 6, 8, 9, 10, 11, 12)
    engineVersions = {
            "node": {5: "0.10.48", 6:"6.17.1", 8:"8.17.0", 9:"10.9.0", 10:"12.11.0", 11: "14.5.0", 12: "18.7.0"},
            "spiderMonkey": {5:"js24", 6:"js38",8:"js52", 9: "js60",10: "js68", 11: "js78"}
            }
    harness = loadHarness()
    results = {}
    for v in listVersions:
        results[v] = []
    testMetaData, moduleMetaData, results["notSupportedIgnored"] = getTestMetaData()

    with open('package.json', 'r') as f:
        package = json.load(f)
    for version in listVersions:
        print('Computing', version)
        os.system('rm -rf test/')
        os.system('cp -r test262/test test')
        engine = changeNextEngine("node", engineVersions["node"][version])
        results[version], testMetaData = dynamicComputation(harness[version], testMetaData, engine, version)


        # moduleMetaData needs different package.json
        with open('package.json', 'w') as f:
            package['type'] = 'module'
            json.dump(package, f)
        h = harness.get(str(version))
        h = h if h else harness[version]
        r, moduleMetaData = dynamicComputation(h, moduleMetaData, engine, version)
        results[version] += r
        with open('package.json', 'w') as f:
            del package['type']
            json.dump(package, f)

    # os.system('rm -rf test/')

    # write results
    results["notSupported"] = testMetaData + moduleMetaData + results["notSupportedIgnored"]
    with open("new_dynamic/result.json", "w") as f:
        json.dump(results, f)
    with open("new_dynamic/stats.json", "w") as f:
        stats = list(map(lambda x : {x: len(results[x])}, results))
        json.dump(stats, f, indent=4)

if __name__ == '__main__':
    main()
