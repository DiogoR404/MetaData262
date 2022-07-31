#!/usr/bin/env python3

import json

with open('package.json', 'r') as f:
    package = json.load(f)

with open('package.json', 'w') as f:
    if 'type' in package:
        del package['type']
    else:
        package['type'] = 'module'
    json.dump(package, f)
