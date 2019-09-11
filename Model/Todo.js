const fs = require('fs');

class Todo {
    constructor(todo) {
        this.id = todo.id;
        this.task = todo.task;
        this.isComplete = todo.isComplete;
        this.createdDate = todo.createdDate;
        this.tags = todo.tags;
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
                tags: todoData[i].tags
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

        let addedTodo = new Todo({
            id: lastId,
            task: task,
            isComplete: false,
            createdDate: new Date(),
            tags: []
        });

        todos.push(addedTodo);
        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));

        return addedTodo;
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
        let deletedTodo;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                deletedTodo = todos.splice(i, 1);
                break;
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));

        return deletedTodo[0];
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

    static getSortedList(order) {
        if(!order) {
            order = 'desc';
        }
        let todos = this.getList();
        let sorted = false;

        while(!sorted) {
            sorted = true;
            for(let i = 0; i < todos.length - 1; i++) {
                let leftMoreThanRight = todos[i].createdDate > todos[i + 1].createdDate;
                if(order === 'desc') {
                    leftMoreThanRight = !leftMoreThanRight;
                }
                if(leftMoreThanRight) {
                    let temp = todos[i];
                    todos[i] = todos[i + 1];
                    todos[i + 1] = temp;
                    sorted = false;
                }
            }
        }

        return todos;
    }

    static getListSort(attribute, order) {
        let sortedTodos = this.getSortedList(order);
        if(attribute === 'completed') {
            for(let i = sortedTodos.length - 1; i >= 0; i--) {
                if(!sortedTodos[i].isComplete) {
                    sortedTodos.splice(i, 1);
                }
            }
        }

        return sortedTodos;
    }

    static tagById(id, newTags) {
        let todos = this.getList();
        let taggedTodo;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                for(let j = 0; j < newTags.length; j++) {
                    if(!todos[i].tags.includes(newTags[j])) {
                        todos[i].tags.push(newTags[j]);
                    }
                }
                taggedTodo = todos[i];
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));

        return taggedTodo;
    }

    static getListByTag(tag) {
        let sortedTodos = this.getSortedList('desc');
        let filteredTodos = [];
        for(let i = 0; i < sortedTodos.length; i++) {
            for(let j = 0; j < sortedTodos[i].tags.length; j++) {
                if(sortedTodos[i].tags[j] === tag) {
                    filteredTodos.push(sortedTodos[i]);
                    break;
                }
            }
        }

        return filteredTodos;
    }
}

module.exports = Todo;