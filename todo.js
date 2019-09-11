let command = process.argv[2]
let parameters = process.argv.slice(3)

// console.log(command, parameters);
const Controller = require('./Controllers/Controller')

switch (command) {
  case undefined:
    Controller.help()
    break
  case 'help':
    Controller.help()
    break
  case 'list':
    Controller.list()
    break
  case 'add':
    Controller.add(parameters)
    break
  case 'findById':
    Controller.findById(parameters)
    break
  case 'delete':
    Controller.delete(parameters)
    break
  case 'complete':
    Controller.complete(parameters)
    break
  case 'uncomplete':
    Controller.uncomplete(parameters)
    break
  case 'list:created':
    Controller.listSortByCreated(parameters[0])
    break
  case 'list:completed':
    // 
    break
  case 'tag':
    // 
    break
  case 'filter':
    // 
    break
  
}