const TodoController = require('./Controller/TodoController');

let command = process.argv[2];
let parameters = process.argv.slice(3);

switch(command) {
    case 'list':
        TodoController.getList();
    break;
    case 'add':
        TodoController.addTodo(parameters[0]);
    break;
    case 'findById':
        TodoController.getTodoById(Number(parameters[0]));
    break;
    case 'delete':
        TodoController.deleteTodoById(Number(parameters[0]));
    break;
    default:
        console.log('node todo.js');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
}