const fs = require('fs')

const filePath = ('./list.json')

class ToDoList {

    constructor(id, name, done, created, completed, tags) {
        this.id = id
        this.name = name
        this.done = done
        this.created = created
        this.completed = completed
        this.tags = tags


    }
    static read() {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

        const toDoData = []
        data.forEach(task => {
            toDoData.push(new ToDoList(task.id, task.name, task.done, task.created, task.completed, task.tags))
        })
        return toDoData
    }

    static showAll(sort) {
        let list = this.read()
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                if (sort == 'asc') {
                    if (list[j + 1].created < list[j].created) {
                        let temp = list[j]
                        list[j] = list[j + 1]
                        list[j + 1] = temp
                    }
                } else {
                    if (list[j + 1].created > list[j].created) {
                        let temp = list[j]
                        list[j] = list[j + 1]
                        list[j + 1] = temp
                    }
                }
            }
        }



        return list
    }

    static showCompleted(sort) {
        let list = this.read()
        let completed = []
        list.forEach(task => {
            if (task.done) {
                completed.push(task)
            }
        })


        for (let i = 0; i < completed.length; i++) {
            for (let j = 0; j < completed.length - i - 1; j++) {
                if (sort == 'asc') {
                    if (completed[j + 1].completed < completed[j].completed) {
                        let temp = completed[j]
                        completed[j] = completed[j + 1]
                        completed[j + 1] = temp
                    }
                } else {
                    if (completed[j + 1].completed > completed[j].completed) {
                        let temp = completed[j]
                        completed[j] = completed[j + 1]
                        completed[j + 1] = temp
                    }
                }
            }
        }
        return completed

    }

    static findByTag(tag) {
        let list = this.read()
        let searchedTasks = []

        list.forEach(task => {
            if (task.tags) {
                task.tags.forEach(taskTag => {
                    if (tag === taskTag) {
                        searchedTasks.push(task)
                    }
                })
            }
        })

        return searchedTasks
    }

    static addTags(id, tags) {
        let list = this.read()
        let searchedTask
        list.forEach(task => {
            if (task.id == id) {
                searchedTask = task
                if (!task.tags) {
                    task.tags = []
                    tags.forEach(tag => {
                        task.tags.push(tag)
                    })
                } else {
                    tags.forEach(tag => {
                        task.tags.push(tag)
                    })
                }
            }
        })

        this.save(list)
        return searchedTask
    }

    static add(task) {
        let list = this.read()
        let id
        if (list.length === 0) {
            id = 1
        } else {
            id = Number(list[list.length - 1].id) + 1
        }

        let newTask = new ToDoList(id, task, false, new Date, new Date)
        list.push(newTask)
        this.save(list)

        return newTask

    }

    static save(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    }

    static findOne(id) {
        let list = this.read()
        let searchedTask;

        list.forEach(task => {
            if (task.id == id) {
                searchedTask = task
            }
        });

        return searchedTask
    }
    static update(updateObj) {
        let list = this.read()
        for (let i = 0; i < list.length; i++) {
            if (updateObj.value == list[i].id) {
                list[i][updateObj.updatedField] = updateObj.updatedValue
                list[i].completed = new Date
            }
        }
        this.save(list)

        return list
    }

    static delete(id) {
        let list = this.read()
        let deleted
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                deleted = list.splice(i, 1)[0]
            }
        }
        this.save(list)

        return deleted
    }
}

module.exports = ToDoList