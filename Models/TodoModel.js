const fs = require('fs')

class Todo {
    constructor(id,task,status,date,tag){
        this.id = id
        this.task = task
        this.status = status
        this.created_at = date
        this.tags = tag
    }
    static findAll() {
        let arrOfTodo = []
        let todoList = JSON.parse(fs.readFileSync('./data.json'))
        for(let i=0; i<todoList.length; i++){
            arrOfTodo.push(new Todo(todoList[i].id , todoList[i].task , todoList[i].status , todoList[i].created_at, todoList[i].tags))
        }
        this.save(arrOfTodo)
        return arrOfTodo
    }
    
    static add(task){
        let arrOfObj = this.findAll()
        let newID = (arrOfObj[arrOfObj.length-1].id)+1
        let newDate = new Date()
        let newTags = []
        let status = "X"
        arrOfObj.push(new Todo(newID,task,status,newDate,newTags))
        this.save(arrOfObj)
    }
    static save(todo){
        fs.writeFileSync('./data.json',JSON.stringify(todo,null,4))
    }
    static filter(findId){
        let filteredList = this.findAll()
        for(let i=0; i<filteredList.length; i++){
            if(filteredList[i].id == findId){
                return filteredList[i]
            }
        }
    }
    static delete(task){
        let arrOfData = this.findAll()
        for(let i=0; i<arrOfData.length; i++){
            if(arrOfData[i].task == task){
                arrOfData.splice(i,1)
            }
        }
        this.save(arrOfData)
    }
    static complete(Id){
        let arrData = this.findAll()
        for(let i=0; i<arrData.length; i++){
            if(arrData[i].id == Id){
                arrData[i].status = String.fromCodePoint(0x2714)
            }
        }
        this.save(arrData)
    }
    static uncomplete(Id){
        let arrData = this.findAll()
        for(let i=0; i<arrData.length; i++){
            if(arrData[i].id == Id){
                arrData[i].status = "X"
            }
        }
        this.save(arrData)
    }
    static sortBy(str){
        let arrData = this.findAll()
        if(str === 'asc'){
            return arrData.sort((a,b) => a.created_at > b.created_at)
        }else if(str === 'desc'){
            return arrData.sort((a,b) => a.created_at < b.created_at)
        }
    }
    static showCompleted(){
        let arrData = this.findAll()
        let temp = []
        for(let i=0; i<arrData.length; i++){
            if(arrData[i].status !== "X"){
                temp.push(arrData[i])
            }
        }
        return temp
    }
    static addTag(arr,str){
        let arrData = this.findAll()
        for(let i=0; i<arrData.length; i++){
            if(arrData[i].id == str){
                arrData[i].tags = arrData[i].tags.concat(arr)
            }
        }
        this.save(arrData)
    }
    static filterTag(input){
        for(let i=0; i<this.findAll().length; i++){
            for(let j=0; j<this.findAll()[i].tags.length; j++){
                if(this.findAll()[i].tags[j]==input){
                    return `${this.findAll()[i].id}. ${this.findAll()[i].task} ${this.findAll()[i].tags}`
                }
            }
        }
    }
}

module.exports = Todo