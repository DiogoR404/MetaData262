const fs = require('fs');
function collectBuiltInSignatures(versions) {
    let signatures;
    for (i in versions) {
        const standard = fs.readFileSync(__dirname + '/../../resources/standards/html' + versions[i], 'utf-8');

        signatures = standard.
            split('<h1>').
            map(elm => { return elm.split('</h1>')[0].replace(/\n */g, ' ').replace(/<i>|<\/i>/g,'').replace('...', '... '); }).
            filter(elm => { return !elm.includes('<h1') && elm.includes('span class="secnum"'); });
        const begining = signatures.filter(elm => {return elm.endsWith('The Global Object');})[0];

        signatures = signatures.
            slice(signatures.indexOf(begining)).
            map(elm => { return elm.split('</span>')[1].trim(); }).
            filter(elm => {
                return elm.includes('(') && !elm.includes('<span');
            });

        fs.writeFileSync(__dirname + '/results/functions/functions_' + versions[i] + '.txt', signatures.join('\n'));
    }

    return signatures;
}


if (require.main === module) {
    const conf = JSON.parse(fs.readFileSync(__dirname + "/../configurations/dynamicAnalysis.json"));
    collectBuiltInSignatures(conf.versions);
} else {
    module.exports = collectBuiltInSignatures;
}