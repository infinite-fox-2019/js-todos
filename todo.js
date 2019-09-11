const ToDoControllers = require('./Controllers/toDoControllers.js');

const command = process.argv[2];
const arguments = process.argv.slice(3);

switch(command){
  case 'list':
    ToDoControllers.viewAllList();
    break;
  case 'add':
    ToDoControllers.addData(arguments[0]);
    break;
  case 'findById':
    ToDoControllers.findById(arguments[0]);
    break;
  case 'delete':
    ToDoControllers.deleteData(arguments[0]);
    break;
  case 'complete':
    ToDoControllers.dataComplete(arguments[0]);
    break;
  case 'uncomplete':
    ToDoControllers.dataUncomplete(arguments[0]);
    break;
  case 'help':
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js findById <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
    break;
  default:
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js findById <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
}
