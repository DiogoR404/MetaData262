import json

with open('/home/diogo/MetaData262/computation/main/results/metadata_version.json', 'r') as f:
    meta = json.load(f)

meta = list(map(lambda x: x.get('version'), meta))

ver = {}
for test in meta:
    ver[test] = ver.get(test, 0) + 1

print(ver)
