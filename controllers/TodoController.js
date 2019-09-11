const Todo = require('../models/Todo')
const TodoViews = require('../views/TodoViews')
const AlertViews = require('../views/AlertViews')

class TodoController {
  static list(type, sortBy) {
    const data = Todo.list(type, sortBy)
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

  static complete(id) {
    const data = Todo.complete(id)
    TodoViews.complete(data)
  }

  static uncomplete(id) {
    const data = Todo.uncomplete(id)
    TodoViews.uncomplete(data)
  }

  static tag(id, tags) {
    Todo.tag(id, tags)
  }
}

module.exports = TodoController
