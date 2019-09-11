const fs = require('fs')

class Todo {
  constructor(id, todo, isComplete, created_date) {
    this.id = id
    this.todo = todo
    this.isComplete = isComplete || false
    this.created_date = created_date || Date()
  }

  static findAll() {
    return JSON.parse(fs.readFileSync('./data.json')).map(data => {
      const { id, todo, isComplete, created_date } = data
      return new Todo(id, todo, isComplete, created_date)
    })
  }

  static list(type = '', sortBy = 'asc') {
    const data = this.findAll()

    if (type == 'created') {
      if (sortBy == 'desc') {
        return data.sort((a, b) => a.created_date < b.created_date)
      } else {
        return data.sort((a, b) => b.created_date < a.created_date)
      }
    } else if(type == 'completed') {
      const todoComplete = []

      data.forEach(d => d.isComplete ? todoComplete.push(d) : null)

      if (sortBy == 'desc') {
        return todoComplete.sort((a, b) => a.created_date < b.created_date)
      } else {
        return todoComplete.sort((a, b) => b.created_date < a.created_date)
      }

      return todoComplete
    }

    return data
  }

  static add(todo) {
    const data = this.findAll()
    let id = 1
    
    if (data.length) id = data[data.length - 1].id + 1

    data.push(new Todo(id, todo))
    this.save(data)
  }

  static findById(id) {
    const newData = this.findAll().filter(d => d.id == id)
    if (!filtered.length) return { isFound: false, id }
    return newData
  }

  static delete(id) {
    const newData = this.findAll().filter(d => d.id != id)
    this.save(newData)
  }

  static complete(id) {
    const data = this.findAll()
    const newData = []

    data.forEach(d => {
      if (d.id == id) {
        d.isComplete = true
        newData.push(d)
      } else {
        newData.push(d)
      }
    })

    this.save(data)
    return data
  }

  static uncomplete(id) {
    const data = this.findAll()
    const newData = []

    data.forEach(d => {
      if (d.id == id) {
        d.isComplete = false
        newData.push(d)
      } else {
        newData.push(d)
      }
    })

    this.save(data)
    return data
  }

  static save(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
  }
}

module.exports = Todo
