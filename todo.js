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
    default : Controller.help()
}

