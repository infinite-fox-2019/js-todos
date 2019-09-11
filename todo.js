const command = process.argv[2]
const argsAdd = process.argv.slice(3)
const controller = require('./Controller/controller')

switch(command) {
    case 'help':
        case undefined :
        console.log(' >>>>>>>>>> $ node todo.js')
        console.log(' >>>>>>>>>> $ node todo.js list')
        console.log(' >>>>>>>>>> $ node todo.js add <task_content>')
        console.log(' >>>>>>>>>> $ node todo.js findById <task_id>')
        console.log(' >>>>>>>>>> $ node todo.js delete <task_id>')
        console.log(' >>>>>>>>>> $ node todo.js complete <task_id>')
        console.log(' >>>>>>>>>> $ node todo.js uncomplete <task_id>')
        break
    case 'list':
        controller.findAll()
    break
    case 'list:outstanding':
        if (argsAdd == 'asc') {
            controller.sortAsc()
            break
        } else if (argsAdd == 'dsc') {
            controller.sortDsc()
            break
        } else {
            console.log(' >>>>>>>>>> $ node list:outstanding asc')
            console.log(' >>>>>>>>>> $ node list:outstanding dsc')
            break
        }
    case 'list:completed':
        if (argsAdd == 'asc') {
            controller.completeAsc()
            break
        } else if (argsAdd == 'dsc') {
            controller.completeDsc()
            break
        } else {
            console.log(' >>>>>>>>>> $ node list:complete asc')
            console.log(' >>>>>>>>>> $ node list:complete dsc')
            break
        }
    case 'add':
        if (argsAdd[0] == undefined) {
            console.log('MASUKKAN TASK');
            break;
        } else {
            controller.add(argsAdd[0])
            break
        }
    case 'findId':
        if (argsAdd[0] == undefined) {
            console.log('INPUT ID');
            break;
        } else {
            controller.findById(argsAdd[0])
            break
        }
    case 'delete':
        if (argsAdd[0] == undefined) {
            console.log('INPUT ID');
            break;
        } else {
            controller.delete(argsAdd[0])
            break
        }
    case 'complete':
        if (argsAdd[0] == undefined) {
            console.log('INPUT ID');
            break;
        } else {
            controller.complete(argsAdd[0])
            break
        }
    case 'tag':
            controller.tagAdd(argsAdd[0],argsAdd[1])
            break;
    case 'filter':
            controller.filter(argsAdd[0])
            break;
    default:
    console.log('No Message')
}