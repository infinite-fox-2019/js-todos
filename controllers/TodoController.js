const Todo = require('../models/Todo')
const Display = require('../views/Display')

class TodoController {
  static list(subCommand, input) {
    if (subCommand === undefined) {
      const data = Todo.read()
      return Display.listMessage(data)
    } else if (subCommand === 'created') {
      if (input === undefined || input !== 'asc' && input !== 'desc') return Display.errorInput()
      else {
        const data = Todo.read(subCommand, input)
        return Display.listMessage(data)
      }
    } else if (subCommand === 'completed') {
      let data = []
      if (input === undefined) data = Todo.read(subCommand)
      else data = Todo.read(subCommand, input)
      return Display.listMessage(data)
    } else {
      return Display.errorInput()
    }
  }

  static add(input) {
    if (input === undefined) return Display.errorInput()
    else {
      const newTodo = Todo.create(input)
      return Display.successMessage(`Added ${newTodo.task} to your TODO list...`)
    }
  }

  static findById(input) {
    const foundTask = Todo.findOne(Number(input))
    if (foundTask.found === true) {
      Display.successMessage(`${foundTask.task.id}. ${foundTask.task.task}`)
    } else {
      Display.errorMessage(`Task with id of ${input} is not found`)
    }
  }

  static delete(input) {
    const foundTask = Todo.findOne(Number(input))
    if (foundTask.found === true) {
      Todo.destroy(foundTask.task)
      return Display.successMessage(`Deleted ${foundTask.task.task} from your TODO list...`)
    } else {
      return Display.errorMessage(`Task with id of ${input} is not found`)
    }
  }

  static completeUncomplete(command, id) {
    const foundTask = Todo.findOne(Number(id))
    if (foundTask.found === true) {
      const data = Todo.update(command, foundTask.task)
      return Display.listMessage(data)
    } else {
      return Display.errorMessage(`Task with id of ${input} is not found`)
    }
  }

  static tag(id, tags) {
    const foundTask = Todo.findOne(Number(id))
    if (foundTask.found === true) {
      const updated = Todo.update('tag', foundTask.task, tags)
      return Display.successMessage(`Tagged task ${updated.task} with tag: ${tags}`)
    } else {
      return Display.errorMessage(`Task with id of ${id} is not found`)
    }
  }

  static filter(tag) {
    const filteredData = Todo.filter(tag)
    return Display.filterMsg(tag, filteredData)

  }
}

module.exports = TodoController