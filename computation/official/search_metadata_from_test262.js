//GetMetadata
//  runs through a directory, given as argument
//  recursively analyses every file in the directory and files in the directory
//    for each file it takes the metadata associated to it - written in commentary in the beginning of the file

const fs = require('fs');

//reads file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

function GetMetadata(path) {

    function multiple_lines(intial_string) {
        let i = 1;
        let string = intial_string;

        while (!(program[line + i].charAt(0) !== " " && program[line + i].split(":").length > 1) && !program[line + i].includes("---*/")) {

            string = string.concat(program[line + i].replace(/\s{2,}/g, '') + "\n");
            i++;
        }
        return string;
    }

    let program_text = readFileContent(path);

    let metadata = {
        path: path.slice(11) // removing the inicial caracters of the path to start with test/
    };

    program = program_text.split("\n");
    //metadata["eval"] = searchEval(program_text, path);

    //saltar o copyright
    let line = 2
    for (; line < program.length - 1; line++) {
        lineArray = program[line].split(":");
        switch (lineArray[0].replace(/ /g, "")) {
            case "description":
            case "info": {
                metadata[lineArray[0].replace(/ /g, "")] = multiple_lines(lineArray[1]);
                break;
            }
            case "negative": {
                metadata[lineArray[0].replace(/ /g, "")] = {
                    "phase": program[++line].split(":")[1].replace(" ", ""),
                    "type": program[++line].split(":")[1].replace(" ", "")
                };
                break;
            }
            case "flags":
            case "features":
            case "includes": {
                metadata[lineArray[0].replace(/\s/g, "")] = lineArray[1]
                    .replace("[", "")
                    .replace("]", "")
                    .replace(/\s/g, "")
                    .split(",");
                break;
            }

            case "timeout":
            case "author":
            case "esid": {
                metadata[lineArray[0].replace(/ /g, "")] = lineArray[1];
                break;
            }
            case "es5id": {
                metadata["version"] = 5;
                metadata["esid"] = lineArray[1];
                break;
            }
            case "es6id": {
                metadata["version"] = 6;
                metadata["esid"] = lineArray[1];
                break;
            }
            case "---*/": {
                return metadata;
            }
        }
    }
    return metadata;
}


function recursive(path, json) {
    const st = fs.lstatSync(path);

    if (st.isDirectory()) {
        const files = fs.readdirSync(path);
        for (file in files) {
            const stat = fs.lstatSync(path + "/" + files[file]);

            if (stat.isDirectory()) {
                if (files[file] !== "harness" && files[file] !== "annexB" && files[file] !== "intl402") {
                    recursive(path + "/" + files[file], json);
                }
            } else if (-1 === files[file].indexOf('_FIXTURE')) {
                let metadata_final = GetMetadata(path + "/" + files[file]);
                if (metadata_final === null) {
                    console.log(path + "/" + files[file]);
                }
                json.push(metadata_final);
            }
        }
    }
    return json;
}

function computeOfficialMetadata() {
    const result = recursive("../test262/test", []);

    fs.writeFile(__dirname + "/results/metadata_test262.json", JSON.stringify(result), function () { });
    console.log('Number of tests: ' + result.length);
    return result;
}

if (require.main === module) {
    computeOfficialMetadata();
} else {
    module.exports = computeOfficialMetadata;
}