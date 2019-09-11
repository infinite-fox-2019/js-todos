const fs = require('fs')

class Task {
    constructor(id,task){
        this.id = id
        this.task = task
        this.isComplete = false
    }

    static read () {
        return JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
    }

    static save (data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }

    static list(){
        const data = Task.read()
        let listArr = []
        for (let i=0; i<data.length; i++){
            listArr.push(new Task(data[i].id, data[i].task))
        }
        console.log(listArr)
        
        return listArr;
    }

    static add(task) {
        const data = Task.list()
        let createId = null

        if (data.length === 0) createID = 1
        else createId = data[data.length - 1].id + 1

        let newTask = new Task(createId, task)
        data.push(newTask)
        Task.save(data)

        return newTask
    }

    static findById(id) {
        const data = Task.list()
        let taskById 
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                taskById = data[i]
            }
        }
        return taskById
    }

    static delete(id) {
        const data = Task.list()
        let taskById
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                taskById = data[i].task
                data.splice(i,1)
            }
        }
        Task.save(data)
        return taskById
    }

    static complete(id){
        let data = Task.list()
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                data[i].isComplete = true
            }
        }
        Task.save(data)
    }

}

module.exports = Task