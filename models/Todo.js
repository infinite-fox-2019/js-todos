const fs = require('fs')

class Todo {
  constructor(id, todo, isComplete, created_at) {
    this.id = id
    this.todo = todo
    this.isComplete = isComplete || false
    this.created_at = created_at || new Date()
  }

  static findAll() {
    return JSON.parse(fs.readFileSync('./data.json')).map(data => {
      const { id, todo, isComplete, created_at } = data
      return new Todo(id, todo, isComplete, created_at)
    })
  }

  static list() {
    return this.findAll()
  }

  static add(todo) {
    const data = this.findAll()
    let id = 1
    
    if (data.length) id = data[data.length - 1].id + 1

    data.push(new Todo(id, todo))
    this.save(data)
  }

  static findById(id) {
    const data = this.findAll()

    // return data
    return data.filter(d => d.id == id)
  }

  static save(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
  }
}

module.exports = Todo
