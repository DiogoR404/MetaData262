######################################################################################
# filters tests with different version retreived from the frontmatter and computed
######################################################################################

import json

with open('/home/diogo/MetaData262/computation/main/results/metadata_version.json', 'r') as f:
    meta = json.load(f)


result = {}
for test in meta:
    computed = test.get('version', 'notSupported')
    if 'versionFrontmatter' not in test or test['versionFrontmatter'] == computed:
        continue

    front = test['versionFrontmatter']
    key = f'front {front} computed {computed}'
    result[key] = result.get(key,[]) + [test['path']]

with open('versionDiffFrontmattterComputation.json', 'w') as f:
    json.dump(result, f, indent=4)
