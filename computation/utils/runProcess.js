const { spawn } = require('child_process');
const { exit } = require('process');

async function runProcess(app, input) {
    console.log(`running: ${[app, ...input]}`)
    const process = spawn(app, input);

    process.stdout.on('data', (data) => console.log(`${data}`))
    process.stderr.on('data', (data) => console.log(`stderr: ${data}`))

    const exitCode = await new Promise((code, _) => process.on('close', (code)))
    if (exitCode) { exit(1); }
}

module.exports = runProcess