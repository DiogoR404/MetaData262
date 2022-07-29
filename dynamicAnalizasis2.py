import json
import subprocess
import multiprocessing
from itertools import repeat
import os

def runSubProcess(command: list) -> tuple:

    process = subprocess.Popen(command,  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = process.stdout.read().decode("latin1")
    error = process.stderr.read().decode("latin1")
    process.wait()
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

    print("ERROR: Engine not recognized")
    exit(1)


def runTest(engine: str, test: dict, harness: str) -> bool:
    def appendFileToFile(readFile: str, appendFile) -> None:
        with open(readFile, 'r') as f:
            t = f.read()
            appendFile.write(t)

    # if 'negative' in test and test['negative']['type'] == 'SyntaxError':
    #     return False

    # creat test file with every thing needed to run
    processName = multiprocessing.current_process().name.split('-')[1]
    fileName = 'new_dynamic/tmp' + processName + '.js'

    # create tmp.js file
    with open(fileName, "w") as tmpFile:
        if 'flags' in test and 'onlyStrict' in test["flags"]:
            tmpFile.write('"use strict";\n')
        if 'flags' not in test or 'raw' not in test['flags']:
            tmpFile.write(harness)

        if 'includes' in test:
            for file in test['includes']:
                appendFileToFile('test262/harness/'+file, tmpFile)


        appendFileToFile(test['path'], tmpFile)

    # run test
    _, errorOutput = runSubProcess(["timeout", "-s", "SIGXCPU", "10", engine, fileName])

    # check if the result is correct
    if errorOutput == '' and 'negative' not in test:
        return True
    elif 'negative' in test and test['negative']['type'] in errorOutput:
        # still need to check that phase coincides
        return True
    return False

def dynamicComputation(harness: str, testMetaData: list, engine: str) -> dict:
    result = {"passed": [], "failed": []}
    with multiprocessing.Pool() as p:
        r = p.starmap(runTest, zip(repeat(engine), testMetaData, repeat(harness)))

    for i in range(len(testMetaData)):
        if r[i]:
            result["passed"].append(testMetaData[i])
        else:
            result["failed"].append(testMetaData[i])

    return result

def loadHarness() -> dict:
    harness = {}
    with open("harness9.js", "r") as f:
         harness["es9"] = f.read()

    with open("harness_finalissimo.js", "r") as f:
         harness["es10"] = f.read()
         harness["es11"] = harness["es10"]

    with open("harness.js", "r") as f:
        harness["es5"] = f.read()
        harness["es6"] = harness["es5"]
        harness["es8"] = harness["es5"]
    return harness


def main():
    # with open('metadata_test262.json', 'r') as f:
    with open('test.json', 'r') as f: # for testing purposes
        testMetaData = json.load(f)

    listVersions = ("es5", "es6", "es8", "es9", "es10", "es11")

    engineVersions = {
            "node": {"es5": "0.10.48", "es6":"6.17.1", "es8":"8.17.0", "es9":"10.9.0", "es10":"12.11.0", "es11": "14.5.0"},
            "spiderMonkey": {"es5":"js24", "es6":"js38","es8":"js52", "es9": "js60","es10": "js68", "es11": "js78"}
            }
    harness = loadHarness()

    results = {}
    for v in listVersions:
        results[v] = []
    results["notSupported"] = []

    for version in listVersions:
        engine = changeNextEngine("node", engineVersions["node"][version])
        r = dynamicComputation(harness[version], testMetaData, engine)

        results[version] = r["passed"]
        testMetaData = r["failed"]

    results["notSupported"] = testMetaData

    with open("new_dynamic/result.json", "w") as f:
        json.dump(results, f)

    with open("new_dynamic/stats.json", "w") as f:
        stats = list(map(lambda x : len(results[x]), results))
        json.dump(stats, f)

    os.system('rm -f new_dynamic/tmp*.js')

if __name__ == '__main__':
    main()
