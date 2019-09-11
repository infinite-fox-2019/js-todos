const command = process.argv[2]
const parameters = process.argv.splice(3)
const TodoController = require('./Controller/TodoController')

switch(command){
    case 'help' :
    case undefined : {
                    console.log('node todo.js ==> Will call Help');
                    console.log('node todo.js help ==> Menampilkan command apa saja yang tersedia');
                    console.log('node todo.js list ==> Menampilkan daftar TODO');
                    console.log('node todo.js add <task_content> ==> Menamkan TODO ke list');
                    console.log('node todo.js findBy <task_id> ==> Melihat detail TODO sesuai <task_id>');
                    console.log('node todo.js delete <task_id> ==> Menenghapus TODO sesuai <task_id>');
                    console.log('node todo.js complate ==> Menandai status TODO selesai');
                    console.log('node todo.js uncomplete ==> Menandai status TODO belum selesai');
                    console.log('node todo.js list:created asc|desc ==> Melihat daftar TODO sesuai tanggal dibuat');
                    console.log('node todo.js list:complete asc|desc ==> Melihat daftar TODO sesuai deftar yang sudah selesai');
                    console.log('node todo.js tag <task_id> <tag_name1> <tag_name2>... ==> Menambahkan beberapa tag pada TODO');
                    console.log('node todo.js filter:<tag_name> ==> Memfilter TODO yang memiliki tag tertentu');
                } break;
    case 'list' : {
        TodoController.tampilTodo()
        } break;
    case 'add' : {
        TodoController.tambahTodo(parameters)
        } break;
    case 'findById' : {
        TodoController.findById(Number(parameters[0]))
        } break;
    case 'delete' : {
        TodoController.delete(Number(parameters[0]))
        } break;
    case 'complete' : {
        TodoController.complete(Number(parameters[0]))
        } break;
    case 'uncomplete' : {
        TodoController.uncomplete(Number(parameters[0]))
        } break;
    case 'list:created' : {
        TodoController.sortByCreated(parameters[0])
        } break;
    case 'list:completed' : {
        TodoController.sortByComplete(parameters[0])
        } break;
    case 'tag' : {
        TodoController.tag(parameters)
        } break;
} 
