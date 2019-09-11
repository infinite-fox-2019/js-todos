const command = process.argv[2]
const parameter = process.argv[3]
const parameter_number = Number(process.argv[3])
const ListController = require('./Controller/ListController')
const AddController = require('./Controller/AddController')
const FindByIdController = require('./Controller/FindByIdController')

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
        AddController.addData(parameter)
        break;
    case 'findById':
        FindByIdController.findData(parameter_number)
        break;
    case 'delete':
        break;
    case 'complete':
        break;
    case 'uncomplete':
        break; 
}