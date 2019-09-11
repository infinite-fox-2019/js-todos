const ToDoController = require('./controllers/todoController')

const input = process.argv.slice(2)

if (input.length < 1) {
    return ToDoController.showHelp()
} else {

    const command = input[0].split(':')[0]
    const type = input[0].split(':')[1]



    switch (command) {
        case 'help':
            ToDoController.showHelp()
            break;
        case 'list':
            if (type) {
                if (input[1]) {
                    ToDoController.showList(type, input[1])
                } else {
                    ToDoController.showList(type, 'asc')
                }

            } else {
                ToDoController.showList('created', 'asc')
            }
            break;
        case 'add':
            ToDoController.add(input[1])
            break;
        case 'findById':
            ToDoController.findById(input[1])
            break;
        case 'complete':
            ToDoController.complete(input[1])
            break;
        case 'uncomplete':
            ToDoController.uncomplete(input[1])
            break;
        case 'delete':
            ToDoController.delete(input[1])
            break;
        case 'tag':
            ToDoController.addTag(input[1], input.slice(2))
            break;
        case 'filter':
            ToDoController.findByTag(type)
            break;
        default:
            ToDoController.showHelp()
            break;
    }
}