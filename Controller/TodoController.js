const Todo = require('../Models/Todo')
const TodoViews = require('../Views/TodoViews')


class TodoController{
    static tampilTodo(){
        let listData = Todo.listTodo()
        TodoViews.tampilList(listData)
    }

    static tambahTodo(newTask){
        Todo.tambahTodo(newTask)
        let newListTodo = Todo.listTodo()
        TodoViews.tambahTodo(newTask, newListTodo)
    }

    static findById(num){
        let objTask = Todo.findById(num)
        TodoViews.findById(objTask)
    }

    static delete(num){
        let objDeleted = Todo.delete(num)
        TodoViews.delete(objDeleted)
    }

    static complete(num){
        let completed = Todo.complete(num)
        TodoViews.complete(completed)
    }

    static uncomplete(num){
        let uncompleted = Todo.uncomplete(num)
        TodoViews.uncomplete(uncompleted)
    }

    static sortByCreated(type){
        let listSort = Todo.sortByCreated(type)
        TodoViews.sortByCreated(listSort)
    }

    static sortByComplete(type){
        let listSort = Todo.sortByCompleted(type)
        TodoViews.sortByCompleted(listSort)
    }

    static tag(arr){       
        let newList = Todo.addTag(arr)
        TodoViews.addTag(newList)
    }
}

module.exports = TodoController