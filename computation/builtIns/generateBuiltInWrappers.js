const fs = require('fs');
const collectBuiltInSignatures = require('./collectBuiltInSignatures');

function generateBuiltInWrappers(versions) {
    function write_to_file(func) {
        let str_parsed = func.replace(/\<var\>/g, "").replace(/\<\/var\>/g, "").replace(/\%|\[|\]/g, "");
		let strToBeReplaced;
		if (str_parsed.includes('Function.prototype')){
			strToBeReplaced = '\n$1.$2.$3__= $1.$2.$3;\n' +
				'$1.$2.$3 = { $3 () {\n' +
					'\tlog42[\"$1\.$2\.$3\"] = true;' +
					'\tlet args = copyArgs(arguments);\n' +
					'\treturn $1.$2.$3__.apply__(this, args);\n' +
				'}}.$3\n' +
				'$1.$2.$3.prototype !== undefined ? $1.$2.$3.prototype = $1.$2.$3__.prototype: null;\n' +
				'Object.defineProperty($1.$2.$3, "length", {value: $1.$2.$3__.length});\n';
		} else {
			strToBeReplaced = '\nwrappedFunctions[\"$1\.$2\.$3\"] = $1.$2.$3;\n'+
				'$1.$2.$3 = { $3 () {\n' +
					'\tlog42[\"$1\.$2\.$3\"] = true;\n' +
					'\tlet args = copyArgs(arguments);\n' +
					'\treturn wrappedFunctions[\"$1\.$2\.$3\"].apply__(this, args);\n' +
				'}}.$3\n' +
				'$1.$2.$3.prototype !== undefined ? $1.$2.$3.prototype = wrappedFunctions[\"$1\.$2\.$3\"].prototype : null;\n' +
				'Object.defineProperty($1.$2.$3, "length", {value: wrappedFunctions[\"$1\.$2\.$3\"].length});\n';
		}
        let str = str_parsed.replace(regex, strToBeReplaced);

        stream.write(str);
    }

    const lines = collectBuiltInSignatures(versions);
    const regex = /(\w+)\.(\w+)\.(\w+)\s\((.*?)\)/;

    let stream = fs.createWriteStream(__dirname + "/results/builtInsWrappers.js", { flags: 'w' });
    stream.write("var log42 = {};\n"+
		"const stringify__ = JSON.stringify;\n"+
		"const wrappedFunctions = {};\n"+
		"function copyArgs(from){\n"+
			"\tlet to = {};\n" +
			"\tfor (var i = 0; i<from.length; i++) {\n"+
				"\t\tto[i] = from[i];\n"+
			"\t}\n"+
			"\tto.length = from.length;\n"+
			"\treturn to\n"+
		"}\n");

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
