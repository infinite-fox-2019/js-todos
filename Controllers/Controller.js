const Todo = require('../Models/Todo.js')
const TodoView = require('../Views/TodoView.js')

class Controller {

  static listAll(){
    let tasks = Todo.listAll()
    TodoView.list(tasks)
  }

  static add(task){
    let addTask = Todo.add(task)
    TodoView.add(task)
  }

  static find(id){
    let findId = Todo.find(id)
    TodoView.find(findId)
  }

  static delete(id){
    let deleteId = Todo.delete(id)
    TodoView.delete(deleteId)
  }

  static complete(id){
    let completeId = Todo.complete(id)
    TodoView.list(completeId)
  }

  static uncomplete(id){
    let uncompleteId = Todo.uncomplete(id)
    TodoView.list(uncompleteId)
  }

  static created(order){
    let createdList = Todo.created(order)
    TodoView.created(createdList)
  }

  static listCompleted(){
    let tasks = Todo.listCompleted()
    TodoView.listCompleted(tasks)
  }

  static tag(id, tags){
    let task = Todo.putTag(id, tags)
    TodoView.tag(task)
  }

  static filter(tag){
    let task = Todo.filter(tag)
    TodoView.filter(task)
  }
}

module.exports = Controller
