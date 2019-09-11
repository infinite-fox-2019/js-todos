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
        TodoView.showDeleteMessage(theTask);
    }

    static completeTodoById(id) {
        let todos = Todo.completeTodoById(id);
        TodoView.showList(todos);
    }

    static uncompleteTodoById(id) {
        let todos = Todo.uncompleteTodoById(id);
        TodoView.showList(todos);
    }
}

module.exports = TodoController;