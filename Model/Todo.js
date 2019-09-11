const fs = require('fs')

class Todo {
    constructor(id, todo) {
        this.id = id
        this.todo = todo
        this.completed = ''
        this.createdAt = new Date()
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
        let temp_data = data[id-1] 

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
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
                data[i].createdAt = new Date()
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

    static created_asc() {
        const data = JSON.parse(fs.readFileSync('./data.json'))

        data.sort(function(a,b){
            var c = new Date(a.createdAt);
            var d = new Date(b.createdAt);
            return c-d;
        });

        return data
    }

    static created_desc(){
        const data = JSON.parse(fs.readFileSync('./data.json'))

        data.sort(function(a,b){
            var c = new Date(a.createdAt);
            var d = new Date(b.createdAt);
            return d-c;
        });

        return data
    }

}

module.exports = Todo
