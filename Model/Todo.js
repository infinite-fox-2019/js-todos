const fs = require('fs');

class Todo {
    static getList() {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        return todos;
    }

    static addTodo(task) {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let lastId = todos[todos.length - 1].id + 1;
        let newTodo = {
            id: lastId,
            task: task
        }

        todos.push(newTodo);
        fs.writeFileSync('./data.json', JSON.stringify(todos, 0, 2));
    }

    static getTodoById(id) {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === id) {
                return todos[i];
            }
        }

        return undefined;
    }
}

module.exports = Todo;