let command = process.argv[2]
const argsAdd = process.argv.slice(3)
const controller = require('./Controller/controller')
let dataFilter = ''
if (command == undefined) {
    command = 'help'
}else if (command.split('').splice(0,6).join('') == 'filter') {    
    let pisah = command.split(':')
    command = pisah[0]
    dataFilter = pisah[1]
}

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
        console.log(' >>>>>>>>>> $ node todo.js list:outstanding asc')
        console.log(' >>>>>>>>>> $ node todo.js list:outstanding dsc')
        console.log(' >>>>>>>>>> $ node todo.js list:completed asc')
        console.log(' >>>>>>>>>> $ node todo.js list:completed dsc')
        console.log(' >>>>>>>>>> $ node todo.js list:uncompleted asc')
        console.log(' >>>>>>>>>> $ node todo.js list:uncompleted dsc')
        console.log(' >>>>>>>>>> $ node todo.js tag <add_tag>')
        console.log(' >>>>>>>>>> $ node todo.js filter:<filter_tagname>')
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
            console.log(' >>>>>>>>>> $ node list:completed asc')
            console.log(' >>>>>>>>>> $ node list:completed dsc')
            break
        }
    case 'list:uncompleted':
            if (argsAdd == 'asc') {
                controller.uncompleteAsc()
                break
            } else if (argsAdd == 'dsc') {
                controller.uncompleteDsc()
                break
            } else {
                console.log(' >>>>>>>>>> $ node list:uncompleted asc')
                console.log(' >>>>>>>>>> $ node list:uncompleted dsc')
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
            if (dataFilter == undefined) {
                console.log(' >>>>>>>>>> $ node filter:<search>')
                break
            } else {
                controller.filter(dataFilter)
                break;
            }
    default:
            console.log(' >>>>>>>>>> $ node todo.js')
            console.log(' >>>>>>>>>> $ node todo.js list')
            console.log(' >>>>>>>>>> $ node todo.js add <task_content>')
            console.log(' >>>>>>>>>> $ node todo.js findById <task_id>')
            console.log(' >>>>>>>>>> $ node todo.js delete <task_id>')
            console.log(' >>>>>>>>>> $ node todo.js complete <task_id>')
            console.log(' >>>>>>>>>> $ node todo.js uncomplete <task_id>')
            console.log(' >>>>>>>>>> $ node todo.js list:outstanding asc')
            console.log(' >>>>>>>>>> $ node todo.js list:outstanding dsc')
            console.log(' >>>>>>>>>> $ node todo.js list:completed asc')
            console.log(' >>>>>>>>>> $ node todo.js list:completed dsc')
            console.log(' >>>>>>>>>> $ node todo.js list:uncompleted asc')
            console.log(' >>>>>>>>>> $ node todo.js list:uncompleted dsc')
            console.log(' >>>>>>>>>> $ node todo.js tag <add_tag>')
            console.log(' >>>>>>>>>> $ node todo.js filter:<filter_tagname>')
            break
}