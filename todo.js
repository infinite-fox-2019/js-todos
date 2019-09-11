const commandData = require("./Controller/ControllerTask.js");
const read = process.argv.slice(2);
const command = read[0];
const num = read[1];


switch(command){
    case "help":
        console.log(`Available Command :\n --help\n --list\n --add <task_content>\n --findById <task_id>\n --delete <task_id>\n --complete <task_id>\n --uncomplete <task_id>\n --list:created asc|desc\n --list|completed asc|desc`);
        break;
    case "list":
        commandData.view();
        break;
    case "add":
        commandData.add(num);
        break;
    case "findById":
        commandData.findByID(num);
        break;
    case "delete":
        commandData.delete(num);
        break;
    case "complete":
        commandData.complete(num);
        break;
    case "uncomplete":
        commandData.uncomplete(num);
        break;
    case "list:created":
        commandData.listCreated(num);
        break;
    case "list:completed":
        commandData.listCompleted(num);
        break;
    default:
        console.log("Try --help to see command list");
        break;
}
