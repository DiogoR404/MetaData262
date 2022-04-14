#################################################################################################################################################
# Dynamic Analysis
#   receives one argument - tests to be analysed
#   cascates through every version, changing the node version running every unassign test
#       if the test runs correctly it's assign to that version
#       else it's rerun in a newer version
#################################################################################################################################################

import subprocess
import json
import sys
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-e", "--engine", help="engine denomination")

print(parser.parse_args().engine )
if ((parser.parse_args().engine == "") | (parser.parse_args().engine =="node")):
    engine = "node"
    nodes_versions = {"es5": "0.10.48", "es6":"6.17.1", "es8":"8.17.0", "es9":"10.9.0", "es10":"12.11.0", "es11": "14.5.0"}

elif (parser.parse_args().engine == "spidermonkey"):
    engine = parser.parse_args().engine
    nodes_versions = {"es5":"js24", "es6":"js38","es8":"js52",
    "es9": "js60","es10": "js68", "es11": "js78"}

#loads file with tests
f = open('metadata_test262.json',)
out = json.load(f)

Lines = out
L=Lines[:]

#initializes results and node versions associated with ecmascript standar
results={"es5":[], "es6":[], "es7":[], "es8":[], "es9":[], "es10":[], "es11":[]}

for version in nodes_versions.keys():

    #changes node version through command $sudo n [version] and waits for it to end
    if (engine == "node"):
        process = subprocess.Popen(["sudo", "n", nodes_versions[version]],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        process.wait()
    elif (engine == "spidermonkey"):
        v = nodes_versions[version]
    else:
        break

    prints = open("./dynamic_results_"+engine+"/"+version+".json", "w")

    for line in Lines:

        if version =="es9" or version =="es10" or version=="es11":
            h = open("harness_finalissimo.js", "r")
        else:
            h = open("harness.js", "r")

        #if the test already has a version
        #if ("version" in line.keys()):

            #if the version is the current one adds to results
            #if ("es" + str(line["version"]) == version):
                #results[version].append(line)
                #L.remove(line)

            #continue

        #if the test contains "flags"    

        if ("negative" in line.keys()):
            if ((line["negative"]["type"]=="SyntaxError") | (line["negative"]["phase"]=="SyntaxError")):
                L.remove(line)
                continue
            
    
        if ("flags" in line.keys()):

            #if the test is only run in strict mode
            if ("onlyStrict" not in line["flags"]):
                test = open(line["path"], "r")
                if ("includes" in line.keys()):
                    harness = open("harness2.js", "w")
                    harness.write(h.read())


                    for file in line["includes"]:
                        try:
                            filename="./test262/harness/"+file
                            f = open(filename, "r")
                            harness.write(f.read())
                            f.close()
                        except:
                            print("include empty - " + str(line["includes"]) + " - " + line["path"])

                    harness.close()
                    harness = open("harness2.js", "r")
                else:
                    harness = h

                #writes in a temporary file the test preceeded by the harness
                f = open("tmp.js", "w")
                f.write(harness.read())
                f.write(test.read())
                f.close()

                #runs the test with a timeout
                process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                output = process.stdout.read().decode("latin1") 
                error = process.stderr.read().decode("latin1") 
                process.wait()

                if (engine == "node"):
                    #runs the test with a timeout
                    process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    output = process.stdout.read().decode("latin1") 
                    error = process.stderr.read().decode("latin1") 
                    process.wait()
                elif (engine == "spidermonkey"):
                    process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", v, "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    output = process.stdout.read().decode("latin1") 
                    error = process.stderr.read().decode("latin1") 
                    process.wait()
                else:
                    break

            else:    

                test = open(line["path"], "r")
                
                if ("includes" in line.keys()):
                    harness = open("harness2.js", "w")
                    harness.write(h.read())

                    for file in line["includes"]:
                        try:
                            filename="./test262/harness/"+file
                            f = open(filename, "r")
                            harness.write(f.read())
                            f.close()
                        except:
                            print("include empty - " + str(line["includes"]) + " - " + line["path"])

                    harness.close()

                    harness = open("harness2.js", "r")
                else:
                    harness = h

                #writes in a temporary file the test preceeded by the harness
                f = open("tmp.js", "w")
                f.write('"use strict";\n')
                f.write(harness.read())
                f.write(test.read())
                f.close()

                if (engine == "node"):
                    #runs the test with a timeout
                    process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    output = process.stdout.read().decode("latin1") 
                    error = process.stderr.read().decode("latin1") 
                    process.wait()
                elif (engine == "spidermonkey"):
                    process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", v, "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    output = process.stdout.read().decode("latin1") 
                    error = process.stderr.read().decode("latin1") 
                    process.wait()
                else:
                    break

        else:

            test = open(line["path"], "r")
            
            if ("includes" in line.keys()):
                harness = open("harness2.js", "w")
                harness.write(h.read())

                for file in line["includes"]:
                    try:
                        filename="./test262/harness/"+file
                        f = open(filename, "r")
                        harness.write(f.read())
                        f.close()
                    except:
                        print("include empty - " + str(line["includes"]) + " - " + line["path"])

                harness.close()
                harness = open("harness2.js", "r")

            else:
                harness = h

            #writes in a temporary file the test preceeded by the harness
            f = open("tmp.js", "w")
            f.write(harness.read())
            f.write(test.read())
            f.close()

            if (engine == "node"):
                #runs the test with a timeout
                process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", "node", "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                output = process.stdout.read().decode("latin1") 
                error = process.stderr.read().decode("latin1") 
                process.wait()
            elif (engine == "spidermonkey"):
                process = subprocess.Popen(["timeout", "-s", "SIGXCPU", "10", v, "tmp.js"],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                output = process.stdout.read().decode("latin1") 
                error = process.stderr.read().decode("latin1") 
                process.wait()
            else:
                break

        #if the test is supposed to return an error
        if ("negative" in line.keys()):
            #if the error is the supposed one
            if (line["negative"]["type"] in error):
                results[version].append(line)
                L.remove(line)
            elif (line["negative"]["type"] in error):
                results[version].append(line)
                L.remove(line)

        else:
            #if the test runs correctly
            if (error == ""):
                
                results[version].append(line)
                L.remove(line)


    Lines=L[:]

    #writes in a file with the name of the version the tests associated to it
    prints.write(json.dumps(results[version]))
    
#os.remove("tmp.js")     

results["notSupported"] = Lines

#writes the final results
final_results = open("./dynamic_results_"+engine+"/dynamic_analysis.json", "w")
final_results.write(json.dumps(results))
