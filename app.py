import pymongo
import sys
import subprocess
import json
import os
from colorama import Fore, Back, Style
from pathlib import Path
from encodings import undefined

myclient = pymongo.MongoClient("mongodb+srv://admin:EQMVEPgzXTVTwHuh@cluster0.p5drr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

dblist = myclient.list_database_names()

mydb = myclient["database"]

file = sys.argv[1]

process = subprocess.Popen(["node", "results_parse.js", file],  bufsize=2048, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
process.wait()

with open(file + '.json') as f:
    file_data = json.load(f)

print(Fore.GREEN + "test id: " + Fore.WHITE + str(file_data[0]["test_id"]))
mycol = mydb[file[:-3]]

if file[:-3] not in mydb.list_collection_names():
    mycol.insert_many(file_data)

arr = {}
current_folder = "test262/tests"
i=8
status = "All"
time_status= ""
try:
    os.mkdir("./Queries-" + file[:-3])
except:
    pass


while(True):
    print(Fore.BLUE + "\nChoose a option:\n" + Fore.CYAN + "(Current Folder: "+ current_folder + "; Tests: " + status + "; Time: " + time_status + "s )")
    option = input(Fore.WHITE + "1 - Folder\n2 - Passed\n3 - Failed\n4 - Error\n5 - Filter by Time\n6 - Show Results\n7 - Clear\n8 - Exit\n")

    if (option == "1"):
        cursor = mycol.find(arr).distinct(current_folder.split("/")[-1])
        print(Fore.GREEN + "Possible folders:" + Fore.WHITE)
        f = False
        for document in cursor:
            if (".js" not in document):
                print(document)
                f= True
        if not f:
            print(Fore.RED + "No more folders to enter")
            continue
        i+=1
        while(True):
            folder = input(Fore.CYAN + "Folder:\n"+ Fore.WHITE) 
            if folder not in cursor:
                print(Fore.RED + "Wrong folder")
            else:
                break
        current_folder = current_folder + "/" +folder
        arr[folder] = {"$exists":"true"}
    elif(option == "2"):
        arr['Result'] = "_OK_"
        status = "Pass"
    elif(option == "3"):
        arr["Result"] = "**FAIL**"
        status = "Fail"
    elif(option == "4"):    
        arr["Result"] = "**ERROR**"
        status = "Error"
    elif(option == "5"):
        while(True):
            o = input(Fore.CYAN + "more or less:\n"+ Fore.WHITE) 
            if ((o=="more") |(o=="less")):
                while(True):
                    time = input(Fore.CYAN + o + " than:\n"+ Fore.WHITE)
                    try:
                        float(time) 
                        break
                    except:
                        print(Fore.RED + "Wrong input")
                if (o=="more"):
                    arr["Interpretation"] ={"$gt":float(time)}
                else:
                    arr["Interpretation"] = {"$lt":float(time)}
                time_status = o + " than " + time
                break
            else:
                print(Fore.RED + "Wrong input")
    #elif(option =="6"):
    #   time = 0
    #   cursor = mycol.find(arr)
    #   for x in cursor:
    #       time = time + x["Interpretation"] 
#       print(str(time) + " s")
    elif(option =="6"):
        cursor = mycol.find(arr)
        result=""

        for document in cursor:
            result = result + document["File path"] + "\n"
            #result.append(document)
        filename = "./Queries-" +file[:-3]+"/" + status + "-" + time_status.replace(" ", "_") + "-"+ current_folder.replace("/", "_")+ ".txt"

        f = open(filename, "w+")
        f.write(result)
        f.close()

    elif(option =="7"):
        arr = {}
        i = 8
        status = "All"
        current_folder = "test262/tests"
        time_status= ""

    elif(option == "8"):
        break
    else:
        print(Fore.RED + "wrong input\n")
