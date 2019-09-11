const command = process.argv[2]
const commandList = process.argv.slice(3)

const Controller = require("./Controller/ToDoController.js")

if(!command || command == "help"){
    Controller.help()
}
else if (command == "list"){
    Controller.list()
}
else if (command == "add"){
    Controller.add(commandList[0])
}
else if (command == "findById"){
    Controller.findById(commandList[0])
}
else if (command == "delete"){
    Controller.delete(commandList[0])
}
else if (command == "complete"){
    Controller.complete(commandList[0])
}
else if (command == "uncomplete"){
    Controller.uncomplete(commandList[0])
}
else if (command == "list:created"){
    if (commandList[0] == "asc" || commandList == ''){
        Controller.createdAsc()
    }
    else if (commandList[0] == "desc"){
        Controller.createdDesc()
    }
}
else if (command == "list:completed"){
    if (commandList[0] == "asc" || commandList == ''){
        Controller.listCompletedAsc()
    }
    else if (commandList[0] == "desc"){
        Controller.listCompletedDesc()
    }
}
else if (command == "tag"){
    Controller.tag(commandList[0], commandList.slice(1))
}
else if (command == `filter:${command.slice(7)}`){
    Controller.filterTag(command.slice(7))
}