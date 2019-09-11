const Controller = require('./Controllers/ToDoController')

let command = process.argv[2];
let task = process.argv.slice(3);
if(command.split(':')[0] == 'filter'){
    task = command.split(':')[1];
    command = 'filter';
}




switch(command){
    case 'list':
        Controller.viewAll();
        break;
    case 'add':
        Controller.addTask(task[0])
        break;
    case 'findById':
        Controller.findId(task[0]);
        break;
    case 'delete':
        Controller.deleteTask(task[0]);
        break;
    case 'complete':
        Controller.competeTask(task[0]);
        break;
    case 'uncomplete':
        Controller.uncompleteTask(task[0])
        break;
    case 'list:created':
        if(task[0] == 'asc'){
            Controller.sortDate();  
        }
        else if(task[0] == 'desc'){
            Controller.sortDateDesc();
        }
        break;
    case 'list:completed':
            if(task[0] == 'asc'){
                Controller.viewCompleteASC();
            }
            else if(task[0] == 'desc'){
                Controller.viewCompleteDESC();
            }
        break;
    case 'list:uncompleted':
            if(task[0] == 'asc'){
                Controller.viewUncompleteASC();
            }
            else if(task[0] == 'desc'){
                Controller.viewUncompleteDESC();
            }
            break;
    case 'tag':
        Controller.addTags(task[0], task.slice(1))
        break;
    case 'filter':
        Controller.searchFilter(task)
        break;
    case 'help':
        console.log('all - untuk menampilkan semua todo list');
        console.log('add <task> - untuk menambahkan task');
        console.log('findById <id> - untuk menampilkan task berdasarkan id');
        console.log('delete <id> - untuk menghapus task pada id');
        console.log('complete <id> - untuk menyelesaikan task');
        console.log('list:created asc - untuk menapilkan semua todo list berdasarkan tanggal awal dibuat');
        console.log('list:created desc - untuk menampilkan semua todo list berdasarkan tanggal terakhir dibuat');
        console.log('list:completed - untuk menampilkan semua todo list yang telah selesai');
        console.log('list:uncompleted - untuk menampilkan semua todo list yeng belum selesai');
        console.log('tag <id> <tag> ... <tag> - untuk menambahkan tag pada task');
        console.log('filter:<tag> - untuk mencari todo list berdasarkan tag');
        
        
        break;
}
