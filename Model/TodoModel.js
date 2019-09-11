const fs = require('fs');

class TodoModel {
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
}

module.exports = TodoModel;