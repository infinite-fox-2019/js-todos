fs = require('fs')

class Model {
  // return list
  static list() {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskList = []
    for (let i = 0; i < this.data.length; i++) {
      taskList.push(this.data[i])
    }
    return taskList
  }
  // add new task -> start as uncompleted first
  static add(parameters) {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskList = []
    for (let i = 0; i < this.data.length; i++) {
      taskList.push(this.data[i])
    }
    for (let i = 0; i < parameters.length; i++) {
      let getLastId = taskList[taskList.length-1].id
      taskList.push(
        {
          id: getLastId + 1,
          task: parameters[i],
          completed: false
        }
      )
    }
    fs.writeFileSync('./data.json', JSON.stringify(taskList, null, 2))
    return taskList
  }
  // find task by id
  static findById(parameters) {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskList = []
    for (let i = 0; i < this.data.length; i++) {
      taskList.push(this.data[i])
    }
    let getTaskFromId = []
    for (let i = 0; i < taskList.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (taskList[i].id == parameters[j]) {
          getTaskFromId.push(
            {
              id: taskList[i].id,
              task: taskList[i].task,
              completed: taskList[i].completed
            }
          )
        }
      }
    }
    return getTaskFromId
  }
  // delete task
  static delete(parameters) {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskList = []
    for (let i = 0; i < this.data.length; i++) {
      taskList.push(this.data[i])
    }
    let deletedList = []
    for (let i = 0; i < taskList.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (taskList[i].id == parameters[j]) {
          deletedList.push(
            {
              id: taskList[i].id,
              task: taskList[i].task,
              completed: taskList[i].completed
            }
          )
          taskList.splice(i,1)
        }
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(taskList, null, 2))
    return deletedList
  }
  // mark as completed
  static complete(parameters) {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskListUpdate = []
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (parameters[j] == this.data[i].id) {
          taskListUpdate.push(
            {
              id: this.data[i].id,
              task: this.data[i].task,
              completed: true
            }
          )
        }
        else {
          taskListUpdate.push(this.data[i])
        }
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(taskListUpdate, null, 2))
  }
  // remove the completed mark
  static uncomplete(parameters) {
    this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskListUpdate = []
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (parameters[j] == this.data[i].id) {
          taskListUpdate.push(
            {
              id: this.data[i].id,
              task: this.data[i].task,
              completed: false
            }
          )
        }
        else {
          taskListUpdate.push(this.data[i])
        }
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(taskListUpdate, null, 2))
  }
}

module.exports = Model 