##########################################################################################################
# check how many tests are passed per version
# this script has not been tested with the latest changes to the engine and is very likely not to run but is kept so for future analysis of the results
##########################################################################################################
import json

with open('test262-harness_results/out6.txt', 'r') as f:
    file_lines = f.readlines()


path_passed_tests = []
for line in file_lines:
    s = line.split(' ')
    if len(s) == 2 and s[0] == 'PASS' and s[1][:-1] not in path_passed_tests:
        path_passed_tests.append(s[1][:-1])

print('number tests passed', len(path_passed_tests))


with open('metadata_test262.json', 'r') as f:
    meta = json.load(f)

meta = list(filter(lambda x: 'negative' in x and 'SyntaxError' == x['negative']['type'] , meta))
print(len(meta))
for test in meta:
    if ('test262/'+test['path']) in path_passed_tests:
        path_passed_tests.remove('test262/'+test['path'])

print('sem negatives de syntax', len(path_passed_tests))
