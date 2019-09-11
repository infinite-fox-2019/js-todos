const TodoModel = require('../Model/TodoModel');
const TodoView = require('../View/TodoView');

class TodoController {
    static getList() {
        let todos = TodoModel.getList();
        TodoView.showList(todos);
    }

    static addTodo(task) {
        TodoModel.addTodo(task);
        TodoView.showAddMessage(task);
    }
}

module.exports = TodoController;