const fs = require('fs')
const filePath = './data.json'

class Todo {
  constructor(id, task, status, completedAt = '', createdAt, tag = []) {
    this.id = id
    this.task = task
    this.completed = status
    this.completedAt = completedAt
    this.createdAt = createdAt
    this.tag = tag
  }

  static save(data) {
    return fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
  }

  static read(subCommand, input) {
    const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    const data = []
    rawData.forEach(task => {
      data.push(new Todo(task.id, task.task, task.completed, task.completedAt, task.createdAt, task.tag))
    })

    if (subCommand === undefined) {
      return data
    } else {
      if (subCommand === 'created') {
        if (input === 'asc') {
          return data.sort(function (a, b) {
            if (a.createdAt < b.createdAt) {
              return -1
            } else {
              return 1
            }
          })
        } else if (input === 'desc') {
          return data.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
              return -1
            } else {
              return 1
            }
          })
          return data
        }
      } else if (subCommand === 'completed') {
        const completedData = data.filter(task => task.completed === true)
        if (input === 'asc') {
          completedData.sort(function (a, b) {
            if (a.completedAt < b.completedAt) {
              return -1
            } else {
              return 1
            }
          })
          return completedData
        } else if (input === 'desc') {
          completedData.sort(function (a, b) {
            if (a.completedAt > b.completedAt) {
              return -1
            } else {
              return 1
            }
          })
          return completedData
        } else {
          return completedData
        }
      }
    }
  }

  static create(newTask) {
    const data = this.read()
    let newId = 1
    if (data.length > 0) {
      newId = data[data.length - 1].id + 1
    }
    const newTodo = new Todo(newId, newTask, false, '', new Date())
    data.push(newTodo)
    this.save(data)
    return newTodo
  }

  static findOne(id) {
    const data = this.read()
    const obj = {}
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        obj.found = true
        obj.task = data[i]
      }
    }
    return obj
  }

  static update(command, task, tags) {
    const data = this.read()
    const indexTask = data.findIndex(taskData => taskData.id === task.id)

    if (command === 'complete' || command === 'uncomplete') {
      if (command === 'complete') {
        data[indexTask].completed = true
        data[indexTask].completedAt = new Date()
      } else {
        data[indexTask].completed = false
      }
      this.save(data)
    }

    if (command === 'tag') {
      tags.forEach(newTag => {
        data[indexTask].tag.push(newTag)
      })
      let selected = data[indexTask]
      this.save(data)
      return new Todo(selected.id, selected.task, selected.status, selected.completedAt, selected.createdAt, selected.tag)
    }
  }

  static destroy(task) {
    const data = this.read()
    const indexTask = data.findIndex(taskData => taskData.id === task.id)
    data.splice(indexTask, 1)
    this.save(data)
  }

  static filter(tag) {
    const data = this.read()
    const filtered = []
    data.forEach(task => {
      task.tag.forEach(tagData => {
        if (tagData === tag) filtered.push(new Todo(task.id, task.task, task.status, task.completedAt, task.createdAt, task.tag))
      })
    })
    return filtered
  }
}

module.exports = Todo