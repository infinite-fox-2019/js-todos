const fs = require("fs")


class TodoModel{
  constructor(id,status,todo,created_date,completed_date,tag) {
    this.id = id
    this.status = status
    this.todo = todo
    this.created_date = created_date || Date().slice(0,24)
    this.completed_date = completed_date || null
    this.tag = tag
  }
  static list(list_category,list_sort){
    let data = fs.readFileSync("./data.json")
    let dataArr = JSON.parse(data)
    let listArr = []
    if (list_category == "created"){
      if (list_sort == "desc"){
        for (let i = dataArr.length-1; i>=0; i--){
          listArr.push(new TodoModel(dataArr[i].id,dataArr[i].status,dataArr[i].todo,dataArr[i].created_date,dataArr[i].completed_date,dataArr[i].tag))
        }
        return listArr
      } else {
        for (let i = 0; i<dataArr.length; i++){
          listArr.push(new TodoModel(dataArr[i].id,dataArr[i].status,dataArr[i].todo,dataArr[i].created_date,dataArr[i].completed_date,dataArr[i].tag))
        }
        return listArr
      }
    } else if (list_category == "completed"){
      if (list_sort == "desc"){
        for (let i = dataArr.length-1; i>=0; i--){
          if (dataArr[i].status == "[x]"){
            listArr.push(new TodoModel(dataArr[i].id,dataArr[i].status,dataArr[i].todo,dataArr[i].created_date,dataArr[i].completed_date,dataArr[i].tag))
          }
        }
        return listArr
      } else {
        for (let i = 0 ; i<dataArr.length; i++){
          if (dataArr[i].status == "[x]"){
            listArr.push(new TodoModel(dataArr[i].id,dataArr[i].status,dataArr[i].todo,dataArr[i].created_date,dataArr[i].completed_date,dataArr[i].tag))
          }
        }
        return listArr
      }
    }
    for (let i = 0; i<dataArr.length; i++){
      listArr.push(new TodoModel(dataArr[i].id,dataArr[i].status,dataArr[i].todo,dataArr[i].created_date,dataArr[i].completed_date,dataArr[i].tag))
    }
    return listArr
  }
  static addTask(task){
    let dataArr = this.list()
    let lastId = dataArr[dataArr.length-1].id
    let num = Number(lastId[0])+1
    let newId = num+'.'
    dataArr.push({'id': newId,'status':"[ ]",'todo' : task[0], 'created_date':Date().slice(0,24), 'completed_date': ' ','tag' : []})
    let add = JSON.stringify(dataArr,null,2)
    fs.writeFileSync("./data.json",add)

  }
  static findId(task_id){
    let dataArr = this.list()
    let num = task_id[0]
    let check = true
    let result = ''
    for (let i = 0; i < dataArr.length; i++){
      if (dataArr[i].id[0] == num){
        result += (`${dataArr[i].id[0]}. ${dataArr[i].todo}`)
        return result
      }
    }
    if (check){
      return "Oops wrong id, please type 'node todo.js list' to get the list id"
    }
  }
  static deleteTask(task_id){
    let dataArr = this.list()
    let check = false
    let num = task_id[0]
    let message = ''
    for (let i = 0; i < dataArr.length; i++){
      if (dataArr[i].id[0] == num){
        check = true
        message += (`${dataArr[i].todo}`)
        dataArr.splice(i,1)
      }
    }
    let update = JSON.stringify(dataArr,null,2)
    fs.writeFileSync("./data.json",update)
    if (!check){
      message += "Oops wrong id, please type 'node todo.js list' to get the list id"
    }
    return message;
  }
  static completeTask(task_id){
    let dataArr = this.list()
    let num = task_id[0]
    for (let i = 0; i < dataArr.length; i++){
      if (dataArr[i].id[0] == num){
        dataArr[i].status = '[x]'
        dataArr[i].completed_date = Date().slice(0,24)
      }
    }
    let update = JSON.stringify(dataArr,null,2)
    fs.writeFileSync("./data.json",update)
  }
  static uncompleteTask(task_id){
    let dataArr = this.list()
    let num = task_id[0]
    for (let i = 0; i < dataArr.length; i++){
      if (dataArr[i].id[0] == num){
        dataArr[i].status = '[ ]'
      }
    }
    let update = JSON.stringify(dataArr,null,2)
    fs.writeFileSync("./data.json",update)
  }
  static addTag(condition){
    let dataArr = this.list()
    let targettedId = condition[0]
    let thisTag = condition.slice(1)
    for (let i = 0; i< thisTag.length;i++){
      for(let j = i+1; j<thisTag.length;j++){
        if (thisTag[i]===thisTag[j]){
          return false;
        }
      }
    }
    let message = ''
    for (let i = 0; i<dataArr.length;i++){
      if (dataArr[i].id[0] == targettedId){
        for (let j = 0; j<thisTag.length;j++){
          dataArr[i].tag.push(thisTag[j])
        }
        message += dataArr[i].todo
      }
    }
    let update = JSON.stringify(dataArr,null,2)
    fs.writeFileSync("./data.json",update)
    return {message,thisTag}
  }
  static filter(data){
    let dataArr = this.list()
    let filteredData = []
    for (let i = 0; i< dataArr.length;i++){
      for (let j = 0; j<dataArr[i].tag.length;j++){
        if (data == dataArr[i].tag[j]){
          filteredData.push(dataArr[i])
        }
      }
    }
    return filteredData
  }
}



module.exports = TodoModel;