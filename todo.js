const com = process.argv[2] === undefined ? '' : process.argv[2].split(':')
const command = com[0]
const subcommand = com[1]
const parameter = process.argv.slice(3)

const { HelpController, TodoController } = require('./controllers')

switch (command) {
  case 'help':
    HelpController.help()
    break
  case 'list':
    TodoController.list(subcommand, parameter[0])
    break
  case 'add':
    TodoController.add(parameter.join(' '))
    break
  case 'findById':
    TodoController.findById(parameter)
    break
  case 'delete':
    TodoController.delete(parameter)
    break
  case 'complete':
    TodoController.completeUncomplete(command, parameter)
    break
  case 'uncomplete':
    TodoController.completeUncomplete(command, parameter)
    break
  case 'tag':
    TodoController.tag(parameter[0], parameter.slice(1))
    break
  case 'filter': 
    TodoController.filter(subcommand)
    break
  default:
    HelpController.help()
    break
}