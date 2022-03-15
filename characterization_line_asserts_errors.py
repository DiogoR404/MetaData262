import pymongo
import sys
import subprocess
import json
from colorama import Fore, Back, Style
from pathlib import Path

myclient = pymongo.MongoClient("mongodb+srv://admin:KwmzGY2TEb8I0ipy@cluster0.p5drr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
dblist = myclient.list_database_names()

mydb = myclient["database"]
mycol = mydb["metadata_v"]

with open('./metadata_version.json') as f:
    file_data = json.load(f)

if "metadata_v" not in mydb.list_collection_names():
    mycol.insert_many(file_data)

results={"built-ins":[], "language":[]}

cursor = {"global":["global", "parseInt", "parseFloat", "eval", "Infinity", "isFinite", "isNaN", "NaN", "undefined"], 
    "fundamental":["Object", "Function", "Boolean", "Symbol", "Error", "NativeErrors", "ThrowTypeError"], 
    "Numbers and Dates": ["Number", "BigInt", "Math", "Date"], 
    "Text Processing":["String","RegExp"], 
    "Indexed Collections": ["Array", "TypedArray", "TypedArrayConstructors"], 
    "Keyed Collection": ["Map", "Set", "WeakMap", "WeakSet"], 
    "Structured Data": ["ArrayBuffer", "SharedArrayBuffer", "DataView", "Atomics", "JSON"], 
    "Control Abstraction":["MapIteratorPrototype", "ArrayIteratorPrototype", "IteratorPrototype", "SetIteratorPrototype", "StringIteratorPrototype","RegExpStringIteratorPrototype", "GeneratorFunction", "AsyncGeneratorFunction", "GeneratorPrototype", "AsyncGeneratorPrototype", "AsyncFunction", "Promise", "AsyncArrowFunction", "AsyncIteratorPrototype", "AsyncFromSyncIteratorPrototype"], 
    "Reflection":["Reflect", "Proxy"],
    "Managing Memory": ["WeakRef", "FinalizationRegistry"],
    "URI": ["decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent"]}

for document in cursor:
    f={"$or":[]}
    for builtin in cursor[document]:
        f ["$or"].append({"built-ins":builtin})
    cursor2 = mycol.aggregate([
        { 
            "$match" : f
        },
        { 
            "$group" : { 
                "_id" : document, 
                "tests":{"$sum": 1},
                "lines" : { "$push" : "$lines" },
                "assert" : { "$push" : "$asserts" },
                "error" : { "$push" : "$error" }
            }
        }
    ]);

    results["built-ins"].append(list(cursor2)[0])


cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"language":{"$exists":"true"}}, {"language":"statements"}]}
    },
    { 
            "$group" : { 
                "_id" : "statements", 
                "tests":{"$sum": 1},
                "lines" : { "$push" : "$lines" },
                "assert" : { "$push" : "$asserts" },
                "error" : { "$push" : "$error" }
            }
        }
]);
results["language"].append(list(cursor2)[0])

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"language":{"$exists":"true"}}, {"language":"expressions"}]}
    },
    { 
            "$group" : { 
                "_id" : "expressions", 
                "tests":{"$sum": 1},
                "lines" : { "$push" : "$lines" },
                "assert" : { "$push" : "$asserts" },
                "error" : { "$push" : "$error" }
            }
        }
]);
results["language"].append(list(cursor2)[0])


cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"language":{"$exists":"true"}}, {"language":{"$nin":["statements", "expressions"]}}]}
    },
    { 
            "$group" : { 
                "_id" : "other", 
                "tests":{"$sum": 1},
                "lines" : { "$push" : "$lines" },
                "assert" : { "$push" : "$asserts" },
                "error" : { "$push" : "$error" }
            }
        }
]);
results["language"].append(list(cursor2)[0])

final_results = open("./characterization/"+"characterization_lines_asserts_erros.json", "w")
final_results.write(json.dumps(results))
