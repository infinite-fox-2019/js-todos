// const fs = require('fs');
const command = process.argv[2];
const parameter = process.argv.slice(3);
const tagName = process.argv.slice(4);

const commandListData = [
    {command: 'node todo.js help', description: 'Show all commands in this program'},
    {command: 'node todo.js list', description: 'Show to do list'},
    {command: 'node todo.js add <task_content>', description: 'add new to do list'},
    {command: 'node todo.js findById <task_id>', description: 'find to do list by ID'},
    {command: 'node todo.js delete <task_id>', description: 'delete to do list by ID'},
    {command: 'node todo.js complete <task_id>', description: 'show completed to do list by ID'},
    {command: 'node todo.js uncomplete <task_id>', description: 'show uncompleted to do list by ID'},
    {command: 'node todo.js list:created asc', description: 'show to do list sort with ascending method'},
    {command: 'node todo.js list:created desc', description: 'show to do list sort with descending method'},
    {command: 'node todo.js list:completed asc', description: 'show to do complete list , sort with ascending method'},
    {command: 'node todo.js list:completed desc', description: 'show to do complete list , sort with descending method'},
    {command: 'node todo.js tag <task_id> <tag_name_1> ..', description: 'add tag name to a specific to do list ID'},
    {command: 'node todo.js filter:<tag_name>', description: 'show to do list filter by tag name'}
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
    case 'list:created' :
        if (parameter[0] === 'asc'){
            Control.asc();
        } else if (parameter[0] === 'desc') {
            Control.desc();
        } else if (parameter[0] === undefined) {
            Control.desc();
        }
    break;
    case 'list:completed' :
        if (parameter[0] === 'asc'){
            Control.completeAsc();
        } else if (parameter[0] === 'desc') {
            Control.completeDesc();
        } else if (parameter[0] === undefined) {
            Control.completeDesc();
        }
    break;
    case 'tag' :
        Control.tag(parameter[0],tagName);
    break;
    case `filter:${command.slice(7)}`: 
        Control.filterTag(command.slice(7));
        
    break;
    default:
        console.table(commandListData);
}
