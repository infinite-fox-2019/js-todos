const fs = require('fs')


class Data {
    static list() {
        return JSON.parse(fs.readFileSync('./data.json'))
    }
    static add(contents) {
        let arrOfTasks = this.list()    
        let num = (arrOfTasks[arrOfTasks.length-1].id) + 1
        arrOfTasks.push({ "id" : num, "task" : contents})
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
}
module.exports = Data


