import subprocess
import json
import sys
import os
import argparse
parser = argparse.ArgumentParser()


#loads file with tests
f = open('all_es5_tests_except_excluded.txt')
file = f.read().split("\n")
L={"correct":[], "negative":[], "notFound":[]}
for line in file:
    try:
        test = open("./test262/test/" + line[19:]).read()
        print(test)
        print("SyntaxError" in test)
        #for l in test:
        #   print(l)
        #  print("negative" in l)
        # print("SyntaxError" in l)
        if (("negative:" in test) & ("SyntaxError" in test)):
            L["negative"].append(line)
            continue
        else:
            L["correct"].append(line)
    except:
        try:
            test = open("./ECMA-SL-master/implementation/" + line, "r")
            if ("negative:" in test.read()) & ("SyntaxError" in test.read()):
                L["negative"].append(line)
                continue
            else:
                L["correct"].append(line)
        except:
            L["notFound"].append(line)

        

final_results = open("./"+"es5_tests.json", "w")
final_results.write(json.dumps(L))
