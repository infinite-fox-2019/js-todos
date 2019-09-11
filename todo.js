const command = process.argv[2]
const parameter = process.argv.slice(3)
const input = parameter[0]
const tagInput = parameter [1]
const TodoController = require('./controllers/todoController')

switch(command) {
    case "help" :
        TodoController.help()
        break
    case "list" :
        TodoController.findAll()
        break
    case "add" :
        TodoController.add(input, tagInput)
        break
    case "findById" :
        TodoController.findById(input)
        break
    case "delete" :
        TodoController.delete(input)
        break
    case "complete" :
        TodoController.complete(input)
        break
    case "uncomplete" :
        TodoController.unComplete(input)
        break
    case "tag" :
        TodoController.tag(input, tagInput)
        break
    case "list:completed" :
        TodoController.listCompleted()
        break
    case "list:created" :
        TodoController.listCreated()
        break
    // case "test" :
        // TodoController.test()
        // break
    default:
        TodoController.help()
        break
}

