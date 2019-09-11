const Todo = require('../models/Todo')
const TodoViews = require('../views/TodoViews')
const AlertViews = require('../views/AlertViews')

class TodoController {
  static list() {
    const data = Todo.list()
    TodoViews.list(data)
  }

  static add(todo) {
    Todo.add(todo)
    AlertViews.successMessageAdd(todo)
  }

  static findById(id) {
    const data = Todo.findById(id)
    TodoViews.findById(data)
  }

  static delete(id) {
    Todo.delete(id)
    AlertViews.successMessageDelete(id)
  }
}

module.exports = TodoController
