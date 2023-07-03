import json

with open('../builtIns/results/dynamic.json', 'r') as f:
    builts = json.load(f)

with open('../version/results/dynamic/v8/result_lastVersion.json', 'r') as f:
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


with open('diffDynamicPass2.json','w') as f:
    f.write(json.dumps(diff, indent=4))
