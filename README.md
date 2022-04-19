# Installation

To run this project it is necessary to have nodejs, npm, python3 and pip installed. 
To have access to the test262 it is necessary to run the following two commands inside the folder **test262**:

`git submodule init`

`git submodule update`

Finally to install the dependecies of the project the makefile has to be executed.

`sudo make`

# Existing Metadata

The first step in the search for metadata will be to collect all the metadata already present in the test of the testsuite Test262 for this we will go through all the test and parse the metadata that it contains. For this the next command will be executed:

`node search_metadata_from_test262.js`

The results are saved in the json file with the name **"metadata_test262.json"**


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

# All Metadata

The complete metadata calculated in this project is made of the calculated number of lines, asserts and errors, as well as the built-ins, syntactic constructs in the test, and version of each test. This code is going to grab the results of the mixed analyses and will do the search for the built-ins and for the syntactic constructs, as well as compute the lines, asserts and errors present in the test.

To run this file the following  command is used:

`node search_metadata.js`

The results for this file are going to be saved in a JSON file **"metadata_version.json"**, that will have an object with a field for each test and its value is an object with the full computed metadata.

# Metadata Application

The application to filter the test by the metadata starts by loading the mongo database with the latest results of the "metadata_version.json", after it runs the terminal will show a menu for the user to interact and filter by the offer options. This application starts with the command bellow:

`python3 app.py`

The results of the show tests option are saved in the directory "Selected_tests" with a name associated to the query used.

# Results Application

The application to analyse the results of the tests will need an agument with the path to the file with the results to be analysed. After that it will upload the file to a mongo database in order ot filter the results and print in the console the menu for the user to interact. The main menu offers a range of options to filter the results.

`python3 app_metadata.py <filepath>`

After selecting for the application to show the results a directory is created with the name "Queries-<filepath>" that will have all the queries executed for that results. The files for the queries are have a name associated with the desired query.

# Characterization of the metadata

## Characterization of Lines, Asserts and Errors

To obtain the data of the characterization of the number of lines, asserts and errors in the tests it will be utilize mongodb queries. Starting by dividing the built-ins by the groups they belong to and query for each group adding to an array the number of lines, asserts and errors of each test. After obtaining this array it will be saved in a JSON file with the name **"characterization_lines_asserts_erros.json"** in the "characterization" directory. The following command is used to execute this characterization:
  
`python3 characterization_line_asserts_errors.py`

## Characterization of the Versions

In order to obtain the characterization of the versions of the tests by groups again utilizing the mongodb capabilities. By loading the already created database with the computed metadata we can acquire the versions for all tests in a specific group and save it in an array. To run this file the next command is needed:
  
`python3 characterization_version.py`
  
The results will be saved in a JSON file with the field as the name of the group and an array associated that contains the version of the tests in that group, with the name **"characterization_version.json"** in the "characterization" directory.

## Characterization of the Built-ins

The characterization of the built-ins will also use the mongodb already estabilished in order to catch every built-in in the tests of each group. building an object that has as the fields the number of the groups of built-ins and associated to it an object with each built-in and the number of times it appears. To run this analyses the following command is ran:
  
`python3 characterization_built-ins.py`

The results are saved in the directory "characterization" with the name **"characterization_built-in"**

# Other  

## Harness
  
In order to execute the dynamic analysis it is necessary to use a harness. For the older versions a simpler harness can be used. This harness is saved as **"harness.js"**, however for newer versions a more complex harness is needed and is saved as **"harness_finalissimo.js"** which waas built using the following command:
  
`python3 make_harness.py`
  
## Wrapper
  
For the wrapper of the functions we analysed the html of the ecmascript which is saved in the directory "html" and we take every function of the built-ins, executing the command:
  
`python3 html_parse.py` 
  
This command will create a list with all the functions saved in the directory "functions", finally we can prodeuce the wrappers for the functions with the command:
  
`node produce_re-function.js`
  
This command will create the file **"func.js"** that contains every function wrapped.
  
## Parse ECMARef results
  
The results of the ECMARef needed to be parsed in order to evaluate our work, mainly removing the tests that expect a negative result that our analysis doesn't work. In order to do so the next code is ran:
  
`python3 parse_ECMAREF_results.py`
  
And the results are saved in the file **"es5_tests.json"**.
  
## Parsing the results log
  
To use the results of the tests of an implementation the results need to be in json format, to put the results in a json the following command is executed:
  
`node results_parse.js <filepath>`
  
