const comand = process.argv[2];
const argument = process.argv[3];
const argumentTags = process.argv.slice(3);
const controller = require ('./Controllers/todoController')


switch ( comand ) {
    case undefined : 
        console.log ( '--node todo.js help-- menampilkan command' );
        break;
    case "help" : 
        console.log('--node todo.js list-- Melihat daftar TODO');
        console.log('--node todo.js list:create asc-- Melihat daftar TODO berurut ascending'); 
        console.log('--node todo.js list:create desc-- Melihat daftar TODO berurut descending'); 
        console.log('--node todo.js add <task_content>-- Menambahkan TODO ke dalam list'); 
        console.log('--node todo.js findById <taks_id>-- Melihat detail TODO sesuai \'task_id\'');
        console.log('--node todo.js delete <task_id>-- Menghapus TODO sesuai \'task_id\'');
        console.log('--node todo.js complete <task_id>-- Menandai status TODO selsai');
        console.log('--node todo.js uncomplete <task_id>-- Menandai status TODO belum selesai');
        console.log('--node todo.js tag <id> <name_1> <name_2> ...  -- Menambahkan beberapa tag pada TODO');
        console.log('--node todo.js filter:<tag>-- Menfilter berdasarkan tag');
        break;
    case "list" :
        controller.takeData();
        break;
    case "list:create asc" :
        controller.takeData();
        break;
    case "list:create desc" :
        controller.listDesc ();
        break;
    case 'add' :
        controller.addTodo ( argument );
        break;
    case 'findById' :
        controller.findData ( argument );
        break;
    case 'delete' :
        controller.deleteData ( argument );
        break;
    case 'complete' :
        controller.completeStatus ( argument );
        break;
    case 'uncomplete' :
        controller.uncompleteStatus ( argument );
        break;
    case 'tag' :
        controller.addTags ( argumentTags );
        break;
    case 'filter' :
        controller.getByTagFilter ( argument );
        break;
}