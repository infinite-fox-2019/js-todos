const fs = require('fs')

class Todo {
  constructor(id, todo, isComplete, completed_date, tags, created_date) {
    this.id = id
    this.todo = todo
    this.isComplete = isComplete || false
    this.completed_date = completed_date || null
    this.tags = tags || []
    this.created_date = created_date || new Date()
  }

  static findAll() {
    return JSON.parse(fs.readFileSync('./data.json')).map(data => {
      const { id, todo, isComplete, completed_date, tags, created_date } = data
      return new Todo(id, todo, isComplete, completed_date, tags, created_date)
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
    } else if (type == 'completed') {
      const todoComplete = []

      data.forEach(d => d.isComplete ? todoComplete.push(d) : null)

      if (sortBy == 'desc') {
        return todoComplete.sort((a, b) => a.completed_date < b.completed_date)
      } else {
        return todoComplete.sort((a, b) => b.completed_date < a.completed_date)
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
    if (!newData.length) return { isFound: false, id }
    return newData
  }

  static delete(id) {
    const newData = this.findAll().filter(d => d.id != id)
    this.save(newData)
  }

  static complete(id) {
    const data = this.findAll()

    data.forEach(d => {
      if (d.id == id) {
        d.isComplete = true
        d.completed_date = new Date()
      } 
    })

    this.save(data)
    return data
  }

  static uncomplete(id) {
    const data = this.findAll()

    data.forEach(d => {
      if (d.id == id) {
        d.isComplete = false
      } 
    })

    this.save(data)
    return data
  }

  static tag(id, tags) {
    const data = this.findAll()
    let todo = ''

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        todo = data[i]
        for (let j = 0; j < tags.length; j++) {
          data[i].tags.push(tags[j])
        }
      }
    }

    this.save(data)
    return { todo, tags }
  }

  static filter(query) {
    const data = this.findAll()
    const result = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].tags) {
        for (let j = 0; j < data[i].tags.length; j++) {
          if (data[i].tags[j] == query) result.push(data[i])
        }
      }
    }

    return result 
  }

  static save(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
  }
}

module.exports = Todo
