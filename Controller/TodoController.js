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
}




module.exports = TodoController