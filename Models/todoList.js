const fs = require('fs')

class TodoList {
    constructor(id, task, status, createdAt, dateCompleted ,tag) {
        this._id = id
        this._task = task
        this._completed = status
        this._createdAt = createdAt
        this._dateCompleted = dateCompleted
        this._tag = tag
    }
    
    static list() {
        let file = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let dataArr = []
        for(let i = 0 ; i < file.length; i++){
            dataArr.push(new TodoList(file[i]._id, file[i]._task, file[i]._completed, file[i]._createdAt, file[i]._dateCompleted,file[i]._tag))
        }
        return dataArr
    }

    static add(task) {
        let data = TodoList.list()
        if (data.length === 0) {
            data.push(new TodoList(1,task,false,new Date(),null,[]))
        } else {
            let noId = Number(data[data.length-1]._id) + 1
            data.push(new TodoList(noId,task,false,new Date(),null,[]))
        }
        TodoList.save(data)
    }

    static findById(id){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length; i++){
            if (data[i]._id == id) {
                temp.push(data[i])
            }
        }
        return temp
    }

    static delete(id){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length; i++){
            if (data[i]._id != id) {
                temp.push(data[i])
            }
        }
        TodoList.save(temp)

        let tempS = []
        for(let j = 0 ; j < data.length; j++){
            if (data[j]._id == id) {
                tempS.push(data[j])
            }
        }
        return tempS
    }

    static complete(id){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length; i++){
            if (data[i]._id == id) {
                data[i]._completed = true
                data[i]._dateCompleted = new Date()
                temp.push(data[i])
            } else {
                temp.push(data[i])
            }
        }
        TodoList.save(temp)
    }

    static sortAsc(){
        let data = TodoList.list()
        for(let i = 0 ; i < data.length ; i++){
            for(let j = 0 ; j < data.length-1; j++){
                if (data[j]._dateCompleted > data[j+1]._dateCompleted) {
                    let temp = data[j]
                    data[j] = data[j+1]
                    data[j+1] = temp
                }
            }
        }
        return data
    }

    static sortDsc(){
        let data = TodoList.list()
        for(let i = 0 ; i < data.length ; i++){
            for(let j = 0 ; j < data.length-1; j++){
                if (data[j]._dateCompleted < data[j+1]._dateCompleted) {
                    let temp = data[j]
                    data[j] = data[j+1]
                    data[j+1] = temp
                }
            }
        }
        return data
    }

    static completeAsc(){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length;i++){
            if (data[i]._completed == true) {
                temp.push(data[i])
            }
        }
        
        for(let i = 0 ; i < temp.length ; i++){
            for(let j = 0 ; j < temp.length-1; j++){
                if (temp[j]._dateCompleted < temp[j+1]._dateCompleted) {
                    let tempS = temp[j]
                    temp[j] = temp[j+1]
                    temp[j+1] = tempS
                }
            }
        }
        // console.log(temp);
        return temp
    }

    static completeDsc(){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length;i++){
            if (data[i]._completed == true) {
                temp.push(data[i])
            }
        }
        
        for(let i = 0 ; i < temp.length ; i++){
            for(let j = 0 ; j < temp.length-1; j++){
                if (temp[j]._dateCompleted > temp[j+1]._dateCompleted) {
                    let tempS = temp[j]
                    temp[j] = temp[j+1]
                    temp[j+1] = tempS
                }
            }
        }
        // console.log(temp);
        return temp
    }

    static uncompleteAsc(){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length;i++){
            if (data[i]._completed == false) {
                temp.push(data[i])
            }
        }
        
        for(let i = 0 ; i < temp.length ; i++){
            for(let j = 0 ; j < temp.length-1; j++){
                if (temp[j]._dateCompleted < temp[j+1]._dateCompleted) {
                    let tempS = temp[j]
                    temp[j] = temp[j+1]
                    temp[j+1] = tempS
                }
            }
        }
        // console.log(temp);
        return temp
    }

    static uncompleteDsc(){
        let data = TodoList.list()
        let temp = []
        for(let i = 0 ; i < data.length;i++){
            if (data[i]._completed == false) {
                temp.push(data[i])
            }
        }
        
        for(let i = 0 ; i < temp.length ; i++){
            for(let j = 0 ; j < temp.length-1; j++){
                if (temp[j]._dateCompleted > temp[j+1]._dateCompleted) {
                    let tempS = temp[j]
                    temp[j] = temp[j+1]
                    temp[j+1] = tempS
                }
            }
        }
        // console.log(temp);
        return temp
    }

    static tagAdd(id,name){
        let data = TodoList.list()
        for(let i = 0 ; i < data.length;i++){
            if (data[i]._id == id) {
                data[i]._tag.push(name)
            }
        }
        TodoList.save(data)        
        return data
    }

    static filter(data){
        let newArr = []
        let file = TodoList.list()
        for(let i = 0 ; i < file.length;i++){
            for(let j = 0 ; j < file[i]._tag.length; j++){
                if (file[i]._tag[j] == data) {
                    newArr.push(file[i])
                }
            }
        }
        return newArr
    }

    static save(data){
        return fs.writeFileSync('./data.json', JSON.stringify(data,null,2))
    }
}

module.exports = TodoList