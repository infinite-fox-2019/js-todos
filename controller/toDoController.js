const toDoModel = require('../model/toDoModel.js')
const toDoView = require('../view/toDoView.js')

class toDoController {
    constructor() {
        this.list = []
    }
    static list() {
        this.list = toDoModel.list()
        toDoView.show(this.list)
    }
    static add(argument) {
        toDoModel.add(argument)
        toDoView.save()
    }
    static findById(argument) {
        toDoModel.findById(argument)
        toDoView.findById(toDoModel.findById(argument))
    }
    static delete(argument) {
        let a = toDoModel.delete(argument)
        toDoView.delete(a)
    }
    static complete(argument) {
        toDoModel.complete(argument)
        this.list()
    }
    static uncomplete(argument) {
        toDoModel.uncomplete(argument)
        this.list()
    }
    static asc() {
        let output = toDoModel.asc()
        toDoView.asc(output)
    }
    static desc() {
        let output = toDoModel.desc()
        toDoView.desc(output)
    }
    static ascComplete() {
        let output = toDoModel.ascComplete()
        toDoView.ascComplete(output)
    }
    static descComplete() {
        let output = toDoModel.descComplete()
        toDoView.descComplete(output)
    }
    static tag(id, argument) {
        let output = toDoModel.tag(id, argument)
        toDoView.tag(output)
    }
    static filterTag(argument) {
        let output = toDoModel.filterTag(argument)
        toDoView.filterTag(output)
    }

}

module.exports = toDoController