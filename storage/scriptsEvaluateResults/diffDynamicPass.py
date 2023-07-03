######################################################################################
# compare the built-in tests that fail with the ones that fail with the version computation of the lastest version only
######################################################################################
import json

with open('../../computation/builtIns/results/dynamic.json', 'r') as f:
    builts = json.load(f)

with open('../../computation/version/results/dynamic/v8/result_lastVersion.json', 'r') as f:
    vers = json.load(f)

vers1 = dict(filter(lambda x: x[1] != 'notSupported', vers.items()))

diff = list(vers1.keys() - builts['correct'])
s = []
for test in vers:
    if vers[test] != 'notSupported' and test not in builts['correct'] and 'constructor' not in test:
        s.append(test)

diff = list(map(lambda test: [test] + builts['error'][test] + [vers[test]], diff))

print(len(diff))
print(len(s))


with open('results/diffDynamicPass2.json','w') as f:
    f.write(json.dumps(diff, indent=4))
