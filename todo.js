const Controller = require('./controller/todoController')
let command = process.argv[2]
let argument = process.argv.slice(3)


switch(command){
    case '-list':
        Controller.getData()
        break
    case '-add':       
        Controller.addData(argument[0] , argument.slice(1))
        break
    case '-delete':
        // console.log(argument[0]);
        Controller.deleteData(argument[0])
        break
    case '-findById':
        // console.log(argument[0]);
        Controller.viewById(argument[0])
        break
    case '-complete':
        Controller.completeTask(argument[0])
        break
    case '-uncomplete':
        Controller.uncompleteTask(argument[0])
        break
    case '-list:created':
        Controller.listCreated(argument[0])
        break
    case '-list:completed':
        Controller.listCompleted(argument[0])
        break
    case '-tag':
        Controller.addTag(argument[0], argument.slice(1) )
        break
    case '-filter:':
        Controller.filterTag(argument[0], argument[1])
        break
    default : 
        console.log('                       ');
        console.log('                       ');
        console.log('           ──────▄▀▄─────▄▀▄');
        console.log('           ─────▄█░░▀▀▀▀▀░░█▄');
        console.log('           ─▄▄──█░░░░░░░░░░░█──▄▄');
        console.log('           █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
        console.log('                       ');
        console.log('                       ');
        console.log('                TODO MVC ');
        console.log('                       ');
        console.log('                       ');
        console.log('HELP');
        console.log('-help => menampilkan command yang tersedia');
        console.log('-list => menampilkan list');
        console.log('-add <task-content> <task-tag> <task-tag> <task-tag> .... <task-tag> => menambahkan to do ke dalam list');
        console.log('-findById <task-id> => melihat detail todo sesuai task id');
        console.log('-delete <task-id> => menghapus list berdasarkan id');
        console.log('-complete <task-id> => menandai status todo selesai');
        console.log('-uncomplete <task-id> => menandai status todo belum selesai');
        console.log('-list:created asc/dsc => sort ascending / descending berdasarkan waktu todo dibuat');
        console.log('-list:completed asc/dsc => sort ascending / descending berdasarkan waktu complete todo dibuat');
        console.log('-tag <task_id> <task_tag> <task_tag> <task_tag>...<task_tag> menambahkan pada task sesuai dengan id');
        console.log('-filter: <tag_name> => filter data berdasarkan tag' );
        
        
         
        

        
}