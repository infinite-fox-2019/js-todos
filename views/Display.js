class Display {
  static helpMessage() {
    console.log(`=======COMMAND LIST======`)
    console.log(`>>>>> node todo.js`)
    console.log(`>>>>> node todo.js help`)
    console.log(`>>>>> node todo.js list`)
    console.log(`>>>>> node todo.js list:created asc|desc`)
    console.log(`>>>>> node todo.js list:completed // asc|desc`)
    console.log(`>>>>> node todo.js add <task_content>`)
    console.log(`>>>>> node todo.js findById <task_id>`)
    console.log(`>>>>> node todo.js delete <task_id>`)
    console.log(`>>>>> node todo.js complete <task_id>`)
    console.log(`>>>>> node todo.js uncomplete <task_id>`)
  }

  static listMessage(data) {
    console.log(`=======This is All your Task======\n`)
    data.forEach(task => {
      console.log(`${task.id}. [${task.completed === true ? 'X' : ' '}] ${task.task}`)
    })
  }

  static successMessage(msg) {
    console.log(msg)
  }

  static errorMessage(msg) {
    console.log(msg)
  }
  static errorInput() {
    console.log(`Your input is invalid >>>>>> \n`)
    this.helpMessage()
  }

  static filterMsg(tag, data) {
    console.log(`This is all your task with ${tag} tag >>>>>>>\n`) 
    data.forEach(task => {
      console.log(`${task.id}. ${task.task} [${task.tag}]`)
    })
  }
}

module.exports = Display