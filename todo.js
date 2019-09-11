const toDoControllers = require('./Controllers/toDoControllers.js')

const command = process.argv[2];
const arguments = process.argv.slice(3);

switch(command){
  case 'list':
    console.log('Ini daftar list');
    break;
  case 'add':
    console.log('data sudah ditambahkan');
    break;
  case 'findById':
    console.log('cari berdasarkan id');
    break;
  case 'delete':
    console.log('data di hapus');
    break;
  case 'complete':
    console.log('komplit');
    break;
  case 'uncomplete':
    console.log('belum komplit');
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
