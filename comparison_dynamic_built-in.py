
import subprocess
import json
import sys
import os
import argparse

#loads file with tests
f = open('dynamic_built-in_results.json')
built = json.load(f)

d = open('./dynamic_results_node/dynamic_analysis.json')
dn = json.load(d)
results={}

def fun(results, version, test, msg):
    if version in results:
        results[version][test]=msg
    else:
        results[version]={}
        results[version][test] = msg
    return results

for b in built["error"]:
    for version in dn:
        for test in dn[version]:
            if b == test["path"]:
                if version != "notSupported":
                    results = fun(results, "erro", b, built["error"][b]) 
                else:
                    results = fun(results, version, b, built["error"][b]) 

prints = open("comparison_dynamic_built-in.json", "w")

prints.write(json.dumps(results))