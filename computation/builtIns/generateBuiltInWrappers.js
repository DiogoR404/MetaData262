const fs = require('fs');
const collectBuiltInSignatures = require('./collectBuiltInSignatures');

const getStringToReplaceTypedArray = '\nwrappedFunctions[\"$1\.$2\.$3\"] = Int8Array.$2.$3;\n'+
	'generalTypedArrayPrototype.$3 = { $3 () {\n' +
		'\tlog42[\"$1\.$2\.$3\"] = true;\n' +
		'\tlet args = copyArgs(arguments);\n' +
		'\treturn wrappedFunctions[\"$1\.$2\.$3\"].apply__(this, args);\n' +
	'}}.$3\n' +
	'generalTypedArrayPrototype.$3.prototype !== undefined ? Int8Array.$2.$3.prototype = wrappedFunctions[\"$1\.$2\.$3\"].prototype : null;\n' +
	'Object.defineProperty(generalTypedArrayPrototype.$3, "length", {value: wrappedFunctions[\"$1\.$2\.$3\"].length});\n';

const getStringToReplaceFunction = '\n$1.$2.$3__= $1.$2.$3;\n' +
	'$1.$2.$3 = { $3 () {\n' +
		'\tlog42[\"$1\.$2\.$3\"] = true;' +
		'\tlet args = copyArgs(arguments);\n' +
		'\treturn $1.$2.$3__.apply__(this, args);\n' +
	'}}.$3\n' +
	'$1.$2.$3.prototype !== undefined ? $1.$2.$3.prototype = $1.$2.$3__.prototype: null;\n' +
	'Object.defineProperty($1.$2.$3, "length", {value: $1.$2.$3__.length});\n';

const getStringToReplace = '\nwrappedFunctions[\"$1\.$2\.$3\"] = $1.$2.$3;\n'+
	'$1.$2.$3 = { $3 () {\n' +
		'\tlog42[\"$1\.$2\.$3\"] = true;\n' +
		'\tlet args = copyArgs(arguments);\n' +
		'\treturn wrappedFunctions[\"$1\.$2\.$3\"].apply__(this, args);\n' +
	'}}.$3\n' +
	'$1.$2.$3.prototype !== undefined ? $1.$2.$3.prototype = wrappedFunctions[\"$1\.$2\.$3\"].prototype : null;\n' +
	'Object.defineProperty($1.$2.$3, "length", {value: wrappedFunctions[\"$1\.$2\.$3\"].length});\n';

function generateBuiltInWrappers(versions) {
    function write_to_file(func) {
        let str_parsed = func.replace(/\<var\>/g, "").replace(/\<\/var\>/g, "").replace(/\%|\[|\]/g, "");
<<<<<<< HEAD
        let strToBeReplaced = '\nlogObjects["$1.$2.$3"] = $1.$2.$3;\n$1.$2.$3 = function ';
        if (str_parsed.endsWith('delete') || str_parsed.endsWith('catch') || str_parsed.endsWith('finally')){
            strToBeReplaced += '$3 ';
        }
        strToBeReplaced += '(){\n'+
				'\tlog42.indexOf__(\"$1\.$2\.$3\") === -1 ? log42.push__(\"$1\.$2\.$3\") : null;\n'+
				'\tvar args = []\n'+
				'\targs = copyArgs(arguments, args);\n'+
				'\treturn logObjects["$1.$2.$3"].apply(this, args)\n'+
			'}\n'+
			'$1.$2.$3.prototype = $1.$2.$3__.prototype;\n';
        let str = str_parsed.replace(regex, strToBeReplaced);
        stream.write(str);
=======
		let strToReplace;
		if (str_parsed.includes("TypedArray")) {
			strToReplace = getStringToReplaceTypedArray;
		} else if (str_parsed.includes('Function.prototype')){
			strToReplace = getStringToReplaceFunction;
		} else {
			strToReplace = getStringToReplace;
		}
        stream.write(str_parsed.replace(regex, strToReplace));
>>>>>>> 1aa354f1ad28309c47face306f73cd09242d6ba5
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
		"}\n"+
<<<<<<< HEAD
    		"var logObjects = {};\n");
=======
		"const generalTypedArrayPrototype = Object.getPrototypeOf(Int8Array.prototype)");
>>>>>>> 1aa354f1ad28309c47face306f73cd09242d6ba5

    for (let line in lines) {
        if (lines[line].includes('.prototype.') && !lines[line].includes("Generator")) {
			write_to_file(lines[line])
        }
    }
}

if (require.main === module) {
    const conf = JSON.parse(fs.readFileSync(__dirname + "/../configurations/dynamicAnalysis.json"));
    generateBuiltInWrappers(conf.versions);
} else {
    module.exports = generateBuiltInWrappers;
}
