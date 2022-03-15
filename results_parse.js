const fs = require('fs');

//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

function toSeconds(str){
    //0m0,289s
    if (str === ""){
        return ""
    }
    var t = str.split("m");

    var min = parseFloat(t[0]);
    var sec = parseFloat(t[1].slice(0, -1).replace(",", "."))

    return min*60 + sec;
}

function getResults(json, line, id) {
    
    var info = line.split(' | ');

    var metadata = {
        "test_id":id,
        "File path": info[0],
        "Result": info[1],
        "Observations": info[2],
        "Creation of the AST": toSeconds(info[3]),
        "Plus to Core": toSeconds(info[4]),
        "Interpretation": toSeconds(info[5])
    }

    var path = info[0].replace('test/test262/tests/','');

    
    var folders = path.split('/');

    metadata['tests'] = folders[0]
    
    for (f in folders){
        if (!path.includes('/')){
            break;
        }

        path = path.replace(folders[f]+'/','')
        metadata[folders[f]] = folders[parseInt(f)+1]
    } ;
    

    json.push(metadata);

}
var program_text = readFileContent(process.argv[2]);

var lines = program_text.split('\n');

var json = [];



const id = Date.now();


for (var i = 0; i < lines.length;i++){
    if (lines[i] === "### Individual results"){
        i+=2;

        while(true) {
            i = i+1;
            var line = lines[i];

            if (line === "" || line ===undefined){
                break;
            }
            getResults(json, line, id);
        }
    }
    
}

fs.writeFile(process.argv[2] + ".json", JSON.stringify(json), function(){});
