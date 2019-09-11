const DataModel = require('../Models/DataTodo')
const DataView = require('../Views/DataView')

class DataController {
    static help() {
        DataView.help()
    }
    static list() {
        let listFromModel = DataModel.list()
        DataView.list(listFromModel)
    }
    static add(contents) {
        let arrOfTasks = DataModel.add(contents)
        DataView.add(arrOfTasks)
    }
    static findById(id) {
        let taskIdFound = DataModel.findById(id)
        DataView.findById(taskIdFound)
    }
    static delete(id) {
        let deleteId = DataModel.delete(id)
        DataView.delete(deleteId)
    }
    static complete() {

    }
    static uncomplete() {

    }
}

module.exports = DataController