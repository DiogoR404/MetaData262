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

results={"all": {}, "notIn":{}}

c = list(mycol.find({}).distinct("builtIns"))
builtin=[]
array=["Array", "Uint8Array", "Uint16Array", "Uint32Array", "FloatArray", "Float32Array", "Float64Array", "BigInt64Array", "Int32Array", "BigUint64Array", "Int8Array", "Int16Array", "Uint8ClampedArray"]
error= ["Error", "TypeError", "ReferenceError", "RangeError", "URIError", "EvalError", "SyntaxError"]
typedArray =["TypedArray", "TypedArrayConstructors"]
for i in c:
    for k in list(i.keys()):
        if k in array:
            continue
        if k in error:
            continue
        if k not in builtin:
            builtin.append(k)
#print(builtin)

for document in builtin:
    if document in error or document in array or document in typedArray:
        continue
    a = "builtIns." + document

    cursor2 = mycol.aggregate([
        { 
            "$match" : {"$or":[{"built-ins":{"$exists":"true"}}, {"language":{"$exists":"true"}}], a: {"$exists":"true"}}
        },
       
        { 
            "$group" : { 
                "_id" : "n", 
                "n" : { "$sum" : 1}
            }
        }
    ]);
    r = {}
    for i in list(cursor2):
        if i["_id"] != None:
            r[i["_id"]]=i["n"]
    
    if r!={}:
        results["all"][document]= r["n"]
    else:
        results["all"][document]=0

    cursor2 = mycol.aggregate([
        { 
            "$match" : {"$or":[{"$and":[{"built-ins":{"$exists":"true"}}, {"built-ins": {"$ne": document}}]}, {"language":{"$exists":"true"}}], a: {"$exists":"true"}}
        },
       
        { 
            "$group" : { 
                "_id" : "n", 
                "n" : { "$sum" : 1}
            }
        }
    ]);
    r = {}
    for i in list(cursor2):
        if i["_id"] != None:
            r[i["_id"]]=i["n"]
    
    if r!={}:
        results["notIn"][document]= r["n"]
    else:
        results["notIn"][document]=0

a=[]
for e in error:
    a.append({"builtIns." + e: {"$exists":"true"}})

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"$or":[{"built-ins":{"$exists":"true"}}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]
  
results["all"]["Error"]=r["n"]

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"$or":[{"$and":[{"built-ins":{"$exists":"true"}}, {"built-ins": {"$nin": ["Error", "NativeErrors", "ThrowTypeError"]}}]}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]
  
results["notIn"]["Error"]=r["n"]

a=[]
for e in array:
    a.append({"builtIns." + e: {"$exists":"true"}})

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"$or":[{"built-ins":{"$exists":"true"}}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]

results["all"]["Array"]=r["n"]

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and":[{"$or":[{"$and":[{"built-ins":{"$exists":"true"}}, {"built-ins": {"$nin": ["Array", "ArrayIteratorPrototype"]}}]}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]

results["notIn"]["Array"]=r["n"]

a=[]
for e in typedArray:
    a.append({"builtIns." + e: {"$exists":"true"}})

cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and": [{"$or":[{"built-ins":{"$exists":"true"}}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]

results["all"]["TypedArray"]= r["n"]


cursor2 = mycol.aggregate([
    { 
        "$match" : {"$and": [{"$or":[{"$and":[{"built-ins":{"$exists":"true"}}, {"built-ins": {"$nin": ["TypedArray", "TypedArrayConstructors"]}}]}, {"language":{"$exists":"true"}}]}, {"$or":a}]}
    },
    
    { 
        "$group" : { 
            "_id" : "n", 
            "n" : { "$sum" : 1}
        }
    }
]);
r = {}
for i in list(cursor2):
    if i["_id"] != None:
        r[i["_id"]]=i["n"]

results["notIn"]["TypedArray"]= r["n"]


final_results = open("./characterization/"+"characterization_built-ins.json", "w")
final_results.write(json.dumps(results))
