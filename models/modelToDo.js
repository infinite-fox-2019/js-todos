const fs = require("fs")
const filePath = "./data.json"


class ToDo{
    constructor(status, id, todo, date = new Date, tag){
        this.status = status
        this.id = Number(id)
        this.todo = todo
        this.createdAt = new Date(date)
        this.tag = tag
    }

    static parse(){
        return JSON.parse(fs.readFileSync(filePath,"utf8"))
    }

    static data(){
        const dataBase = ToDo.parse()
        let hasilData = []
        for(let i=0; i<dataBase.length; i++){
            hasilData.push(new ToDo(dataBase[i].status, dataBase[i].id, dataBase[i].todo, dataBase[i].createdAt, dataBase[i].tag))
        }
        
        return hasilData
    }

    static add(task, addTag){
        const hasilData = ToDo.data()
        let id = hasilData[hasilData.length - 1].id + 1
        let tag = addTag
        let status = false
        let newData = new ToDo(status, id, task, new Date, tag)
        hasilData.push(newData)
        ToDo.save(hasilData)
        return newData
    }

    static findById(num){
        const dataBase = ToDo.parse()
        for(let i=0; i<dataBase.length; i++){
            if(dataBase[i].id === Number(num)){
                return dataBase[i].todo
            }  
        }
        return false
    }

    static delete(num){
        const data = ToDo.data()
        const item = data[num].todo
        data.splice(num,1)
        ToDo.save(data)
        return item
    }

    static complete(num){
        const data = ToDo.data()
        data[num].status = true
        ToDo.save(data)
        return data[num].todo
    }

    static unComplete(num){
        const data = ToDo.data()
        data[num].status = false
        ToDo.save(data)
        return data[num].todo
    }

    static tag(input, tag){
        const data = ToDo.data()
        // console.log(input, tag)
        for(let i=0; i<data.length; i++){
            if(data[i].todo === input){
                data[i].tag = tag
            }  
        }
        ToDo.save(data)
    }

    static save(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    }
}

module.exports = ToDo
