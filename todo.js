const Controllers = require('./Controllers/TodoController')
let command = process.argv[2]
let arguments = process.argv.slice(3)

switch(command){
    case undefined:
        console.log("node todo.js help")
        break
    case "help":
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
        console.log('node todo.js list:outstanding')
        console.log('node todo.js list:completed')
        console.log('node todo.js tag')
        console.log('node todo.js filter:tag')
        break
    case "list":
        return Controllers.viewList()
    case 'add':
        console.log('Penambahan Berhasil ')
        return Controllers.add(arguments[0])
    case 'findById':
        return Controllers.showFilter(arguments[0])
    case 'delete':
        console.log('Data berhasil dihapus')
        return Controllers.delete(arguments[0])
    case 'complete':
        Controllers.complete(arguments[0])
        Controllers.viewList()
        break
    case 'uncomplete':
        Controllers.uncomplete(arguments[0])
        Controllers.viewList()
        break
    case 'list:outstanding':
        return Controllers.userSort(arguments[0])
    case 'list:completed':
        return Controllers.showCompleted()
    case 'tag' :
        return Controllers.addTag(arguments.slice(1),arguments[0])
    case 'filter:tag':
        return Controllers.filterTag(arguments)
}