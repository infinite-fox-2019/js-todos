const fs = require('fs');

class Todo {
    constructor (id, status, task) {
        this.id = id;
        this.status = status;
        this.task = task;
    }

    static list () {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        const arrayData = [];
        for (let i = 0; i < data.length; i++) {
            arrayData.push(new Todo(data[i].id, data[i].status, data[i].task));            
        }
        return arrayData;
    }
    static add (task) {
        const listTodo = this.list();
        listTodo.push(new Todo(listTodo.length+1, " ", task));
        fs.writeFileSync('./data.json', JSON.stringify(listTodo, null, 2))
    }
    static findById (id) {
        const listTodo = this.list();
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                return listTodo[i];
            }
        }
    }
    static deleteTask (id) {
        const listTodo = this.list();
        const task = {
            id: 0,
            task: ''
        }
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                task.id = listTodo[i].id;
                task.task = listTodo[i].task;
                listTodo.splice(i, 1);
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(listTodo, null, 2))
        return task;
    }
    static completeTask(id) {
        const listTodo = this.list();
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                listTodo[i].status = "x";
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(listTodo, null, 2))
        return listTodo;
    }
    static uncompleteTask(id) {
        const listTodo = this.list();
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                listTodo[i].status = " ";
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(listTodo, null, 2))
        return listTodo;
    }
}

module.exports = Todo;