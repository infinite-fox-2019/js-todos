const command = process.argv[2]
const parameter = process.argv[3]
const parameter_number = Number(process.argv[3])
const TodoController = require('./Controller/TodoController')

switch(command) {
    case 'help':
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
        break;
    case 'list':
        TodoController.list()
        break;
    case 'add':
        TodoController.add(parameter)
        break;
    case 'findById':
        TodoController.findById(parameter_number)
        break;
    case 'delete':
        TodoController.delete(parameter_number)
        break;
    case 'complete':
        TodoController.complete(parameter_number)
        break;
    case 'uncomplete':
            TodoController.uncomplete(parameter_number)
        break; 
}