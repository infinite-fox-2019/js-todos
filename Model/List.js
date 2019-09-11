const fs = require('fs')

class List {
    constructor(id, todo) {
        this.id = id
        this.todo = todo

    }
    static findAll() {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        const data_arr = []

        for (let i = 0; i < data.length; i++) {
            data_arr.push(new List(data[i].id, data[i].todo))
        }

        return data_arr
    }

}

module.exports = List