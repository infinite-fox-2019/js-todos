const command = process.argv[2]
const parameters_1 = process.argv[3]
const parameters_2 = process.argv[4]
const ListController = require('./Controller/ListController')
const AddController = require('./Controller/AddController')

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
        ListController.findAll()
        break;
    case 'add':
        AddController.addData(parameters_1, parameters_2)
        break;
    case 'findById':
        break;
    case 'delete':
        break;
    case 'complete':
        break;
    case 'uncomplete':
        break; 
}