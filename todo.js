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
    // 
    break
  case 'add':
    // 
    break
  case 'findById':
    // 
    break
  case 'delete':
    // 
    break
  case 'complete':
    // 
    break
  case 'uncomplete':
    // 
    break
}