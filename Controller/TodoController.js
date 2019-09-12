const Todo = require('../Model/Todo')
const TodoView = require('../View/TodoView')

class TodoController {
    static list() {
        const data = Todo.findAll()
        TodoView.displayList(data)
    }

    static add(todo) {
        const data = Todo.addData(todo)
        TodoView.displayListAdded(data)
    }

    static findById(id) {
        const data = Todo.findData(id)
        TodoView.displayFindedById(data)
    }

    static delete(id) {
        const data = Todo.deleteData(id)
        TodoView.displayDeleted(data)
    }

    static complete(id) {
        const data = Todo.complete(id)
        TodoView.displayList(data)
    }

    static uncomplete(id) {
        const data = Todo.uncomplete(id)
        TodoView.displayList(data)
    }

    static createdAsc() {
        const data = Todo.created_asc()
        TodoView.displayList(data)
    }

    static createdDesc() {
        const data = Todo.created_desc()
        TodoView.displayList(data)
    }
}


module.exports = TodoController