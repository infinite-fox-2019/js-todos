const View = require("../Views/View")
const TodoModels = require("../Models/TodoModel")

class TodoController {
  static help() {
    View.showHelp()
  }
  static list(list_category,list_sort) {
    let list = TodoModels.list(list_category,list_sort)
    View.showList(list)
  }
  static add(task_content) {
    TodoModels.addTask(task_content)
    View.addReport(task_content)
  }
  static findId(task_id){
    let targettedTask = TodoModels.findId(task_id)
    View.showTask(targettedTask)
  }
  static deleteTask(task_id){
    let taskDeleted = TodoModels.deleteTask(task_id)
    View.deleteReport(taskDeleted)
  }
  static completeTask(task_id){
    TodoModels.completeTask(task_id)
    this.list()
  }
  static uncompleteTask(task_id){
    TodoModels.uncompleteTask(task_id)
    this.list()
  }
  static addTag(condition){
    let addedTag = TodoModels.addTag(condition)
    View.tagReport(addedTag)
  }
  static filter(data){
    let filtered = TodoModels.filter(data)
    View.showList(filtered)
  }
}

module.exports = TodoController