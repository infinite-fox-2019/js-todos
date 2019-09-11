const Todo = require('../Model/Todo');
const TodoView = require('../View/TodoView');

class TodoController {
    static getList() {
        let todos = Todo.getList();
        TodoView.showList(todos);
    }

    static add(task) {
        Todo.add(task);
        TodoView.showAddMessage(task);
    }

    static getById(id) {
        let theTodo = Todo.getById(id);
        TodoView.showTodo(theTodo);
    }

    static deleteById(id) {
        let theTask = Todo.deleteById(id);
        TodoView.showDeleteMessage(theTask);
    }

    static completeById(id, isComplete) {
        let todos = Todo.completeById(id, isComplete);
        TodoView.showList(todos);
    }

    static uncompleteTodoById(id) {
        let todos = Todo.uncompleteTodoById(id);
        TodoView.showList(todos);
    }

    static getListSortByCreated() {
        let todos = Todo.getListSortByCreated();
        TodoView.showList(todos);
    }
}

module.exports = TodoController;