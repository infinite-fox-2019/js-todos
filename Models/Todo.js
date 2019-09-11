const config = require('../data.json')
var fs = require('fs')

class Todo {
  constructor(id, task, complete){
    this.id = id
    this.task = task
    this.complete = complete
    this.createdAt = new Date()
    this.tags = []
  }

  static listAll(){
    let todoList = []
    let data = JSON.parse(fs.readFileSync('./data.json'))
    for(let i=0 ; i<data.length ; i++){
      todoList.push(new Todo(data[i].id, data[i].task, data[i].complete))
    }
    return todoList
  }

  static listCompleted(){
    let data = this.listAll()
    let completed = []
    for(i=0 ; i<data.length ; i++){
      if(data[i].complete == true){
        completed.push(data[i])
      }
    }
    return completed
  }

  static add(task){
    let data = this.listAll()
    let obj = {}
    obj.id = data.length+1
    obj.task = task
    obj.complete = false
    obj.createdAt = new Date()
    obj.tags = []
    data.push(obj)
    let json = JSON.stringify(data)
    this.save(data)
  }

  static find(id){
    let data = this.listAll()
    for(let i=0 ; i<data.length ; i++){
      if(data[i].id == id){
        return data[i]
      }
    }
  }

  static delete(id){
    let data = this.listAll()
    for(let i=0 ; i<data.length ; i++){
      if(data[i].id == id){
        let splicedData = data[i]
        data.splice(id-1, id)
        this.save(data)
        return splicedData
      }
    }
  }

  static complete(id){
    let data = this.listAll()
    for(let i=0 ; i<data.length ; i++){
      if(data[i].id === id){
        data[i].complete = true
      }
    }
    this.save(data)
    return data
  }

  static uncomplete(id){
    let data = this.listAll()
    for(let i=0 ; i<data.length ; i++){
      if(data[i].id === id){
        data[i].complete = false
      }
    }
    this.save(data)
    return data
  }

  static created(order){
    if(order == 'asc'){
      for(let i=0 ; i<this.listAll().length ; i++){
        for(let j=0 ; j<this.listAll().length-1 ; j++){
          if(this.listAll()[j].createdAt > this.listAll()[j+1].createdAt){
            let temp = this.listAll()[j]
            this.listAll()[j] = this.listAll()[j+1]
            this.listAll()[j+1] = temp
          }
        }
      }
      return this.listAll()
    } else if(order == 'desc'){
      for(let i=0 ; i<this.listAll().length ; i++){
        for(let j=0 ; j<this.listAll().length-1 ; j++){
          if(this.listAll()[j].createdAt < this.listAll()[j+1].createdAt){
            let temp = this.listAll()[j]
            this.listAll()[j] = this.listAll()[j+1]
            this.listAll()[j+1] = temp
          }
        }
      }
      return this.listAll()
    }
  }

  static listCompleted(){
    let data = this.listAll()
    let completeArr = []
    for(let i=0 ; i<data.length ; i++){
      if(data[i].complete == true){
        completeArr.push(data[i])
      }
    }
    return completeArr
  }

  static putTag(id, tag){
    let data = JSON.parse(fs.readFileSync('./data.json'))
    for(let i=0 ; i<data.length ; i++){
      if(data[i].id === id){
        for(let j=0 ; j<tag.length ; j++){
          data[i].tags.push(tag[j])
        }
        this.save(data)
        return [tag, data[i]]
      }
    }
  }

  static filter(tag){
    let data = JSON.parse(fs.readFileSync('./data.json'))
    let filteredArr = []
    for(let i=0 ; i<data.length ; i++){
      if(data[i].tags.includes(tag) === true){
        filteredArr.push(data[i])
      }
    }
    return filteredArr
  }


  static save(data){
    fs.writeFileSync(`./data.json`, JSON.stringify(data,null,2), 'utf8')
  }
}

module.exports = Todo




















