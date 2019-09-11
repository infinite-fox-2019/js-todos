const Todo = require('../Model/Todo');
const TodoView = require('../View/TodoView');

class TodoController {
    static getList() {
        let todos = Todo.getList();
        TodoView.showList(todos);
    }

    static addTodo(task) {
        Todo.addTodo(task);
        TodoView.showAddMessage(task);
    }

    static getTodoById(id) {
        let theTodo = Todo.getTodoById(id);
        TodoView.showTodo(theTodo);
    }

    static deleteTodoById(id) {
        let theTask = Todo.deleteTodoById(id);
        console.log(theTask);
        TodoView.showDeleteMessage(theTask);
    }
}

module.exports = TodoController;