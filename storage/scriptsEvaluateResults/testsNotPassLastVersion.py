import json

with open('../version/results/dynamic/result.json', 'r') as f:
    vers = json.load(f)

with open('../version/results/dynamic/result_only_es12.json', 'r') as f:
    vers12 = json.load(f)

vers = dict(filter(lambda x: x[1] != 'notSupported', vers.items()))
vers12 = dict(filter(lambda x: x[1] != 'notSupported', vers12.items()))

diff = list(map(lambda x: x+'\n', vers.keys() - vers12))

print(len(diff))


with open('testsNotPassLastVersion.json','w') as f:
    f.writelines(diff)
