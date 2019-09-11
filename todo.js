//to do list//
let todo = process.argv[2]
let additional = process.argv.slice(3)
const task = require('./controller/studentControler')

switch(todo){
    case 'help': 
    task.help()
    break;

    case 'list':
    task.list()
    break;

    case 'add':
    task.add(additional[0])
    break;
    
    case 'findID' :
    task.findID(additional[0])

    case 'deleteID' :
    task.deleteID(additional[0])

    case 'completeID' :
    task.completeID(additional[0])
}

