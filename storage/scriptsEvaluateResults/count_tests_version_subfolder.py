########################################################################################
#   script to get the number of test files per version for each sub file
#########################################################################################

import csv
import json

header = []
rows = []
versions = []
subFolders = [[],[]]

with open('../../computation/main/results/metadata_version.json', 'r') as file:
    metadata = json.load(file)

# metadata = list(filter(lambda x: None != x.get("flags") and "async" in x['flags'], metadata))

folderDestribuition = [{},{}]

for test in metadata:
    # Position in 'subFolders'
    folderPosition = -1
    if test['pathSplit'][1] == 'built-ins':
        folderPosition = 0
    elif test['pathSplit'][1] == 'language':
        folderPosition = 1
    else:
        print('Folder not expected')
        exit(1)

    version = test.get('version')
    if version and version not in versions:
        versions.append(version)
    subfolder = test['pathSplit'][2]
    if subfolder not in subFolders[folderPosition]:
        subFolders[folderPosition].append(subfolder)

    key = (subfolder, version)
    folderDestribuition[folderPosition][key] = folderDestribuition[folderPosition].get(key, 0) + 1


versions.sort()
versions += [None]
subFolders.sort()

header = [['subfolder'] + versions[:-1] + ['None']]
separateCSV = [header[:], header[:]]
for i in range(len(subFolders)):
    for folder in subFolders[i]:
        temp = list(map(
            lambda x: folderDestribuition[i].get((folder, x), 0),
            versions[:]))
        separateCSV[i].append([folder] + temp)


with open('results/aggregation_formatted_builtIns.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV[0])

with open('results/aggregation_formatted_language.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV[1])

cumulativeCSV = separateCSV[:]

for folder in range(len(cumulativeCSV)):
    for i in range(1,len(cumulativeCSV[folder])):
        for j in range(2,len(cumulativeCSV[folder][i]) - 1):
            cumulativeCSV[folder][i][j] += cumulativeCSV[folder][i][j-1]

with open('results/aggregation_formatted_cumulative_builtIns.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV[0])

with open('results/aggregation_formatted_cumulative_language.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV[1])
