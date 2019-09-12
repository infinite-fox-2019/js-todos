const argv = process.argv.slice(2);
const command = argv[0];
const input = argv[1];
const tags = process.argv.slice(4);
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
    case "list:created":
        if (input === 'asc'){
            Controller.ascByDate();
        } else if (input === 'desc') {
            Controller.descByDate();
        } else if (input === undefined) {
            Controller.descByDate();
        }
        break;
    case "list:completed":
            if (input === 'asc'){
                Controller.completeSortAsc();
            } else if (input === 'desc') {
                Controller.completeSortDesc();
            } else if (input === undefined) {
                Controller.descByDate();
            }
            break;
    case 'tag':
        Controller.tags(input, tags);
        break;
    case `filter:`:
        Controller.filteredTag();
        break;
    default:
        Controller.showHelp();
        break;
}