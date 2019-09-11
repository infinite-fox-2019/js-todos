const command = process.argv[2]
const arguments = process.argv.slice(3)
const TaskController = require('./Controllers/TaskController')

switch(command) {
    case "help":
    default:
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
        break;

    case "list":
        TaskController.viewAll()
        break;

    case "add":
        TaskController.add(arguments[0])
        break;

    case "findById":
        TaskController.displayById(arguments[0])
        break;

    case 'delete':
        TaskController.delete(arguments[0])
        break;

    case 'complete':
        TaskController.complete(arguments[0])
        break;

    case "uncomplete":
        TaskController.uncomplete(arguments[0])
        break;

    case "list:created":
        if (arguments[0] === 'asc') {
            TaskController.asc()
        } else {
            TaskController.desc()
        }
        break;
}