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
        DataController.complete(parameter)
        break;
    case "uncomplete" :
        DataController.uncomplete(parameter)
        break;
}