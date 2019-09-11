const command = process.argv[2]
const parameter = process.argv.slice(3) //bentuk result nya adalah array
const DataController = require('./Controllers/DataController')

switch (command) {
    case "help":
        DataController.help()
        break;
    case "list" :
        DataController.showList()
        break;
    case "add" :
        DataController.addTask()
        break;
    case "findById" :
        DataController.findById()
        break;
    case "delete" :
        DataController.delete()
        break;
    case "complete" :
        DataController.complete()
        break;
    case "uncomplete" :
        DataController.uncomplete()
        break;
}