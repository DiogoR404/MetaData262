import json

with open('metadata_version.json', 'r') as file:
    metadata = json.load(file)


metadata = list(map(lambda x: x['path'], filter(lambda x: x.get('flags') and 'async' in x['flags'] and 9 == x.get('version'), metadata)))

result = []
notSupported = ['await','function*', '.finally(', '*method', '*g', 'function *', 'import(']
res_per_dir = {}

for i in notSupported: res_per_dir[i] = 0

for path in metadata:
    with open(path, 'r') as file:
        text = file.read()
        add = True
        for word in notSupported:
            if word in text:
                add = False
                res_per_dir[word] += 1
                break
        if add:
            result += [path]


print('total tests =', len(metadata))
print(res_per_dir)

print('not included =', len(result))
