const TodoModels = require('../Models/TodoModel');
const TodoViews = require('../Views/TodoView');

class Controllers {
    static help () {
        TodoViews.help();
    }
    static list (listBy, type = 'asc') {
        const listTodo = TodoModels.list(listBy, type);
        TodoViews.viewList(listTodo);
    }
    static addTask (task) {
        TodoModels.add(task);
        TodoViews.viewAddedTask(task);
    }
    static tag (id, arrayTag) {
        const addedTagTask = TodoModels.addTag(id, arrayTag);
        TodoViews.viewAddedTag(addedTagTask, arrayTag);
    }
    static filterTask (tag) {
        const tagTask = TodoModels.filter(tag);
        TodoViews.viewFilter(tagTask);
    }
    static findById (id) {
        const todoId = TodoModels.findById(id);
        TodoViews.viewById(todoId);
    }
    static deleteTask (id) {
        const deletedTask = TodoModels.deleteTask(id);
        TodoViews.viewDeleteTask(deletedTask);
    }
    static complete (id) {
        const listTodo = TodoModels.completeTask(id, 'complete');
        TodoViews.viewList(listTodo);
    }
    static uncomplete (id) {
        const listTodo = TodoModels.completeTask(id, 'uncomplete');
        TodoViews.viewList(listTodo);
    }
}

module.exports = Controllers;