const fs = require('fs')

class Task {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.completed = ' '
        this.timeCreated = new Date()
    }

    static fileParsed() {
        const file = JSON.parse(fs.readFileSync('./data.json'))
        return file
    }

    static addTask(name) {
        const data = this.fileParsed()
        data.push(new Task(name, data[data.length - 1].id + 1))
        this.save(data)
    }

    static findById(idToFind) {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(idToFind)) {
                return data[i]
            }
        }
    }

    static delete(idToDelete) {
        let object
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(idToDelete)) {
                object = data[i]
                data.splice(i,1)
            }
        }
        this.save(data)
        return object
    }

    static complete(index) {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(index)) {
                data[i].completed = 'x'
            }
        }
        this.save(data)
        return data
    }

    static uncomplete(index) {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(index)) {
                data[i].completed = ' '
            }
        }
        this.save(data)
        return data
    }

    static asc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length - 1; j++) {
                if (data[i].timeCreated > data[j].timeCreated) {
                    [data[i],data[j]] = [data[j],data[i]]
                }
            }
        }
        this.save(data)
        return data
    }

    static desc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length - 1; j++) {
                if (data[i].timeCreated < data[j].timeCreated) {
                    [data[i],data[j]] = [data[j],data[i]]
                }
            }
        }
        this.save(data)
        return data
    }


    static save(file) {
        fs.writeFileSync('./data.json', JSON.stringify(file, null, 2))
    }
}


module.exports = Task