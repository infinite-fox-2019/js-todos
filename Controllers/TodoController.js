const TodoModels = require('../Models/TodoModel');
const TodoViews = require('../Views/TodoView');

class Controllers {
    static list () {
        const listTodo = TodoModels.list();
        TodoViews.viewList(listTodo);
    }
    static add (task) {
        TodoModels.add(task);
    }
}

module.exports = Controllers;