const fs = require('fs')
const List = require('../Model/List')


class Add {
    constructor(id, todo) {
        this.id = id
        this.todo = todo
    }

    static addData(todo) {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        let index = data[data.length-1].id + 1
        let activity = new Add(index, todo)
        const data_arr = []

        for (let i = 0; i < data.length; i++) {
            data_arr.push(new List(data[i].id, data[i].todo))
        }

        data_arr.push(activity)
        fs.writeFileSync('./data.json', JSON.stringify(data_arr, null, 4))

        return data_arr
    }

}

module.exports = Add