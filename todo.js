const argv = process.argv.slice(2);
const command = argv[0];
const input = argv[1];
const Controller = require('./Controllers/toDoController')

switch(command) {
    case "help":
       Controller.showHelp();
        break;
    case "list":
        Controller.showAllTask();
        break;
    case "add":
        Controller.addTask(input);
        break;
    case "findById":
        Controller.findById(input);
        break;
    case "delete":
        Controller.deleteTaskById(input);
        break;
    case "complete":
        Controller.completedTask(input);
        break;
    case "incomplete":
        Controller.incompletedTask(input);
        break;
    default:
        Controller.showHelp();
        break;             
}