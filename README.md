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


`python3 dynamicAnalysis.py -e node`

or

`python3 dynamicAnalysis.py -e spidermonkey`

the results are saved within the directory dynamic_result_ + the engine name, so **"/dynamic_result_node"** and **"/dynamic_result_spidermonkey"** for nodejs and spidermonkey respectively. Similary to the tainted analysis the results will be saved in JSON files for each version and an overall JSON file that possesses every version. 

## Mixed Analysis

The mixed analysis will load the results obtained in the dynamic analysis and will analyse the semantic of the test in order to ensure that the test contains only objects, functions and fields already implemented until the assigned version by the dynamic analysis. In the of chance that it exists the test will be associated with the very first version where that object, function or field is present.

To run the analysis it will be needed to execute one javascript engine. below are show the executions for the engines nodejs and spidermonkey.

`node mixedAnalysis.js`

or 

`js78 mixedAnalysis.js`

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

The command to run this approach is:

`python3 dynamic_built-in.py`

The results for this approach are written in the file named **"functions_metadata.json"**, that contains the tests that are supposed to return an error, the tests that had the wrong execution and the functions and built-ins obtained.

# Metadata construct

`node add_metadata.js`

# Metadata Application

`python3 app.py`

# Results Application

`python3 app_metadata.py`

# Characterization of the metadata

## Characterization of Lines, Asserts and Errors

`python3 characterization.py`

## Characterization of the Versions

`python3 characterization2.py`

## Characterization of the Built-ins

`python3 characterization4.py`
