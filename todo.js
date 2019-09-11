const TodoController = require('./Controller/TodoController');

let command = process.argv[2] ? process.argv[2].split(':') : '';
let parameters = process.argv.slice(3);

switch(command[0]) {
    case 'list':
        if(command[1]) {
            TodoController.getListSort(command[1], parameters[0]);
        } else {
            TodoController.getList();
        }
    break;
    case 'add':
        TodoController.add(parameters[0]);
    break;
    case 'findById':
        TodoController.getById(Number(parameters[0]));
    break;
    case 'delete':
        TodoController.deleteById(Number(parameters[0]));
    break;
    case 'complete':
        TodoController.completeById(Number(parameters[0]), true);
    break;
    case 'uncomplete':
        TodoController.completeById(Number(parameters[0]), false);
    break;
    case 'tag':
        TodoController.tagById(Number(parameters[0]), parameters.slice(1));
    break;
    case 'filter':
        TodoController.getListByTag(command[1]);
    break;
    default:
        console.log('node todo.js');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js list:created');
        console.log('node todo.js list:created asc');
        console.log('node todo.js list:created desc');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
        console.log('node todo.js tag <task_id> <tag1> <tag2> <tagn>');
        console.log('node todo.js filter:<tag>');
}