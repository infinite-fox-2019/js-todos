const fs = require('fs');

class TodoModel {
    static getList() {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        return todos;
    }
}

module.exports = TodoModel;