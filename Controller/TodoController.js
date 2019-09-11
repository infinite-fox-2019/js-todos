const Todo = require('../Model/Todo');
const TodoView = require('../View/TodoView');

class TodoController {
    static getList() {
        let todos = Todo.getList();
        TodoView.showList(todos);
    }

    static add(task) {
        let addedTodo = Todo.add(task);
        TodoView.showAddMessage(addedTodo);
    }

    static getById(id) {
        let theTodo = Todo.getById(id);
        TodoView.showTodo(theTodo);
    }

    static deleteById(id) {
        let deletedTodo = Todo.deleteById(id);
        TodoView.showDeleteMessage(deletedTodo);
    }

    static completeById(id, isComplete) {
        let todos = Todo.completeById(id, isComplete);
        TodoView.showList(todos);
    }

    static getListSort(attribute, order) {
        let todos = Todo.getListSort(attribute, order);
        TodoView.showList(todos);
    }

    static tagById(id, tags) {
        let theTodo = Todo.tagById(id, tags);
        TodoView.showTagMessage(theTodo);
    }

    static getListByTag(tag) {
        let todos = Todo.getListByTag(tag);
        TodoView.showFilterDisplay(todos);
    }
}

module.exports = TodoController;