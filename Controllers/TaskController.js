const Task = require('../Models/Task')
const TaskView = require('../Views/TaskView')

class TaskController {
    static viewAll() {
        const data = Task.fileParsed()
        console.table(data)
        TaskView.viewAll(data)
    }

    static add(name) {
        Task.addTask(name)
        TaskView.add(name)
    }

    static displayById(id) {
        const object = Task.findById(id)
        TaskView.displayAList(object)
    }

    static delete(id) {
        const Object = Task.delete(id)
        TaskView.delete(Object.name)
    }

    static complete(index) {
        const data = Task.complete(index)
        TaskView.viewAll(data)
    }

    static uncomplete(index) {
        const data = Task.uncomplete(index)
        TaskView.viewAll(data)
    }

    static asc() {
        const data = Task.asc()
        TaskView.viewAll(data)
    }

    static desc() {
        const data = Task.desc()
        TaskView.viewAll(data)
    }
}

module.exports = TaskController