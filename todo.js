'use strict'

////// IO
const command = process.argv[2]
const input = process.argv.slice(3)

//////require controlercontroler
const ToDoController = require('./Controller/controller.js')

switch (command) {
  case 'help' :
    ToDoController.help()
    break
  case 'list' :
    ToDoController.list ()
    break
  case 'add' :
    ToDoController.addList (input[0])
    break
  case 'find' :
    ToDoController.find (input[0])
    break
  case 'delete' :
    ToDoController.deleteList (input[0])
    break
  case 'completed' :
    ToDoController.completed (input[0])
    break
  case 'uncompleted' :
    ToDoController.uncompleted (input[0])
    break
  case 'tag' :
    ToDoController.tag(input[0],input.slice(1))
    break
  case 'list:created':
    ToDoController.dataSort(input[0])
    break
  case 'list:completed':
    ToDoController.completedSort(input[0])
    break
  case 'filter':
    ToDoController.filterTag(input[0])
    break
  }
