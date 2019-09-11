const TodoList = require('../Models/todoList')
const TodoViews = require('../Views/view')

class Controller {
    static findAll() {
        const data = TodoList.list()
        TodoViews.list(data)
    }
    
    static add(task) {
        TodoList.add(task)
        TodoViews.message(task)
    }
    static findById(id) {
        const data = TodoList.findById(id)
        TodoViews.findById(data)
    }
    static delete(id) {
        const tempOne = TodoList.delete(id)
        TodoViews.deleteMessage(tempOne)
    }
    static complete(id){
        TodoList.complete(id)
        TodoViews.completeMessage(id)
    }
    static sortAsc(){
        let data = TodoList.sortAsc()
        TodoViews.sortAsc(data)
    }
    static sortDsc(){
        let data = TodoList.sortDsc()
        TodoViews.sortDsc(data)
    }
    static completeAsc(){
        let data = TodoList.completeAsc()
        TodoViews.list(data)        
    }
    static completeDsc(){
        let data = TodoList.completeDsc()
        TodoViews.list(data)
    }
    static tagAdd(id,name){
        let data = TodoList.tagAdd(id,name)
        TodoViews.list(data)
    }
    static filter(search){
        let data = TodoList.filter(search)
        TodoViews.filter(data)
    }
}
module.exports = Controller