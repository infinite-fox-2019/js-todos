const TodoModel = require('../model/todoModel')
const TodoView = require('../view/todoView')
const View = require('../view/viewMessage')

class Controller{

    static getData(){
        const data = TodoModel.getTodo()
        TodoView.viewTodo(data)
    }

    static addData(todo, tags){
        TodoModel.addData(todo, tags)
        View.viewMessage('Success add task')
    }

    static deleteData(id){
        const task = TodoModel.deleteData(id)
        TodoModel.deleteData(id)
        View.viewMessage(`deleted ${task.todo} , id : ${id} from your to do list`)
    }

    static viewById(id){
        let object = TodoModel.getDataById(id)
        TodoView.viewById(object)
    }

    static completeTask(id){
        const newData = TodoModel.completeDataById(id).data
        const flag = TodoModel.completeDataById(id).flag
        if(flag){
            TodoModel.completeDataById(id)
            View.viewMessage(`complete task id : ${id}`)
            TodoView.viewTodo(newData)
        }else{
            View.viewMessage(`id tidak ditemukan`)
        }
    }

    static uncompleteTask(id){
        const newData = TodoModel.uncompleteDataById(id).data
        const flag = TodoModel.uncompleteDataById(id).flag
        if(flag){
            TodoModel.uncompleteDataById(id)
            View.viewMessage(`uncomplete task id : ${id}`)
            TodoView.viewTodo(newData)
        }else{
            View.viewMessage(`id tidak ditemukan`)
        }
    }

    static listCreated(arg){
        const data = TodoModel.getSortedData(arg)
        TodoView.viewTodo(data)
    }

    static listCompleted(arg){
        const data = TodoModel.getCompletedData(arg)
        TodoView.viewCompletedTodo(data)
    }

    static addTag(id , tags){
        const data = TodoModel.getDataById(id)
        if(!data || !tags){
            View.viewMessage('maaf input tidak sesuai (id tidak ditemukan atau input tag kosong')
            return
        }else{
            TodoModel.addTag(id , tags)
            View.viewMessage(`Tagged task ${data.todo} with tags : ${data.tags}`)
        }
    }

    static filterTag(tag){
        const data = TodoModel.filterTag(tag)
        TodoView.viewTodo(data)
    }
}

module.exports = Controller