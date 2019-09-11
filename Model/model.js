const fs = require('fs')

class ToDoModel {
  constructor (id, task, status,completed, createdDate,tag){
    this._id = id
    this.task = task
    this.completed = completed || null 
    this.status = status || false
    this.createdDate = createdDate || Date ()
    this.tag = tag || []
  }

  get id (){
    return this._id
  }

  static parsed (){
    return JSON.parse(fs.readFileSync('./data.json','utf-8'))
  }

  static list (){
    const data = ToDoModel.parsed ()
    let resultList = []
    data.forEach(element => {
      resultList.push(new ToDoModel(element._id, element.task, element.status, element.completed, element.createdDate, element.tag))
    });

    return resultList
  }

  static add(dataStr){
    const data = ToDoModel.parsed()
    let addId = null

    if (data.length == 0){
      addId = 1
    }else {
      addId = data[data.length-1]._id + 1 
    }
    data.push(new ToDoModel(addId, dataStr))

    const success = ToDoModel.save(data)
    if (success == 'success') return success
  }

  static save (data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    return 'success'
  }

  static find (id){
    const data = ToDoModel.parsed()

    const filter = data.filter(function(dataId){return dataId._id == id})
    return filter 
  }

  static delete (id){
    const data = ToDoModel.parsed()
    const filter = data.filter(function(dataId){return dataId._id != id})

    const success = ToDoModel.save(filter)
    if (success == 'success') return success
  }

  static completed (id){
    const data = ToDoModel.parsed()

    data.forEach(element => {if(element._id == id){element.status = true, element.completed = Date()}
    });

    const success = ToDoModel.save(data)
    if (success == 'success') return data
  }

  static uncompleted (id){
    const data = ToDoModel.parsed()

    data.forEach(element => {if(element._id == id){element.status = false}
    });

    const success = ToDoModel.save(data)
    if (success == 'success') return data
  }

  static dataSort (tipe){
    const data = ToDoModel.parsed()
    let dataSort
    if(tipe == 'asc') {dataSort = data.sort((a,b) => new Date(a.createdDate) - new Date(b.createdDate))}
    else {dataSort = data.sort((a,b) => new Date(b.createdDate) - new Date(a.createdDate))}
    return dataSort
  }

  static completedSort (tipe){
    const data = ToDoModel.parsed()
    let dataSort
    if(tipe == 'asc') {dataSort = data.sort((a,b) => new Date(a.completed) - new Date(b.completed))}
    else {dataSort = data.sort((a,b) => new Date(b.completed) - new Date(a.completed))}
    return dataSort
  }

  static tag (id,dataTag){
    const data = ToDoModel.parsed()
   
    data.forEach(element => {if(element._id == id)
                            dataTag.forEach(data => {element.tag.push(data)})})
    
    const success = ToDoModel.save(data)
    if (success == 'success') return success
  }

  static filterTag (dataTag){
    const data = ToDoModel.parsed()
    let result = []
    data.forEach(element =>{ 
                            element.tag.forEach(data =>{if(data.tag == dataTag) result.push(element) })        })
    return result
  }

}

module.exports = ToDoModel