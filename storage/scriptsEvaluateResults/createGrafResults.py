######################################################################################
# create a graph with the number of test per version for each folder of test262
######################################################################################
import json
import sys

with open('../../computation/main/results/metadata_version.json', 'r') as file:
    metadata = json.load(file)


if len(sys.argv) > 1:
    metadata = list(filter(lambda x: sys.argv[1] in x['pathSplit'], metadata))

def generateGraf(pathDepth, name, tests):
    toInvestigate = {}
    graf = {
        "path": [],
        "version": {},
        "inside": []
    }
    graf['path'] = name
    for test in tests:
        pathSplit = tuple(test['pathSplit'])
        v = test.get('version')
        if pathDepth + 1 < len(pathSplit):
            toInvestigate[pathSplit[pathDepth+1]] = toInvestigate.setdefault(pathSplit[pathDepth+1], []) + [test]
            graf['version'][v] = graf['version'].setdefault(v, 0) + 1
        else:
            graf.pop('inside')
            graf['version'] = v

    for key in toInvestigate:
        graf['inside'] += [generateGraf(pathDepth + 1, key, toInvestigate[key])]

    return graf

graf = generateGraf(0, 'test', metadata)

with open('results/graf.json', 'w') as file:
    json.dump(graf, file, indent=4)
