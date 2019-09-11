const fs = require('fs');

class Todo {
    constructor (id, task) {
        this.id = id;
        this.task = task;
    }

    static list () {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        const arrayData = [];
        for (let i = 0; i < data.length; i++) {
            arrayData.push(new Todo(data[i].id, data[i].task));            
        }
        return arrayData;
    }
    static add (task) {
        const listTodo = this.list();
        listTodo.push(new Todo(listTodo.length+1, task));
        fs.writeFileSync('./data.json', JSON.stringify(listTodo, null, 2))
    }
}

module.exports = Todo;