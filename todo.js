const command = process.argv[2]
const args = process.argv.slice(3)
const TodoController = require('./controllers/TodoController')

switch(command) {
  case 'help':
  case undefined:
    console.log('node todo.js help # will call help')
    console.log('node todo.js list # menampilkan')
    break
  case 'list':
    TodoController.list()
    break
  case 'add':
    TodoController.add(args[0])
    break
  default:
    console.log('error')
}
