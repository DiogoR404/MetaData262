import pymongo
import sys
import subprocess
import json
from colorama import Fore, Back, Style
from pathlib import Path

def parse_version(array):
    for i in array:
        try:
            int(i)
        except:
            return False
    return True

def parse_input(user_input, array):
    for i in user_input:
        if i not in array:
            return False
    return True

def version(query, status):
    while(True):
        versions = input(Fore.CYAN + "Which version (separate by commas if more than one): \n" + Fore.WHITE)
        array_versions = versions.replace(" ", "").split(",")
        if parse_version(array_versions):
            break
        else:
            print(Fore.RED + "Invalid Input")
    q = []
    for v in array_versions:
        q.append({"version": int(v)})

    if "$and" in query.keys():
        query["$and"].append({"$or":q})
    else:
        query["$and"] = [{"$or":q}]
    
    status["version"] = array_versions

def parser(option,query, status, o):
    
    cursor = mycol.find(query).distinct(option)
    print(Fore.GREEN + "Possible options:" + Fore.WHITE)
    print(cursor)
    for document in cursor:
        if document !=None:
            print(Fore.WHITE + document)
    while(True):
        versions = input(Fore.CYAN + "Which " + option + " (separate by commas if more than one): \n"+ Fore.WHITE)
        array_versions = versions.replace(" ", "").split(",")
        if parse_input(array_versions, cursor):
            break
        else:
            print(Fore.RED + "Invalid Input")

    q = []
    for v in array_versions:
        q.append({option: v})
    if "$and" in query.keys():
        if o =="or":
            query["$and"].append({"$or":q})
        elif o =="and":
            for x in q:
                query["$and"].append(x)

    else:
        if o =="or":
            query["$and"] = [{"$or":q}]
        elif o =="and":
            query["$and"] = []
            for x in q:
                query["$and"].append(x)

    print(query)
    status[option] = {o:array_versions}

def parser_builtIn(option,query, status, o):
    
    cursor = mycol.find(query).distinct(option)
    print(Fore.GREEN + "Possible options:" + Fore.WHITE)
    key=[]
    for document in cursor:
        list(document.keys())
        for i in document.keys():
            if i not in key:
                key.append(i)
                print(Fore.WHITE + i)
    while(True):
        versions = input(Fore.CYAN + "Which " + option + " (separate by commas if more than one): \n"+ Fore.WHITE)
        array_versions = versions.replace(" ", "").split(",")
        if parse_input(array_versions, key):
            break
        else:
            print(Fore.RED + "Invalid Input")

    q = []
    for v in array_versions:
        s = option + "." + v
        q.append({s: {"$exists":"True"}})
    if "$and" in query.keys():
        if o =="or":
            query["$and"].append({"$or":q})
        elif o =="and":
            for x in q:
                query["$and"].append(x)

    else:
        if o =="or":
            query["$and"] = [{"$or":q}]
        elif o =="and":
            query["$and"] = []
            for x in q:
                query["$and"].append(x)

    print(query)
    status[option] = {o:array_versions}

myclient = pymongo.MongoClient("mongodb+srv://admin:KwmzGY2TEb8I0ipy@cluster0.p5drr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
dblist = myclient.list_database_names()

mydb = myclient["database"]
mycol = mydb["metadata_v"]

with open('./metadata_version.json') as f:
    file_data = json.load(f)

if "metadata_v" not in mydb.list_collection_names():
    mycol.insert_many(file_data)

query={}
status = {}
Path("./Selected_Tests").mkdir(parents=True, exist_ok=True)
current_folder=""
while(True):
    print(query)
    print(Fore.BLUE + "Choose a option:\n" + Fore.CYAN + str(status))
    option = input(Fore.WHITE + "1 - by Version\n2 - by Syntactic Construct\n3 - by Built-In\n4 - by Line\n5 - by Assert\n6 - by Errors\n7 - by Folder\n8 - Get Tests\n9 - Characterization\n10 - Clear\n11 - Exit\n")

    if (option == "1"):
        if "version" in status:
            print(Fore.CYAN + "Version already queried\n")
            continue
                
        cursor = mycol.find(query).distinct("version")
        l = []
        print(Fore.GREEN + "Possible options:" + Fore.WHITE)
        for document in cursor:
            if document !=None:
                print(Fore.WHITE + str(document))
                
        version(query, status)

    elif(option == "2"):
        if "syntactic_construct" in status:
            print(Fore.CYAN + "Syntactic constructs already queried\n")
            continue

        while(True):
            o = input(Fore.CYAN + "'and' or 'or': \n"+ Fore.WHITE)
            if (o != "and") &(o !="or"):
                print(Fore.RED + "Invalid Input")
            else:
                break
        parser("syntactic_construct",query, status, o)    
        
    elif(option == "3"):
        if "built-ins" in status:
            print(Fore.CYAN + "Built-Ins already queried\n")
            continue  

        while(True):
            o = input(Fore.CYAN + "'and' or 'or': \n"+ Fore.WHITE)
            if (o != "and") &(o !="or"):
                print(Fore.RED + "Invalid Input")
            else:
                break        
        parser_builtIn("builtIns",query, status, o)  
    elif(option == "4"):
        while(True):
            o = input(Fore.CYAN + "more or less lines:\n"+ Fore.WHITE) 
            if ((o=="more") |(o=="less")):
                while(True):
                    lines = input(Fore.CYAN + o + " than:\n"+ Fore.WHITE)
                    try:
                        int(lines) 
                        break
                    except:
                        print(Fore.RED + "Wrong input")
                if (o=="more"):
                    query["lines"] ={"$gt":int(lines)}
                else:
                    query["lines"] = {"$lt":int(lines)}
                status["lines"] = o + "_than_" + lines
                break
            else:
                print(Fore.RED + "Wrong input")    
    elif(option == "5"):
        while(True):
            o = input(Fore.CYAN + "more or less asserts:\n"+ Fore.WHITE) 
            if ((o=="more") |(o=="less")):
                while(True):
                    asserts = input(Fore.CYAN + o + " than:\n"+ Fore.WHITE)
                    try:
                        int(asserts) 
                        break
                    except:
                        print(Fore.RED + "Wrong input")
                if (o=="more"):
                    query["asserts"] ={"$gt":int(asserts)}
                else:
                    query["asserts"] = {"$lt":int(asserts)}
                status["asserts"] = o + "_than_" + asserts
                break
            else:
                print(Fore.RED + "Wrong input")    
    elif(option == "6"):
        while(True):
            o = input(Fore.CYAN + "more or less errors:\n"+ Fore.WHITE) 
            if ((o=="more") |(o=="less")):
                while(True):
                    error = input(Fore.CYAN + o + " than:\n"+ Fore.WHITE)
                    try:
                        int(error) 
                        break
                    except:
                        print(Fore.RED + "Wrong input")
                if (o=="more"):
                    query["error"] ={"$gt":int(error)}
                else:
                    query["error"] = {"$lt":int(error)}
                status["error"] = o + "_than_" + error
                break
            else:
                print(Fore.RED + "Wrong input")    

    elif(option =="7"):
        print(Fore.GREEN + "Possible folders:" + Fore.WHITE)
        if current_folder =="":
            print("built-ins\nlanguage")
            cursor=["built-ins", "language"]
        else:
            cursor = mycol.find(query).distinct(current_folder.split("/")[-1])
            f = False
            for document in cursor:
                if (".js" not in document):
                    print(document)
                    f= True
            if not f:
                print(Fore.RED + "No more folders to enter")
                continue
        while(True):
            folder = input(Fore.CYAN + "Folder:\n"+ Fore.WHITE) 
            if folder not in cursor:
                print(Fore.RED + "Wrong folder")
            else:
                break

        current_folder = current_folder + "/" +folder
        status["folder"]=current_folder
        query[folder] = {"$exists":"true"}
    elif(option == "8"):    
        cursor = mycol.find(query)
        result=""

        for document in cursor:
            result = result + document["path"] + "\n"
            #result.append(document)

        name= "SELECTION"
        for s in status:
            if s =="version":
                name = name + "-" + s + "-" + ",".join(status[s])
            elif (s == "asserts") | (s=="lines") | (s =="error"):
                name = name + "-" + s + "-" + status[s]
            elif(s=="folder"):
                name=name + status[s].replace("/", "-")
            else:
                name=name + "-" + s + "-"
                print(list(status[s].keys())[0])
                o=list(status[s].keys())[0]
                if len(status[s][o]) >1:
                    for i in status[s][o]:
                        name = name + i + "_" + o + "_"
                    if o =="and":
                        name = name[:-5]
                    else:
                        name = name[:-4]

                else :
                    name = name + status[s][o][0]
        filename = "./Selected_Tests/"+ name + ".txt"

        f = open(filename, "w+")
        f.write(result)
        f.close()
    elif(option == "9"):
        cursor = mycol.aggregate([
            { 
                "$match" : query
            },
            { 
                "$group" : { 
                    "_id" : "characterization", 
                    "tests":{"$sum": 1},
                    "lines" : { "$avg" : "$lines" },
                    "assert" : { "$avg" : "$asserts" },
                    "error" : { "$avg" : "$error" } 


                }
            }
        ]);
        result = list(cursor)
        print(Fore.GREEN + "Nº tests: " +Fore.WHITE+ str(result[0]["tests"]))
        print(Fore.GREEN + "Average lines: " +Fore.WHITE+ str(result[0]["lines"]))
        print(Fore.GREEN + "Average Asserts: " +Fore.WHITE+ str(result[0]["assert"]))
        print(Fore.GREEN + "Average Error: " +Fore.WHITE+ str(result[0]["error"]))

    elif(option =="10"):
        query = {}
        status = {}
        current_folder=""
    elif(option == "11"):
        break
    else:
        print(Fore.RED + "wrong input\n")
