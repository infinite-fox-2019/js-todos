let instruction = process.argv[2]
const Controller = require('./Controllers/Controller.js')
const commandSpl = instruction.split(':')
switch(instruction){
  case 'help':
    console.log(`Intructions: \nhelp\nlist\nadd <task_content>\nfindById <task_id>\ndelete <task_id>\ncomplete <task_id>\nuncomplete <task_id>\ntags <task_id> <task_content>\nfilter:<task_content>`)
    break;
  case 'list':
    Controller.listAll()
    break;
  case 'list:created':
    Controller.created(process.argv[3])
    break;
  case 'list:completed':
    Controller.listCompleted()
    break;
  case 'add':
    Controller.add(process.argv[3])
    break;
  case 'find':
    Controller.find(process.argv[3])
    break;
  case 'delete':
    Controller.delete(process.argv[3])
    break;
  case 'complete':
    Controller.complete(Number(process.argv[3]))
    break;
  case 'uncomplete':
    Controller.uncomplete(Number(process.argv[3]))
    break;
  case 'tags':
    let tags = []
    for(i=4 ; i<process.argv.length ; i++){
      tags.push(process.argv[i])
    }
    Controller.tag(Number(process.argv[3]), tags)
    break;
  case `filter:${commandSpl[1]}`:
    Controller.filter(commandSpl[1])
    break;
}
