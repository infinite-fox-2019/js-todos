
let command = process.argv[2];
let parameters = process.argv.slice(3);

switch(command) {
    case 'list':
        console.log('this is list');
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