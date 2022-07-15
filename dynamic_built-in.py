
import subprocess
import json
import sys
import os
import argparse

#loads file with tests
f = open('metadata_test262.json',)
out = json.load(f)

Lines = out
L=Lines[:]

process = subprocess.Popen(["sudo", "n", "14.5.0"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
process.wait()

prints = open("dynamic_built-in_results.json", "w")
results = {"negatives":{}, "correct":{}, "error":{}}
for line in Lines:
    if ("negative" in line.keys()):
        results["negatives"][line["path"]]=[]
        continue
    if ("flags" in line.keys()):

        #if the test is only run in strict mode
        if ("onlyStrict" not in line["flags"]):
            test = open(line["path"], "r")
            h = open("harness_finalissimo.js", "r")
            if ("includes" in line.keys()):
                harness = open("harness2.js", "w")
                harness.write(h.read())
                h.close()
                for file in line["includes"]:
                    try:
                        filename="./test262/harness/"+file
                        f = open(filename, "r")
                        harness.write(f.read())
                        f.close()
                    except:
                        continue

                harness.close()
                harness = open("harness2.js", "r")
            else:
                harness = open("harness_finalissimo.js", "r")

            #writes in a temporary file the test preceeded by the harness
            f = open("tmp.js", "w")
            func =  open("func.js", "r")
            f.write(func.read())
            f.write(harness.read())
            f.write(test.read())
            f.write('\nreturn log42')
            f.close()

            #runs the test with a timeout
            process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            output = process.stdout.read().decode("latin1") 
            error = process.stderr.read().decode("latin1") 
            process.wait()
            if (error!=""):
                results["error"][line["path"]]=error
            
            elif (output!=""):
                results["correct"][line["path"]]=output

        else:    

            test = open(line["path"], "r")
            
            h = open("harness_finalissimo.js", "r")
            if ("includes" in line.keys()):
                harness = open("harness2.js", "w")
                harness.write(h.read())
                h.close()
                for file in line["includes"]:
                    try:
                        filename="./test262/harness/"+file
                        f = open(filename, "r")
                        harness.write(f.read())
                        f.close()
                    except:
                        continue

                harness.close()
                harness = open("harness2.js", "r")
            else:
                harness = open("harness_finalissimo.js", "r")

            #writes in a temporary file the test preceeded by the harness
            f = open("tmp.js", "w")
            func =  open("func.js", "r")
            f.write(func.read())
            f.write('"use strict";\n')
            f.write(harness.read())
            f.write(test.read())
            f.write('\nreturn log42')
            f.close()

            #runs the test with a timeout
            process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            output = process.stdout.read().decode("latin1") 
            error = process.stderr.read().decode("latin1") 
            process.wait()

            if (error!=""):
                results["error"][line["path"]]=error
            
            elif (output!=""):
                results["correct"][line["path"]]=output

    else:

        test = open(line["path"], "r")
        
        h = open("harness_finalissimo.js", "r")
        if ("includes" in line.keys()):
            harness = open("harness2.js", "w")
            harness.write(h.read())
            h.close()
            for file in line["includes"]:
                try:
                    filename="./test262/harness/"+file
                    f = open(filename, "r")
                    harness.write(f.read())
                    f.close()
                except:
                    continue

            harness.close()
            harness = open("harness2.js", "r")
        else:
            harness = open("harness_finalissimo.js", "r")

        #writes in a temporary file the test preceeded by the harness
        f = open("tmp.js", "w")
        func =  open("func.js", "r")

        f.write(func.read())
        f.write(harness.read())
        f.write(test.read())
        f.write("\nconst t= JSON.parse(JSON.stringify(log42));\nconsole.log(t);")
        f.close()
    
        #runs the test with a timeout
        process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        output = process.stdout.read().decode("latin1") 
        error = process.stderr.read().decode("latin1") 
        process.wait()
        if (error!=""):
            results["error"][line["path"]]=error
        
        elif (output!=""):
            results["correct"][line["path"]]=output

    
count=0
for out in results:
    if results[out] == "error":
        count+=1
print("Number of errors: ", count)
#writes in a file with the name of the version the tests associated to it
prints.write(json.dumps(results))
