const command = process.argv[2]
const parameter = process.argv.slice(3) //bentuk result nya adalah array
const DataController = require('./Controllers/DataController')

switch (command) {
    case "help":
        DataController.help()
        break;
    case "list" :
        DataController.list()
        break;
    case "add" :
        DataController.add(parameter[0])
        break;
    case "findById" :
        DataController.findById(parameter[0])
        break;
    case "delete" :
        DataController.delete(parameter[0])
        break;
    case "complete" :
        DataController.complete(parameter[0])
        break;
    case "uncomplete" :
        DataController.uncomplete(parameter)
        break;
    case "list:created" :
        DataController.listCompleted()
        break;
    case 'list:created' :
        if (parameter[0] === 'asc'){
            Control.asc();
        } else if (parameter[0] === 'desc') {
            Control.desc();
        } else if (parameter[0] === undefined) {
            Control.desc();
        }
    break;
    case 'list:completed' :
        if (parameter[0] === 'asc'){
            Control.completeAsc();
        } else if (parameter[0] === 'desc') {
            Control.completeDesc();
        } else if (parameter[0] === undefined) {
            Control.completeDesc();
        }
    break;
    case 'tag' :
        Control.tag(parameter[0],tagName);
    break;
    case undefined :
        console.table(commandListData);

    break
    case `filter:${command.slice(7)}`: 
        Control.filterTag(command.slice(7));
        
    break;
    default:
        DataController.help()

}