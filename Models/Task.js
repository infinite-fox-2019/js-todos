const fs = require('fs')

class Task {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.completed = ' '
        this.tags = []
        this.timeCreated = new Date()
        this.timeCompleted = ''
    }

    static fileParsed() {
        const file = JSON.parse(fs.readFileSync('./data.json'))
        return file
    }

    static addTask(name) {
        const data = this.fileParsed()
        if (!data[data.length - 1]) {
            data.push(new Task(name, 1))
        } else {
            data.push(new Task(name, data[data.length - 1].id + 1))
        }
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
                data[i].timeCompleted = new Date
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
                data[i].timeCompleted = ''
            }
        }
        this.save(data)
        return data
    }

    static createdAsc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j <= data.length - 1; j++) {
                if (data[i].timeCreated > data[j].timeCreated) {
                    [data[i],data[j]] = [data[j],data[i]]
                }
            }
        }
        this.save(data)
        return data
    }

    static createdDesc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j <= data.length - 1; j++) {
                if (data[i].timeCreated < data[j].timeCreated) {
                    [data[i],data[j]] = [data[j],data[i]]
                }
            }
        }
        this.save(data)
        return data
    }

    static completedAsc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j <= data.length - 1; j++) {
                if (data[i].timeCompleted > data[j].timeCompleted) {
                    [data[i],data[j]] = [data[j],data[i]]
                }
            }
        }
        this.save(data)
        return data
    }

    static completedDesc() {
        const data = this.fileParsed()
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j <= data.length - 1; j++) {
                if (data[i].timeCompleted < data[j].timeCompleted) {
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