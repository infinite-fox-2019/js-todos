const fs = require('fs')

class Todo {
    constructor(id, todo) {
        this.id = id
        this.todo = todo
        this.completed = ''
    }
    
    static findAll() {
        const data = JSON.parse(fs.readFileSync('./data.json'))
    
        return data
    }

    static addData(todo) {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        let index = data[data.length-1].id + 1
        let activity = new Todo(index, todo)

        data.push(activity)
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))

        return data[index-1]
    }

    static findData(id) {
        const data = JSON.parse(fs.readFileSync('./data.json'))

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data[i]
            }
        }
    }
    
    static deleteData(id) {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        var index = 0
        let temp_data = data[index] 

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                index = i
                data.splice(i, 1)
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        
        return temp_data
    }

    static complete(id) {
        const data = JSON.parse(fs.readFileSync('./data.json'))

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].completed = 'X'
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))

        return data
    }

    static uncomplete(id) {
        const data = JSON.parse(fs.readFileSync('./data.json'))

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].completed = ''
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))

        return data

    }

}

module.exports = Todo
