from os import listdir
from os.path import isfile, join

mypath= "./test262-main/harness"

onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

harness = open("harness_finalissimo.js", "w")

harness.write("\n// harness-adapt.js\n")
f = open("./test262-main/implementation-contributed/v8/test262/harness-adapt.js", "r")
harness.write(f.read())

harness.write("\n// harness-agent.js\n")
f = open("./test262-main/implementation-contributed/v8/test262/harness-agent.js", "r")
harness.write(f.read())

harness.write("\n// harness-adapt-donotevaluate.js\n")
f = open("./test262-main/implementation-contributed/v8/test262/harness-adapt-donotevaluate.js", "r")
harness.write(f.read())

harness.write("\n// detachArrayBuffer.js\n")
f = open("./test262-main/implementation-contributed/v8/test262/detachArrayBuffer.js", "r")
harness.write(f.read())

harness.write("\n// propertyHelper.js\n")
f = open("./test262-main/harness/propertyHelper.js", "r")
harness.write(f.read())

harness.write("\n// atomicsHelper.js\n")
f = open("./test262-main/harness/atomicsHelper.js", "r")
harness.write(f.read())



for file in onlyfiles:
    if "propertyHelper.js" in file or "atomicsHelper.js" in file or "nativeFunctionMatcher.js" in file:
        continue
    filename="./test262-main/harness/"+file
    f = open(filename, "r")
    harness.write("\n//" + file + "\n")
    harness.write(f.read())
    f.close()
    