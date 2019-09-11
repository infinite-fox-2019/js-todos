//ini adalah class utama

const command = process.argv[2]
const argument = process.argv.slice(3)
const controller = require ('./controller/toDoController.js')
const view = require ('./view/toDoView.js')


if (!command|| command == 'help') {
    view.help()
} else if (command == 'list') {
    controller.list()
} else if (command == 'add') {
    controller.add(argument[0])  
} else if (command == 'findById') {
    controller.findById(argument[0]) 
} else if (command == 'delete') {
    controller.delete(argument[0]) 
} else if (command == 'complete') {
    controller.complete(argument[0]) 
} else if (command == 'uncomplete') {
    controller.uncomplete(argument[0]) 
} else if (command == 'list:created') {
    if (argument[0] == 'asc' || !argument[0]) {
        controller.asc()
    } else if (argument[0] == 'desc') {
        controller.desc()
    }
} else if (command == 'list:completed') {
    if (argument[0] == 'asc' || !argument[0]) {
        controller.ascComplete()
    } else if (argument[0] == 'desc') {
        controller.descComplete()
    }
} else if (command == 'tag') {
    controller.tag(argument[0], argument.slice(1))
} else if (command.slice(0,7) == 'filter:') {
    controller.filterTag(command.slice(7))
}

