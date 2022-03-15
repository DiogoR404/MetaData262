
const fs = require('fs');


//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

function parse(file){
    results = {"es5":[], "es6":[], "es8":[], "es9":[], "es10":[], "es11":[], "notSupported":[]}
    for(version in file){
        for(test in file[version]){
            results[version].push(file[version][test]["path"])
        }
    }
    return results
}

var file_1 = readFileContent("./dynamic_results/mixed_analysis.json");
var metadata = JSON.parse(file_1);

var file_node = readFileContent("./dynamic_results_node/dynamic_analysis.json");
var metadata_node = parse(JSON.parse(file_node));

var file_2 = readFileContent("es5_tests.json");
var file =JSON.parse(file_2)["correct"];



var r = {"es5":[], "es6":[], "es8":[], "es9":[], "es10":[], "es11":[], "notSupported":[], "unknown":[]}
var results = {"node":JSON.parse(JSON.stringify(r)), "mixed":JSON.parse(JSON.stringify(r))}



for(line in file){
    var hasVersion ={"node":false, "spidermonkey":false, "mixed":false}
    test = "./test262-main/test" + file[line].substring(18)
    for(version in r){
        if(version =="unknown"){
            continue
        }
        if(metadata_node[version].indexOf(test) >-1){
            results["node"][version].push(test)
            hasVersion["node"] = true
            metadata_node[version].splice(metadata_node[version].indexOf(test),1)
            
        }

        if (metadata[version].indexOf(test) > -1){
            results["mixed"][version].push(test)
            hasVersion["mixed"] = true
            metadata[version].splice(metadata[version].indexOf(test),1)

        }
    }
    if(!hasVersion["node"]){
        results["node"]["unknown"].push(test)
    }

    if(!hasVersion["mixed"]){
        results["mixed"]["unknown"].push(test)
    }


}

let data2 = JSON.stringify({"node":results["node"], "mixed":results["mixed"], "also node":metadata_node["es5"], "also mixed":metadata["es5"]})

fs.writeFileSync('./comparison.json', data2);