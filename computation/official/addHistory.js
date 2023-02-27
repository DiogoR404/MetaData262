const { execSync } = require('child_process');
const fs = require('fs');

// adds createdOn and lastModified to metadata
function addDates(metadata) {
    const prevTestHistory = JSON.parse(fs.readFileSync(__dirname + '/results/testChangeDates.json'));
    const options = { cwd: __dirname + '/../../resources/test262' };
    const command = 'git diff --name-only ' + prevTestHistory.hashLastCommit;
    const filesChanged = execSync(command, options).toString().trim().split('\n');
    const hashLastCommit = execSync('git log -1 --format="%H"', options).toString().trim();
    const newTestHistory = { 'hashLastCommit': hashLastCommit };

    metadata.forEach(test => {
        let testHistory = prevTestHistory[test.path];
        if (filesChanged.includes(test.path)) {
            command = 'git log --follow --format="%cs" ' + test.path;
            testHistory = execSync(command, options).toString().trim().split('\n').reverse();
        }
        test.createdOn = testHistory[0];
        test.lastModified = testHistory[testHistory.length - 1];
        newTestHistory[test.path] = testHistory;
    });

    fs.writeFileSync(__dirname + '/results/testChangeDates.json', JSON.stringify(newTestHistory))
}
if (require.main === module) {
    addDates(JSON.parse(fs.readFileSync(__dirname + '/results/metadata_test262.json')));
} else {
    module.exports = addDates
}














