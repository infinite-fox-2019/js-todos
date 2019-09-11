const Task = require('../Models/Task')
const View = require('../Views/view')

class Controller {

    static help () {
        View.help()
    }

    static list() {
        let data = Task.list()
        View.list(data)
    }

    static add(task) {
        const newTask = Task.add(task)
        View.showSuccess(newTask)
    }

    static findById(id) {
        let taskId =  Task.findById(id)
        View.showTaskId(taskId)
    }

    static delete(id){
        let taskById = Task.delete(id)
        View.showDeleted(taskById)
    }
    static complete(){
        let data = Task.list()
        View.list(data)
    }

}

module.exports = Controller