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
    TodoViews.list(data)
  }

  static findById(id) {
    const data = Todo.findById(id)
    // TodoViews.findById(data)
    TodoViews.list(data)
  }

  static delete(id) {
    Todo.delete(id)
    AlertViews.successMessageDelete(id)
    TodoViews.list(data)
  }

  static complete(id) {
    const data = Todo.complete(id)
    // TodoViews.complete(data)
    TodoViews.list(data)
  }

  static uncomplete(id) {
    const data = Todo.uncomplete(id)
    // TodoViews.uncomplete(data)
    TodoViews.list(data)
  }

  static tag(id, tags) {
    const data = Todo.tag(id, tags)
    AlertViews.successMessageAddTags(data)
    // TodoViews.list(data)
  }

  static filter(query) {
    const data = Todo.filter(query)
    TodoViews.filter(data)
  }
}

module.exports = TodoController
