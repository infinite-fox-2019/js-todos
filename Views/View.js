const Model = require('../Models/Model')

class View {
  static help () {
    console.log(`Available Commands`)
    console.log(`==================`)
    console.log(`$ node todo.js`)
    console.log(`$ node todo.js help`)
    console.log(`$ node todo.js list`)
    console.log(`$ node todo.js add <task_content>`)
    console.log(`$ node todo.js findById <task_id>`)
    console.log(`$ node todo.js delete <task_id>`)
    console.log(`$ node todo.js complete <task_id>`)
    console.log(`$ node todo.js uncomplete <task_id>`)
  }
  static list() {
    console.log("To-Do List");
    console.log(`========== `)
    let list = Model.list()
    for (let i = 0; i < list.length; i++) {
      let str = ''
      str += list[i].id + '. '
      if (list[i].completed) {
        str += '[x]'
      }
      else {
        str += '[ ]'
      }
      str += ` ${list[i].task}`
      console.log (str)
      str = ''
    }
  }
  static add(parameters) {
    for (let i = 0; i < parameters.length; i++) {
      console.log(`"${parameters[i]}" is added to your To-Do List`);
    }
  }
  static findById(parameters) {
    for (let i = 0; i < parameters.length; i++) {
      console.log(`${parameters[i].id}. ${parameters[i].task}`);
    }
  }
  static delete(parameters) {
    for (let i = 0; i < parameters.length; i++) {
      console.log(`"${parameters[i].task}" is deleted from your To-Do List`);
    }
  }
}

module.exports = View