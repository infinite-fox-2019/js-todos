const fs = require('fs')

class Todo{
    constructor(id, todo, time, status, tags, timeComplete){
        this.id = id
        this.todo = todo
        this.created_date = time
        this.status = status
        this.tags = tags
        this.completed_date = timeComplete
    }

    static getTodo(){
        let container = []
        const data = JSON.parse(fs.readFileSync('./data.json'))
        data.forEach(objData => {
            container.push(new Todo(objData.id, objData.todo, objData.created_date, objData.status, objData.tags, objData.completed_date  ))
        });
        return container
    }

    static addData(todo, tags){
        const data = this.getTodo()
        let id = data[data.length-1].id + 1;
        data.push(new Todo(id , todo , Date(), false, tags, null))
        this.save(data)
    }

    static deleteData(id){
        const data = this.getTodo()
        let newData = data.filter(data => {
            return data.id != id
        })
        this.save(newData)
        let output;
        data.forEach(object => {
           if(object.id === Number(id))output = object
        });
        return output    
    }

    static getDataById(id){
        const data = this.getTodo()
        let object = {}
        data.forEach(obj => {
            if(obj.id === Number(id))object = obj
        });
        return object
    }

    static completeDataById(id){
        const data = this.getTodo()
        let flag = false
        data.forEach(obj => {
            if(obj.id === Number(id)){
                obj.status = true
                flag = true
                obj.completed_date = Date()
            }
        });
        this.save(data)
        return {flag , data}
    }

    static uncompleteDataById(id){
        const data = this.getTodo()
        let flag = false
        data.forEach(obj => {
            if(obj.id === Number(id)){
                obj.status = false
                flag = true
            }
        });
        this.save(data)
        return {flag , data}
    }

    static getSortedData(arg){
        let data = this.getTodo()
        let newData;
        if(arg.toLowerCase() === 'asc') newData = data.sort( (a,b) => new Date(a.created_date) - new Date(b.created_date))
        else newData = data.sort( (a,b) => new Date(b.created_date) - new Date(a.created_date))
        return newData
    }

    static getCompletedData(arg){
        const data = this.getTodo()
        let newData = data.filter(data => data.status === true)
        if(arg.toLowerCase() === 'asc') newData = newData.sort( (a,b) => new Date(a.completed_date) - new Date(b.completed_date))
        else newData = newData.sort( (a,b) => new Date(b.completed_date) - new Date(a.created_date))
        return newData
    }

    static addTag(id , tags){
        let data = this.getTodo()
        data.forEach(obj => {
            if(obj.id === Number(id)){
                obj.tags = obj.tags.concat(tags)
            }
        });
        this.save(data)
    }

    static filterTag(tag){
        const data = this.getTodo()
        let container = []
        data.forEach(obj => {
            obj.tags.forEach(objtag =>{
                if(objtag === tag)container.push(obj)
            })    
        })
        return container
    }

    static save(data){
        fs.writeFileSync('./data.json' ,JSON.stringify(data, null, 2))
    }
}

module.exports = Todo