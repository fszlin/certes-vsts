import tl = require('vsts-task-lib/task');
import trm = require('vsts-task-lib/toolrunner');
//npm install vsts-task-lib

// Get task parameters
let variable1: string = tl.getPathInput('variable1', false, true);
let variable2: string = tl.getInput('variable2', true);
let identifiers = tl.getInput('Identifiers', true);

async function run() {
    try {
        //do your actions
        tl.debug('variable1:' +variable1);
        tl.debug('variable2:' +variable2);
        tl.debug('identifiers:' +identifiers);
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
