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
        View.showAdd(newTask)
    }

    static findById(id) {
        let taskId =  Task.findById(id)
        View.showTaskId(taskId)
    }

    static delete(id){
        let taskById = Task.delete(id)
        View.showDeleted(taskById)
    }
    static complete(id){
        let data = Task.complete(id)
        View.list(data)
    }
    static uncomplete(id){
        let data = Task.uncomplete(id)
        View.list(data)
    }
    static asc() {
        let data = Task.asc();
        View.View(data);
    }
    static dsc() {
        let data = Task.desc();
        View.list(data);
    }
    static completeAsc() {
        let data = Task.completeAsc();
        View.list(data);
    }
    static completeDesc() {
        let data = Task.completeDsc();
        View.list(data);
    }
    static tag(id,tagName) {
        let data = Task.tag(id,tagName);
        View.list(data);
    }
    static filterTag(tagName) {
        let data = Task.filterTag(tagName);
        View.list(data);
    }

}

module.exports = Controller