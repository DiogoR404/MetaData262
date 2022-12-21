from os import listdir
from os.path import isfile, join

pathTest262 = '../test262/'
pathTest262Harness = pathTest262 + "harness/"
metadataHarnessPath = "../../resources/harness/"

onlyfiles = [f for f in listdir(pathTest262Harness) if isfile(join(pathTest262Harness, f))]
onlyfiles = list(filter(lambda x: x.endswith('.js'), onlyfiles))


harness = open(metadataHarnessPath + "harness_finalissimo.js", "w")

harness.write("\n// harness_base.js\n")
f = open(metadataHarnessPath + "harness_base.js", "r")
harness.write(f.read())

harness.write("\n// harness-adapt.js\n")
f = open(pathTest262 + "implementation-contributed/v8/test262/harness-adapt.js", "r")
harness.write(f.read())

harness.write("\n// harness-agent.js\n")
f = open(pathTest262 + "implementation-contributed/v8/test262/harness-agent.js", "r")
harness.write(f.read())

harness.write("\n// harness-adapt-donotevaluate.js\n")
f = open(pathTest262 + "implementation-contributed/v8/test262/harness-adapt-donotevaluate.js", "r")
harness.write(f.read())

harness.write("\n// detachArrayBuffer.js\n")
f = open(pathTest262 + "implementation-contributed/v8/test262/detachArrayBuffer.js", "r")
harness.write(f.read())

harness.write("\n// propertyHelper.js\n")
f = open(pathTest262Harness + "propertyHelper.js", "r")
harness.write(f.read())

harness.write("\n// atomicsHelper.js\n")
f = open(pathTest262Harness + "atomicsHelper.js", "r")
harness.write(f.read())



for file in onlyfiles:
    if "propertyHelper.js" in file or "atomicsHelper.js" in file or "nativeFunctionMatcher.js" in file:
        continue
    filename = pathTest262Harness + file
    f = open(filename, "r")
    harness.write("\n//" + file + "\n")
    harness.write(f.read())
    f.close()
