import csv

header = []
rows = []
versions = []
subFolders = []
with open('aggregation_result.csv') as file:
    reader = csv.reader(file)

    header = next(reader)

    for row in reader:
            rows.append(row)
            if row[0] != '' and int(row[0]) not in versions:
                versions += [int(row[0])]
            if row[1] not in subFolders:
                subFolders += [row[1]]

versions.sort()
versions = list(map(lambda x : str(x), versions)) + ['']
subFolders.sort()
finalDict = {}
for folder in subFolders:
    finalDict[folder] =  [0] * (len(versions))

versionPosition = {}
for i in range(len(versions)):
    versionPosition[versions[i]] = i

for row in rows:
    finalDict [row[1]] [versionPosition[row[0]]] = int(row[2])

separateCSV = [['subfolder'] + versions]
for folder in subFolders:
    separateCSV += [[folder]+finalDict[folder]]

with open('aggregation_formatted.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV)

cumulativeCSV = separateCSV[:]

for i in range(1,len(cumulativeCSV)):   
    for j in range(2,len(cumulativeCSV[i])):
        cumulativeCSV[i][j] += cumulativeCSV[i][j-1]

with open('aggregation_formatted_cumulative.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(separateCSV)