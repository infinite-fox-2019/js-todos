const Controller = require('./Controllers/TaskController.js')

const command = process.argv[2]
const parameters = process.argv.slice(3)

switch (command) {
    case 'help':
        Controller.help()
        break
    case 'list' :
        Controller.list()
        break
    case 'add':
        Controller.add(parameters[0]) 
        break
    case 'findById' :
        Controller.findById(Number(parameters[0]))
        break
    case 'delete' :
        Controller.delete(Number(parameters[0]))
        break
    case 'complete' :
        Controller.complete(Number(parameters[0]))
        break
    case 'uncomplete' :
        Controller.uncomplete(Number(parameters[0]))
        break
    case 'list:created' :
        if (parameter[0] === 'asc'){
            Controller.asc();
        } else if (parameter[0] === 'desc') {
            Controller.desc();
        }
    break;
    case 'list:completed' :
        if (parameter[0] === 'asc'){
            Controller.completeAsc();
        } else if (parameter[0] === 'desc') {
            Controller.completeDsc();
        }
    break;
    case 'tag' :
        Controller.tag(parameter[0],tagName);
    break;
    case `filter:${command.slice(7)}`: 
        Controller.filterTag(command.slice(7));
        
    break;
    default:
        Controllerler.help()
}

