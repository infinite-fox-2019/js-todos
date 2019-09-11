const fs = require('fs')


class TodoModel {

    constructor(id, todo, complete, createdAt, completedDate, tag = []) {
        this.id = id
        this.todo = todo;
        this.complete = complete
        this.createdAt = createdAt
        this.completedDate = completedDate
        this.tag = tag
    }
    static read() {
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
        let instansData = []
        for (let i = 0; i < data.length; i++) {
            let { id, todo, complete, createdAt, completedDate, tag } = data[i]
            instansData.push(new TodoModel(id, todo, complete, createdAt, completedDate, tag))
        }
        return instansData

    }

    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }

    static add(todo) {
        let data = TodoModel.read()
        let id = 1
        if (data.length !== 0) {
            id = data[data.length - 1].id + 1
        }
        const complete = false
        const createdAt = new Date().toISOString()
        const completedDate = ""

        let newData = new TodoModel(id, todo, complete, createdAt, completedDate)

        data.push(newData)
        TodoModel.save(data)
        return newData

    }

    static findById(id) {
        let data = TodoModel.read()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                return [data[i]]
            }
        }

        return []
    }


    static delele(id) {
        const data = TodoModel.read()
        const newData = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].id != id) {
                newData.push(data[i])
            }
        }
        this.save(newData)
    }

    static complete(id, status) {
        const data = TodoModel.read()

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data[i].complete = status
                if (status) {
                    data[i].completedDate = new Date().toISOString()
                } else {
                    data[i].completedDate = ''
                }
            }
        }

        TodoModel.save(data)
    }

    static sort(order, data, by) {

        for (let i = 0; i < data.length - 1; i++) {
            for (let j = 0; j < data.length - 1 - i; j++) {
                if (order === "desc") {
                    if (data[j][by] < data[j + 1][by]) {
                        let temp = data[j]
                        data[j] = data[j + 1]
                        data[j + 1] = temp
                    }
                } else {
                    if (data[j][by] > data[j + 1][by]) {
                        let temp = data[j]
                        data[j] = data[j + 1]
                        data[j + 1] = temp
                    }
                }
            }
        }

        return data
    }


    static listCreated(order) {
        const data = TodoModel.read()

        TodoModel.sort(order, data, "createdAt")

        return data
    }

    static listComplete(order) {
        const data = TodoModel.read()
        let newData = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].complete) {
                newData.push(data[i])
            }
        }


        newData = TodoModel.sort(order, newData, "completedDate")

        return newData
    }


    static tag(id, tagParse) {
        const data = TodoModel.read()
        let tagedData;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                tagedData = data[i]
                let tag = []
                if (data[i]["tag"]) {
                    tag = data[i]["tag"]
                }

                for (let j = 0; j < tagParse.length; j++) {
                    tag.push(tagParse[j])
                }

                data[i]["tag"] = tag
                break;
            }
        }

        TodoModel.save(data)

        return tagedData
    }


    static filter(tag) {
        let output = []
        const data = TodoModel.read()
        for (let i = 0; i < data.length; i++) {
            if (data[i].tag) {
                let len = data[i].tag.length
                for (let j = 0; j < len; j++) {
                    if (data[i].tag[j] == tag) {
                        output.push(data[i])
                        break;
                    }
                }
            }
        }

        return output
    }

}

module.exports = TodoModel