const fs = require('fs')

class Add {
    constructor(id, todo) {
        this.id = id
        this.todo = todo
    }

    static addData() {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        let activity = new Add(this.id, this.todo)
        data.push(activity)
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))

        return data
    }

}

module.exports = Add