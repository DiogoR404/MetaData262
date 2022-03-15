const fs = require('fs');


//function to read a file
function readFileContent(file) {
    return fs.readFileSync(file, 'utf8');

}

var path = "./test262-main/test/harness/"
var stream = fs.createWriteStream("harness2.js", {flags:'a'});

fs.readdirSync(path).forEach(file => {
        var file_1 = readFileContent(path + file);
        stream.write(file_1)
});


stream.end()
