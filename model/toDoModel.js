const fs = require('fs')
let toDoList = JSON.parse(fs.readFileSync('./data.json',JSON,'utf8'))
//untuk menampilkan data agar siap digunakan


class toDoModel {
    constructor(id, toDo, status, time, tag) {
        this.id = id;
        this.toDo = toDo
        this.status = status
        this.time = time
        this.tag = tag
    }
    static list() {
        let toDoArr = []
        for (let i=0; i<toDoList.length; i++) {
            toDoArr.push(new toDoModel(toDoList[i].id, toDoList[i].toDo, toDoList[i].status, toDoList[i].time, toDoList[i].tag))
        }
        return toDoArr
    }
    static add(argument) {
        let obj = {}
        if (toDoList.length == 0) {
            obj.id = 1
        } else {
            obj.id = toDoList[toDoList.length-1].id + 1
        }
        obj.toDo = argument
        obj.status = '[ ]'
        obj.time = new Date
        obj.tag = []
        toDoList.push(obj)
        this.save()

    }
    static save() {
        fs.writeFileSync('./data.json',JSON.stringify(toDoList,null,2))
    }
    static findById(argument) {
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].id == argument) {
                return toDoList[i]
            }
        }
    }
    static delete(argument) {
        let newArr = []
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].id == argument) {
                newArr.push(toDoList[i])
                toDoList.splice(i,1)
                this.save()
                return newArr
            }
        }
    }
    static complete(argument) {
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].id == argument) {
                toDoList[i].status = '[V]'
                toDoList[i].time = new Date
                this.save()
            }
        }

    }
    static uncomplete(argument) {
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].id == argument) {
                toDoList[i].status = '[ ]'
                toDoList[i].time = new Date
                this.save()
            }
        }

    }
    static asc() { //dari kecil ke besar
        for (let i=1; i<toDoList.length; i++) {
            for (let j=1; j<toDoList.length; j++) {
                if (toDoList[j].time > toDoList[j-1].time) {
                    [toDoList[j-1], toDoList[j]] = [toDoList[j], toDoList[j-1]]
                }
            }
        } 
        return toDoList
    }
    static desc() { //dari besar ke kecil
        for (let i=1; i<toDoList.length; i++) {
            for (let j=1; j<toDoList.length; j++) {
                if (toDoList[j].time < toDoList[j-1].time) {
                    [toDoList[j-1], toDoList[j]] = [toDoList[j], toDoList[j-1]]
                }
            }
        } 
        return toDoList
    }
    static ascComplete() {
        let newData = this.asc()
        let output = []
        for (let i=0; i<newData.length; i++) {
            if (newData[i].status == '[V]') {
                output.push(newData[i])
            }
        }
        return output
    }
    static descComplete() {
        let newData = this.desc()
        let output = []
        for (let i=0; i<newData.length; i++) {
            if (newData[i].status == "[V]") {
                output.push(newData[i])
            }
        }
        return output
    }
    static tag(id, argument) {
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].id == id) {
                for (let j=0; j<argument.length; j++) {
                    if (toDoList[i].tag.indexOf(argument[j]) == -1) {
                        toDoList[i].tag.push(argument[j])
                        this.save()
                    }
                }
            }
        }
        return toDoList
    }
    static filterTag(argument) {
        let output = []
        for (let i=0; i<toDoList.length; i++) {
            if (toDoList[i].tag.indexOf(argument) != -1) {
                output.push(toDoList[i])
            }
        }
        return output
    }
}
module.exports = toDoModel

