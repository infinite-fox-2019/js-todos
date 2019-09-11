const command = process.argv[2] ? process.argv[2].split(':') : [undefined]
const args = process.argv.slice(3)
const TodoController = require('./controllers/TodoController')

switch(command[0]) {
  case 'list':
    TodoController.list(command[1], args[0])
    break
  case 'add':
    TodoController.add(args[0])
    break
  case 'findById':
    TodoController.findById(args[0])
    break
  case 'delete':
    TodoController.delete(args[0])
    break
  case 'complete':
    TodoController.complete(args[0])
    break
  case 'uncomplete':
    TodoController.uncomplete(args[0])
    break
  case 'tag':
    TodoController.tag(args[0], args.slice(1))
    break
  case 'help':
  case undefined:
    console.log('$ node todo.js # Will call help')
    console.log('$ node todo.js list # Menampilkan command apa saja yang tersedia')
    console.log('$ node todo.js add <task_content> # Melihat daftar TODO')
    console.log('$ node todo.js findById <task_id> # Melihat detail Todo sesuai `task_id` nya')
    console.log('$ node todo.js delete <task_id> # Menghapus TODO sesuai `task_id` nya')
    console.log('$ node todo.js complete <task_id> # Menandai status TODO selesai')
    console.log('$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai')
    break
  default:
    console.log('error')
}
