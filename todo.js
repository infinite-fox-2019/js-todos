// const fs = require('fs');
const command = process.argv[2];
const parameter = process.argv.slice(3);
const commandListData = [
    {command: 'node todo.js help', description: 'Show all commands in this program'},
    {command: 'node todo.js list', description: 'Show to do list'},
    {command: 'node todo.js add <task_content>', description: 'add new to do list'},
    {command: 'node todo.js findById <task_id>', description: 'find to do list by ID'},
    {command: 'node todo.js delete <task_id>', description: 'delete to do list by ID'},
    {command: 'node todo.js complete <task_id>', description: 'show completed to do list by ID'},
    {command: 'node todo.js uncomplete <task_id>', description: 'show uncompleted to do list by ID'}
];
const Control = require('./Controller/Control');
switch(command) {
    case 'help' :
        console.table(commandListData);
    break;
    case 'list' :
        Control.list();
    break;
    case 'add' :
        Control.add(parameter[0]);
    break;
    case 'findById' :
        Control.findById(parameter[0])
    break;
    case 'delete' :
        Control.delete(parameter[0]);
    break;
    case 'complete' :
        Control.complete(parameter[0]);
    break;
    case 'uncomplete' :
        Control.uncomplete(parameter[0]);
        
    break;
    default:
        console.table(commandListData);
}
