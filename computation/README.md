# Compute Metadata
## Main script
- to run every computation `node main/main.js`
- to run just run the final merger of every computation `node main/main.js -nc`
- to run the full computation with only the testing subset of files `node main/main.js -t`

## Explain folders
- **builtIns** - contains scripts related with the builtIns computation
- **configurations** - contains json files related to the configuration computation
- **constructs** - contains scripts related with the syntactic constructs computation
- **harness** - contains scripts related with harness computation
- **main** - contains files for running the whole computation
- **official** - contains scripts related with the official metadata
- **persistence** - contains the makefile that does the default installations of the project
- **support** - contains file with a paths of a subset of test262 tests for testing the scripts
- **trash** - contains scripts that will be removed
- **utils** - contains scripts that are used across multiple parts of the computation
- **version** - contains scripts that are related with the version computation

Typically each folder will store the results of its scripts within a folder called **results**


## BuiltIns computation

the following commands expect the shell to be withing `./computation/buitlIns/`
- run full computation `node builtIns.js`
- run full computation with subset of test262 `node builtIns.js -t`
- run static computation `node static.js`
- run dynamic computation `python3 dynamic.py`
- run dynamic with subset of test262 `python3 dynamic.py -t`
- run dynamic with subset of subset of test262 `python3 dynamic.py -t -2` (runs the last two tests of the subset)

## Version computation
very similar to builtIns computation just change for the full computation to `node version.js`

## run "manually"
- `node official/search_metadata_from_test262.js`
- `node version/version.js`
- `node constructs/search_syntactic_constructs.js`
- `node builtIns/builtIns.js`
- `node main/main.js -nc`

# Deprecated README!!


# Installation

To run this project it is necessary to have nodejs, npm, python3 and pip installed.
To have access to the test262 it is necessary to run the following two commands inside the folder **/resourses/test262**:

`git submodule init`

`git submodule update`

Finally to install the dependencies of the project the makefile in **./presistence/Makefile** has to be executed.

`sudo make`

The first step in the search for metadata will be to collect all the metadata already present in the test of the test suite Test262 for this we will go through all the test and parse the metadata that it contains. For this the next command will be executed:

`node official/search_metadata_from_test262.js`

The results are saved in the json file with the name **"metadata_test262.json"**

# Harness

In order to execute the dynamic analysis it is necessary to use a harness. For the older versions a simpler harness can be used. This harness is saved as **"harness.js"**, however for newer versions a more complex harness is needed and is saved as **"harness_finalissimo.js"** which was built using the following command:

`python3 make_harness.py`

# Version Search

## Tainted Analysis

To run the tainted analysis to find the versions of the test it will be needed to run the file taintedAnalysis.js, to do so the following command must be executed:

`node taintedAnalysis.js`

or

`js78 taintedAnalysis.js`

The results will be saved in the directory **"/tainted_results"** where there will be a JSON file for each version with the correspondent tests and a JSON file for the global results

## Dynamic Analysis

The dynamic analysis is made in the file dynamicAnalysis.py, where the code will run every test recursively from older version to newer version of the desired engine. Once the test has achieved the correct execution it will be assigned to the current version. In order to run the test the code needs to add to a harness the test to be executed and the mode in which the test will be ran (not strict or strict).

In order to run the file one of the following command will be executed where the flag e corresponds to the engine (node or spidermonkey):


`sudo python3 dynamicAnalysis.py -e node`

or

`sudo python3 dynamicAnalysis.py -e spidermonkey`

the results are saved within the directory dynamic_result_ + the engine name, so **"/dynamic_result_node"** and **"/dynamic_result_spidermonkey"** for nodejs and spidermonkey respectively. Similary to the tainted analysis the results will be saved in JSON files for each version and an overall JSON file that possesses every version.

## Mixed Analysis

The mixed analysis will load the results obtained in the dynamic analysis and will analyse the semantic of the test in order to ensure that the test contains only objects, functions and fields already implemented until the assigned version by the dynamic analysis. In the of chance that it exists the test will be associated with the very first version where that object, function or field is present.

To run the analysis it will be needed to execute one javascript engine. below are show the executions for the engines nodejs and spidermonkey.

`node mixedAnalysis.js`

To run the mixed analysis for only one engine you simply need to add as an argument the name of the desired engine (node or spidermonkey).

`node mixedAnalysis.js node` or `node mixedAnalysis.js spidermonkey`

The results are saved in the directory dynamic_results with the names **"mixed_analysis.json"** and **"mixed_analysis_sm.json"** for the results of nodejs and spidermonkey, respectively. Each file contains an object with arrays for the test filtrated for each version.


# Syntactic Constructs Search

The search for the syntactic constructs present on each test utilizes esprima to obtain the syntactic tree of the test. After that we recursively search every syntactic construct in the test and add every different syntactic construct to an array. An important note is that tests that esprima is unable to parse are not analysed.

In order to run the search it will be utilized the nodejs engine using the following command:

`node search_syntactic_constructs.js`

The results are saved in a JSON file named **"metadata_syntactic.json"**, which contains the name of the file and an array with all syntactic constructions found on the test.

# Built-ins Search

## Static Approach

The static approach for the built-in that appear in the test is made with the resource to esprima. We analyse the syntactic tree of the test and try to find every built-in, as well as the functions and field associated with that built-in.

To run this analyses we execute the following command:

`node search_built-ins.js`

The results are written in a JSON file named **"metadata_built-in.json"**, this file object contains the test with the built-in found and each built-in contains an array with the functions and fields found in the test.

## Dynamic Approach

The dynamic approach for searching built-ins utilizes a file that redefines all built-in functions in order to once called adds to an array the name of the function and then runs normally. After we have that file we just add to it the harness and the actual test, and run it. However in the tests that return error we cannot retrieve the array with the built-ins and functions called.

In order to create the wrappers of the functions we analysed the html of the ecmascript which is saved in the directory "html" and we take every function of the built-ins, executing the command:

`python3 html_parse.py`

This command will create a list with all the functions saved in the directory "functions", finally we can prodeuce the wrappers for the functions with the command:

`node produce_re-function.js`

This command will create the file **"func.js"** that contains every function wrapped.

To run the dynamic analysis to search for the built-ins in the tests the command used is:

`sudo python3 dynamic_built-in.py`

The results for this approach are written in the file named **"functions_metadata.json"**, that contains the tests that are supposed to return an error, the tests that had the wrong execution and the functions and built-ins obtained.

# All Metadata

The complete metadata calculated in this project is made of the calculated number of lines, asserts and errors, as well as the built-ins, syntactic constructs in the test, and version of each test. This code is going to grab the results of the mixed analyses and will do the search for the built-ins and for the syntactic constructs, as well as compute the lines, asserts and errors present in the test.

To run this file the following  command is used:

`node search_metadata.js`

The results for this file are going to be saved in a JSON file **"metadata_version.json"**, that will have an object with a field for each test and its value is an object with the full computed metadata.
