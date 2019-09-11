const command = process.argv[2] === undefined ? '' : process.argv[2].split(':');
const subCommand = command[1];
const commandTodo = command[0];

const parameters = process.argv.slice(3);
const Controllers = require('./Controllers/TodoController')

switch (commandTodo) {
    case 'help':
        Controllers.help();
        break;
    case 'list':
        Controllers.list(subCommand, parameters[0]);
        break;
    case 'add':
        Controllers.add(parameters[0]);
        break;
    case 'tag':
        Controllers.tag(Number(parameters[0]), parameters.slice(1));
        break;
    case 'filter':
        Controllers.filter(subCommand);
        break;
    case 'findById':
        Controllers.findById(Number(parameters[0]));
        break;
    case 'delete':
        Controllers.delete(Number(parameters[0]));
        break;
    case 'complete':
        Controllers.complete(Number(parameters[0]));
        break;
    case 'uncomplete':
        Controllers.uncomplete(Number(parameters[0]));
        break;
    default:
        Controllers.help();
        break;
}