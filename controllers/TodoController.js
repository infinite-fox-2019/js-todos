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
    AlertViews.successMessage(todo)
  }
}

module.exports = TodoController
