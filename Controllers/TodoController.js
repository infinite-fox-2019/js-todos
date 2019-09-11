const Todo = require('../Models/TodoModel')
const TodoView = require('../Views/TodoView')

class TodoController {
    static viewList (){
        let listView = TodoView
        return listView.viewAll(Todo.findAll())
    }
    static add (task){
        let todoModel = Todo
        return todoModel.add(task)
    }
    static showFilter(num){
        let listModel = Todo
        let listFiltered = listModel.filter(num)
        return TodoView.filterShow(listFiltered)
    }
    static delete (task){
        let todoModel = Todo
        return todoModel.delete(task)
    }
    static complete (num){
        let todoModel = Todo
        return todoModel.complete(num)
    }
    static uncomplete(num){
        let todoModel = Todo
        return todoModel.uncomplete(num)
    }
    static userSort(str){
        let todoView = TodoView
        let todoSortir = Todo.sortBy(str)
        return todoView.sortShow(todoSortir)
    }
    static showCompleted(){
        let todoModel = Todo
        console.table(todoModel.showCompleted())
    }
    static addTag(arr,str){
        let todoModel = Todo
        let todoView = TodoView
        todoModel.addTag(arr,str)
        todoView.messageAddingTag(arr,str,Todo.findAll())
    }
    static filterTag(input) {
        let todoModel = Todo
        let todoView = TodoView
        todoView.messageFilterTag(todoModel.filterTag(input))
    }
}

module.exports = TodoController