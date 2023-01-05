import json

with open('../builtIns/results/dynamic.json', 'r') as f:
    builts = json.load(f)

with open('../version/results/dynamic/result.json', 'r') as f:
    vers = json.load(f)

vers1 = dict(filter(lambda x: x[1] != 'notSupported', vers.items()))

diff = list(vers1.keys() - builts['correct'])
s = []
for test in vers:
    if vers[test] != 'notSupported' and test not in builts['correct'] and 'constructor' not in test:
        s.append(test)

diff = list(map(lambda x: builts['error'][x], diff))

print(len(diff))
print(len(s))


with open('diffDynamicPass4.json','w') as f:
    f.write(json.dumps(diff, indent=4))
