import csv
import json

with open('../official/results/test262ChangeDates.json', 'r') as f:
    history = json.load(f)

history = {test: history[test][0].split('-')[0] for test in history}

testsPerYear = {}

for test in history:
    year = history[test]
    if year == '8': print(test)
    testsPerYear[year] = testsPerYear.get(year, 0) + 1

print(testsPerYear)