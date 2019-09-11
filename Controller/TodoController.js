const View = require('../Views/TodoViews.js')
const TodoModel = require('../Models/todoModel')

class Controller {


    static help() {
        return View.help()
    }

    static list() {
        let data = TodoModel.read()
        View.list(data)
    }

    static add(todo) {
        if (todo.length === 0) {
            View.error('Task')

        } else {
            todo = todo.join(' ')
            const data = TodoModel.add(todo)
            View.add(data)
        }
    }

    static findById(id) {
        if (id.length === 0) {
            View.error('id')

        } else {
            let task = TodoModel.findById(id)
            View.list(task)
        }
    }

    static delete(id) {
        if (id.length === 0) {
            View.error('id')

        } else {
            let task = TodoModel.findById(id)
            TodoModel.delele(id)
            View.delete(task)
        }
    }

    static complete(id, status) {
        if (id.length === 0) {
            View.error('id')

        } else {
            TodoModel.complete(id, status)
            Controller.list()
        }
    }

    static listCreated(order) {
        let data = TodoModel.listCreated(order)
        View.list(data)
    }

    static listComplete(order) {
        let data = TodoModel.listComplete(order)
        View.list(data)
    }

    static tag(id, tagParse) {
        if (id === undefined || tagParse.length === 0) {
            View.error('id dan tag')
        } else {
            let data = TodoModel.tag(id, tagParse)
            View.tag(data, tagParse)
        }

    }

    static filter(tag) {
        if (tag === undefined) {
            View.error('filter tag')
        }
        else {
            let data = TodoModel.filter(tag)
            View.filter(data)
        }
    }

}

module.exports = Controller