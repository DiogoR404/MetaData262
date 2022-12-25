const fs = require('fs');
const collectBuiltInSignatures = require('./collectBuiltInSignatures');

function generateBuiltInWrappers(versions) {
    function write_to_file(func) {
        let str_parsed = func.replace(/\<var\>/g, "").replace(/\<\/var\>/g, "").replace(/\%|\[|\]/g, "");
        let str = str_parsed.replace(regex, '\n$1.$2__= $1.$2;\n$1.$2 = function (){\n\tlog42.indexOf__(\"$1\.$2\") === -1 ? log42.push__(\"$1\.$2\") : null;\n\tvar args = []\n\targs = copyArgs(arguments, args);\n\treturn $1.$2__.apply__(this, args)\n}\n');
        stream.write(str);
    }

    const lines = collectBuiltInSignatures(versions);
    const regex = /(\w+)\.(\w+\.\w+)\s\((.*?)\)/;

    let stream = fs.createWriteStream(__dirname + "/results/builtInsWrappers.js", { flags: 'w' });
    stream.write("let log42 = [];\nfunction copyArgs(from, to){\n\tfor (var i = 0; i<from.length; i++) {\n\t\tto[i] = from[i];\n\t}\n\treturn to\n}\n");

    const typedArray = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array"];
    for (let line in lines) {
        if (lines[line].includes('.prototype.') && !lines[line].includes("Generator")) {
            if (lines[line].includes("TypedArray")) {
                for (ta in typedArray) {
                    write_to_file(lines[line].replace("TypedArray", typedArray[ta]));
                }
            }
            else {
                write_to_file(lines[line])
            }
        }
    }
}

if (require.main === module) {
    const conf = JSON.parse(fs.readFileSync(__dirname + "/../configurations/dynamicAnalysis.json"));
    generateBuiltInWrappers(conf.versions);
} else {
    module.exports = generateBuiltInWrappers;
}
