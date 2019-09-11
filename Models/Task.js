fs = require('fs')

class Task {
  constructor(id, task, completed, date){
    this.id = id
    this.task = task
    this.completed = completed
    this.date = date || new Date().getTime()
  }

  // save and write data to json
  static save(data){
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
  }

  // return list
  static list() {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    let taskList = []
    for (let i = 0; i < data.length; i++) {
      taskList.push(new Task(data[i].id, data[i].task, data[i].completed, data[i].date)
      )
    }
    this.save(taskList)
    return taskList
  }

  // add new task -> start as uncompleted first
  static add(parameters) {
    const data = this.list()
    let taskList = []
    for (let i = 0; i < data.length; i++) {
      taskList.push(data[i])
    }
    for (let i = 0; i < parameters.length; i++) {
      if (taskList.length > 0) {
        let getLastId = taskList[taskList.length-1].id
        taskList.push((new Task(
          getLastId + 1,
          parameters[i],
          false
        )))
      }
    }
    this.save(taskList)
    return taskList
  }

  // find task by id
  static findById(parameters) {
    const data = this.list()
    let taskList = []
    for (let i = 0; i < data.length; i++) {
      taskList.push(data[i])
    }
    let getTaskFromId = []
    for (let i = 0; i < taskList.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (taskList[i].id == parameters[j]) {
          getTaskFromId.push(
            {
              id: taskList[i].id,
              task: taskList[i].task,
              completed: taskList[i].completed,
              date: taskList[i].date
            }
          )
        }
      }
    }
    return getTaskFromId
  }

  // delete task
  static delete(parameters) {
    const data = this.list()
    let taskList = []
    for (let i = 0; i < data.length; i++) {
      taskList.push(data[i])
    }
    let deletedList = []
    for (let i = 0; i < taskList.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (taskList[i].id == parameters[j]) {
          deletedList.push(
            {
              id: taskList[i].id,
              task: taskList[i].task,
              completed: taskList[i].completed,
              date: taskList[i].date
            }
          )
          taskList.splice(i,1)
        }
      }
    }
    this.save(taskList)
    return deletedList
  }

  // mark as completed
  static complete(parameters) {
    const data = this.list()
    let taskListUpdate = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (parameters[j] == data[i].id) {
          taskListUpdate.push((new Task(
            data[i].id,
            data[i].task,
            true,
            new Date().getTime()
          )))
        }
        else {
          taskListUpdate.push(data[i])
        }
      }
    }
    this.save(taskListUpdate)
  }

  // remove the completed mark
  static uncomplete(parameters) {
    const data = this.list()
    let taskListUpdate = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (parameters[j] == data[i].id) {
          taskListUpdate.push((new Task(
            data[i].id,
            data[i].task,
            false
          )))
        }
        else {
          taskListUpdate.push(data[i])
        }
      }
    }
    this.save(taskListUpdate)
  }

  // sort list by created
  static listSortByCreated(parameter) {
    const data = this.list()
    if (parameter === undefined || parameter === 'asc') {
      for (let i = 0; i < data.length; i++) {
        for (let j = i+1; j < data.length; j++) {
          if (data[j].date < data[i].date) {
            [data[i], data[j]] = [data[j], data[i]];
          }
        }
      }
    }
    else if (parameter === 'desc') {
      for (let i = 0; i < data.length; i++) {
        for (let j = i+1; j < data.length; j++) {
          if (data[j].date > data[i].date) {
            [data[i], data[j]] = [data[j], data[i]];
          }
        }
      }
    }
    return data
  }

  // sort list by completed
  static listSortByCompleted(parameter) {
    const data = this.list()
    if (parameter === undefined || parameter === 'asc') {
      for (let i = 0; i < data.length; i++) {
        for (let j = i+1; j < data.length; j++) {
          if (data[j].completed === true) {
            [data[i], data[j]] = [data[j], data[i]];
          }
        }
      }
    }
    else if (parameter === 'desc') {
      for (let i = 0; i < data.length; i++) {
        for (let j = i+1; j < data.length; j++) {
          if (data[j].completed === false) {
            [data[i], data[j]] = [data[j], data[i]];
          }
        }
      }
    }
    return data
  }
}

module.exports = Task 