const View = require('../views/viewMessage')
const ToDoList = require('../models/todoList')

class ToDoController {
    static showHelp() {
        View.help()
    }

    static showList(type, sort) {
        let data
        if (type == 'created') {
            console.log('masuk created');
            data = ToDoList.showAll(sort)
        } else {
            data = ToDoList.showCompleted(sort)
        }

        View.show(data)
    }


    static add(task) {
        const newTask = ToDoList.add(task)

        if (!newTask) {
            View.showError()
        } else {
            View.show([newTask])
        }

    }
    static findById(id) {
        let task = ToDoList.findOne(id)

        View.show([task])
    }
    static complete(id) {
        let find = ToDoList.findOne(id)

        if (!find) {
            View.showError()
        } else {

            let task = ToDoList.update({ field: 'id', value: id, updatedField: 'done', updatedValue: true })
            if (!task) {
                View.showError()
            } else {
                View.status(task)
            }
        }
    }
    static uncomplete(id) {

        let find = ToDoList.findOne(id)

        if (!find) {
            View.showError()
        } else {

            let task = ToDoList.update({ field: 'id', value: id, updatedField: 'done', updatedValue: false })
            if (!task) {
                View.showError()
            } else {
                View.status(task)
            }
        }
    }
    static delete(id) {
        let deleted = ToDoList.delete(id)
        if (!deleted) {
            View.showError()
        } else {
            console.log(deleted);
            View.successDeleted(deleted)
        }
    }

    static findByTag(tag) {
        let tasks = ToDoList.findByTag(tag)

        View.show(tasks)
    }

    static addTag(id, tags) {
        let data = ToDoList.findOne(id)

        if (!data) {
            View.showError()
        } else {
            let tasks = ToDoList.addTags(id, tags)

            View.show(tasks)
        }

    }
}

module.exports = ToDoController