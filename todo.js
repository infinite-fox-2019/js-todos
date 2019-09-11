const ToDoControllers = require('./Controllers/toDoControllers.js');

const command = process.argv[2].split(':');
const arguments = process.argv.slice(3);
const mainCommand = command[0];
const subCommand = command[1];

switch(mainCommand){
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
  case 'list:created':
    ToDoControllers.listCreated(arguments[0]);
    break;
  case 'list:completed':
    ToDoControllers.listCompleted(arguments[0]);
    break;
  case 'tag':
    ToDoControllers.addTag(arguments[0], arguments.slice(1));
    break;
  case 'filter':
    ToDoControllers.filterTag(subCommand);
    break;
  case 'help':
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js list:created asc|desc');
    console.log('$ node todo.js list:completed asc|desc');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js findById <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
    console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
    console.log('$ node todo.js filter: <tag_name>');
    break;
  default:
      console.log('$ node todo.js');
      console.log('$ node todo.js help');
      console.log('$ node todo.js list');
      console.log('$ node todo.js list:created asc|desc');
      console.log('$ node todo.js list:completed asc|desc');
      console.log('$ node todo.js add <task_content>');
      console.log('$ node todo.js findById <task_id>');
      console.log('$ node todo.js delete <task_id>');
      console.log('$ node todo.js complete <task_id>');
      console.log('$ node todo.js uncomplete <task_id>');
      console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
      console.log('$ node todo.js filter: <tag_name>');
      break;
}
