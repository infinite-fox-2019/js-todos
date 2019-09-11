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
    static add (task) {
        TodoModels.add(task);
        TodoViews.viewAddedTask(task);
    }
    static tag (id, arrayTag) {
        const addedTagTask = TodoModels.addTag(id, arrayTag);
        TodoViews.viewAddedTag(addedTagTask, arrayTag);
    }
    static filter (tag) {
        const tagTask = TodoModels.filter(tag);
        TodoViews.viewFilter(tagTask);
    }
    static findById (id) {
        const todoId = TodoModels.findById(id);
        TodoViews.viewById(todoId);
    }
    static delete (id) {
        const deletedTask = TodoModels.deleteTask(id);
        TodoViews.viewDeleteTask(deletedTask);
    }
    static complete (id) {
        const listTodo = TodoModels.completeTask(id);
        TodoViews.viewList(listTodo);
    }
    static uncomplete (id) {
        const listTodo = TodoModels.uncompleteTask(id);
        TodoViews.viewList(listTodo);
    }
}

module.exports = Controllers;