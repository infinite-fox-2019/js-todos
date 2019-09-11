const fs = require('fs')

class Task {
    constructor(id,task,isComplete, tagName){
        this.id = id
        this.task = task
        this.isComplete = isComplete
        this.created =  new Date()
        this.tagName = tagName
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
            listArr.push(new Task(data[i].id, data[i].task, data[i].isComplete))
        }
        return listArr;
    }

    static add(task) {
        const data = Task.list()
        let createId = null

        if (data.length === 0) createId = 1
        else createId = data[data.length - 1].id + 1

        let newTask = new Task(createId, task, false)
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
        return data
    }

    static uncomplete(id){
        let data = Task.list()
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                data[i].isComplete = false
            }
        }
        Task.save(data)
        return data
    }
    static listCreated(){
        const data = Task.read()
        let listArr = []
        for (let i=0; i<data.length; i++){
            listArr.push(new Task(data[i].id, data[i].task))
        }
        return listArr;
    }

    static asc(){
        let dataAsc = Task.list()
        let store
        for(let i=0; i<data.length; i++){
            for (let j=0; j<data.length; j++){
                if (data[i].created > data[j].created){
                    store = data[i]
                    data[i] = data[j]
                    data[j] = store
                }
            }
        }
        return dataAsc
    }

    static dsc(){
        let dataDsc = Task.list()
        let store
        for(let i=0; i<data.length; i++){
            for (let j=0; j<data.length; j++){
                if (data[i].created < data[j].created){
                    store = data[i]
                    data[i] = data[j]
                    data[j] = store
                }
            }
        }
        return dataDsc
    }

    static completeAsc() {
        let data = Task.asc()
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].isComplete === true) {
                result.push(data[i]);
            }
        }
        return result;
    }
    static completeDesc() {
        let data = Task.dsc()
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].isComplete === true) {
                result.push(data[i]);
            }
        }
        return result;
    }
    static tag(id,tagName) {
        for (let i = 0; i < data.length; i++) {
            if (Number(data[i].id) === id) {
                data[i].tagName = tagName;
            }
        }
        Task.save(data);
        return data;
    }
    static filterTag(tagName) {
        let result = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j< data[i].tagName.length; j++) {
                if (data[i].tagName[j] === tagName) {
                    result.push(data[i]);
                }
            }
        }
        return result;
    }

}

module.exports = Task