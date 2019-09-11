const ViewToDo = require('../views/viewToDo')
const ToDo = require('../models/modelToDo')

class TodoController {
    static help() {
        ViewToDo.showHelp()
    }

    static findAll(){
        let allData = ToDo.data()
        ViewToDo.showList(allData)
    }

    static add(task, tag){
        const newTask = ToDo.add(task, tag)
        ViewToDo.showSuccess(`Added ${newTask.todo} to your TODO list...`)  
    }

    static findById(num){
        const find = ToDo.findById(num)
        if(find === false){
            ViewToDo.showInvalid()
        }else{
            ViewToDo.showId(`yang harus kamu lakukan adalah ${find}`)  
        }
    }

    static delete(num){
        const hapus = ToDo.delete(num-1)
        ViewToDo.showDeleted(`${hapus} berhasil di hapus dari todo`)
    }

    static complete(num){
        const complete = ToDo.complete(num-1)
        ViewToDo.showCompleted(`${complete} berhasil dilaksanakan`)
    }

    static unComplete(num){
        const unComplete = ToDo.unComplete(num-1)
        ViewToDo.showUnCompleted(`${unComplete} belum berhasil dilaksanakan`)
    }
    
    static tag(input, inputTag){
        const tag = ToDo.tag(input, inputTag)
        ViewToDo.showTag(`task ${input} telah di tag dengan ${inputTag}`)
    }

    static listCompleted(){
        let listCompData = ToDo.data()
        ViewToDo.showListComp(listCompData)
    }

    static listCreated(){
        let listCrtData = ToDo.data()
        ViewToDo.showListCrt(listCrtData)
    }

    // static test() {
        // ViewToDo.showList([{id: 1, todo:'bergembira'}])
    // }

}

module.exports = TodoController;