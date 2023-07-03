##########################################################################################################
# group tests by year of creasion and version
##########################################################################################################
import csv
import json

with open('../../computation/version/results/result.json', 'r') as f:
    versions = json.load(f)

with open('../../computation/official/results/testChangeDates.json', 'r') as f:
    history = json.load(f)
del history['hashLastCommit']

history = {test: history[test][0].split('-')[0] for test in history}
versions = {test: int(versions[test]) if isinstance(versions[test], int) or len(versions[test]) < 2 else -1 for test in versions}

tests = versions.keys()

resultsDict = {}

for test in tests:
    standard = resultsDict.get(versions[test], {})
    standard[history[test]] = standard.get(history[test],0) +1
    resultsDict[versions[test]] = standard

years = list(set(history.values()))
years.sort()

standards = list(set(versions.values()))
standards.sort()
print(standards)
Header = ['standard'] + years
Body = []

for stand in standards:
    Body.append([stand])
    for year in years:
        numTests = resultsDict[stand].get(year, 0)
        Body[-1].append(numTests)

with open('results/createdOnPerVersion.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(Header)
    writer.writerows(Body)
