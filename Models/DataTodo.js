const fs = require('fs')


class Data {
    constructor(id, task) {
        this.id = id
        this.status = " "
        this.task = task
    }
    static list() {
        return JSON.parse(fs.readFileSync('./data.json'))
    }
    static add(contents) {
        let arrOfTasks = this.list()    
        let num = (arrOfTasks[arrOfTasks.length-1].id) + 1
        arrOfTasks.push(new Data(num, contents))
        fs.writeFileSync('./data.json', JSON.stringify(arrOfTasks, null, 2))
        return contents
    }
    static findById(id) {
        let arrOfTasks = this.list()
        for (let i=0; i<arrOfTasks.length; i++) {
           if (arrOfTasks[i].id === Number(id)) {
               return arrOfTasks[i]
           }
        }
    }
    static delete(id) {
        let arrOfTasks = this.list()
        for (let i=0; i<arrOfTasks.length; i++) {
            if (arrOfTasks[i].id === Number(id)) {
                let deleted = arrOfTasks.splice(i,1)
                fs.writeFileSync('./data.json', JSON.stringify(arrOfTasks, null, 2))
                return deleted[0]

            }
        }
    }
    static complete(id) {
        let arrOfTasks = this.list()
        for (let i=0; i<arrOfTasks.length; i++) {
            if (arrOfTasks[i].id === Number(id)) {
                arrOfTasks[i].status = "x"
                fs.writeFileSync('./data.json', JSON.stringify(arrOfTasks, null, 2))
                return arrOfTasks
            }
        }
    }
    static uncomplete(id) {
        let arrOfTasks = this.list()
        for (let i=0; i<arrOfTasks.length; i++) {
            if (arrOfTasks[i].id === Number(id)) {
                if (arrOfTasks[i].status = "x")
                arrOfTasks[i].status = " "
                fs.writeFileSync('./data.json', JSON.stringify(arrOfTasks, null, 2))
                return arrOfTasks
            }
        }
    }
}


module.exports = Data


