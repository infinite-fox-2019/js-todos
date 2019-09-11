const fs = require('fs')
const List = require('../Model/List')

class FindById {
    constructor(id, todo) {
        this.id = id
        this.todo = todo
    }

    static findData(id) {
        const data = JSON.parse(fs.readFileSync('./data.json'))

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data[i]
            }
        }
    }
}

module.exports = FindById