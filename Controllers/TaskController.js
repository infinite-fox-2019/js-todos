const Task = require('../Models/Task')
const TaskView = require('../Views/TaskView')

class TaskController {
    static viewAll() {
        const data = Task.fileParsed()
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

    static createdAsc() {
        const data = Task.createdAsc()
        TaskView.viewAll(data)
    }

    static createdDesc() {
        const data = Task.createdDesc()
        TaskView.viewAll(data)
    }

    static completedAsc() {
        const data = Task.createdAsc()
        TaskView.viewAll(data)
    }

    static completedDesc() {
        const data = Task.createdDesc()
        TaskView.viewAll(data)
    }
}

module.exports = TaskController