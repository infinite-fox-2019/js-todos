const command = process.argv[2];
const parameters = process.argv.slice(3);
const Controllers = require('./Controllers/TodoController')

switch (command) {
    case 'help':
        console.log('usage:');
        console.log('');
        console.log('node todo.js help  # menampilkan command apa saja yang tersedia');
        console.log('node todo.js list  # melihat daftar TODO');
        console.log('node todo.js add <task_content>  # menambahkan TODO ke dalam list');
        console.log('node todo.js findById <task_id>  # melihat detail TODO sesuai `task_id`');
        console.log('node todo.js delete <task_id>  # menghapus TODO sesuai `task_id` nya');
        console.log('node todo.js complete <task_id>  # menandai status TODO selesai');
        console.log('node todo.js uncomplete <task_id>  # menandai status TODO belum selesai');
        console.log('');
        break;
    case 'list':
        Controllers.list();
        break;
    case 'add':
        Controllers.add(parameters[0]);
        console.log(`Added ${parameters[0]} to your TODO list..`);
        break;
    case 'findById':
        break;
    case 'delete':
        break;
    case 'complete':
        break;
    case 'uncomplete':
        break;
    default:
        console.log('usage:');
        console.log('');
        console.log('node todo.js help  # menampilkan command apa saja yang tersedia');
        console.log('node todo.js list  # melihat daftar TODO');
        console.log('node todo.js add <task_content>  # menambahkan TODO ke dalam list');
        console.log('node todo.js findById <task_id>  # melihat detail TODO sesuai `task_id`');
        console.log('node todo.js delete <task_id>  # menghapus TODO sesuai `task_id` nya');
        console.log('node todo.js complete <task_id>  # menandai status TODO selesai');
        console.log('node todo.js uncomplete <task_id>  # menandai status TODO belum selesai');
        console.log('');
        break;
}