import json

with open('metadata_version.json', 'r') as file:
    metadata = json.load(file)

filtered = list(map(lambda x: x['path'] + '\n', filter(lambda x: x.get('version') and (x['version'] == 5 or x['version'] == 6), metadata)))


with open('path_ES5_ES6.txt', 'w') as file:
    file.writelines(filtered)
