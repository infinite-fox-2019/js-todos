const command = process.argv[2] || ''
const params = process.argv.slice(3)
const Controller = require('./Controller/TodoController.js')


switch (command.split(':')[0]) {
    case 'help':
        Controller.help()
        break;
    case 'list':
        if (command === 'list:created') {
            Controller.listCreated(params[0])
        } else if (command === 'list:completed') {
            Controller.listComplete(params[0])
        } else if (command === 'list') {
            Controller.list()
        } else {
            Controller.help()
        }
        break;
    case 'add':
        Controller.add(params)
        break;
    case 'findById':
        Controller.findById(params[0])
        break;
    case 'delete':
        Controller.delete(params[0])
        break;
    case 'complete':
        Controller.complete(params, true)
        break;
    case 'uncomplete':
        Controller.complete(params, false)
        break;
    case 'tag':
        Controller.tag(params[0], params.slice(1))
        break;
    case 'filter':
        Controller.filter(command.split(':')[1])
        break;

    default:
        Controller.help()
        break;
}