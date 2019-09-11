const fs = require('fs');

class Todo {
    constructor(todo) {
        this.id = todo.id;
        this.task = todo.task;
        this.isComplete = todo.isComplete;
        this.createdDate = todo.createdDate;
        this.tag = todo.tag;
    }

    static getList() {
        let todoData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let todos = [];
        for(let i = 0; i < todoData.length; i++) {
            todos.push(new Todo({
                id: todoData[i].id,
                task: todoData[i].task,
                isComplete: todoData[i].isComplete,
                createdDate: todoData[i].createdDate,
                tag: todoData[i].tag
            }));
        }
        return todos;
    }

    static add(task) {
        let todos = this.getList()
        let lastId = 1
        if(todos.length !== 0){
            lastId = todos[todos.length - 1].id + 1;
        }

        todos.push(new Todo({
            id: lastId,
            task: task,
            isComplete: false,
            createdDate: new Date(),
            tag: []
        }));
        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));
    }

    static getById(id) {
        let todos = this.getList();
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                return todos[i];
            }
        }

        return undefined;
    }

    static deleteById(id) {
        let todos = this.getList();
        let theTask;
        let theIndex = -1;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                theTask = todos[i].task;
                theIndex = i;
            }
        }

        if(theIndex >= 0) {
            todos.splice(theIndex, 1);
            fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));
        }
        return theTask;
    }

    static completeById(id, isComplete) {
        let todos = this.getList();
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                todos[i].isComplete = isComplete;
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));

        return this.getList();
    }

    // static uncompleteTodoById(id) {
    //     let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    //     for(let i = 0; i < todos.length; i++) {
    //         if(todos[i].id === id) {
    //             todos[i].complete = false;
    //         }
    //     }

    //     fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));

    //     return this.getList();
    // }

    static getListSortByCreated() {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let result = [];
        let sorted = false;

        for(let i = 0; i < todos.length; i++) {
            
        }
        return todos;
    }
}

module.exports = Todo;