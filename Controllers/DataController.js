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
    static complete(id) {
        let completedTask = DataModel.complete(id)
        DataView.complete(completedTask)
    }
    static uncomplete(id) {
        let uncompletedTask = DataModel.uncomplete(id)
        DataView.complete(uncompletedTask)
    }
    static asc() {
        let dataAsc = DataModel.asc();
        View.View(dataAsc);
    }
    static desc() {
        let dataDesc = DataModel.desc();
        View.View(dataDesc);
    }
    static completeAsc() {
        let dataComplAsc = DataModel.completeAsc();
        View.View(dataComplAsc);
    }
    static completeDesc() {
        let dataCompDesc = DataModel.completeDesc();
        View.View(dataCompDesc);
    }
    static tag(id,tagName) {
        let taskTag = DataModel.tag(id,tagName);
        View.View(taskTag);
    }
    static filterTag(tagName) {
        let tagFiltered = DataModel.filterTag(tagName);
        View.View(tagFiltered);
    }
}

module.exports = DataController