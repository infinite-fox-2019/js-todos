const Add = require('../Model/Add')


class AddController {
    static addData(todo) {
        Add.addData(todo)
    }
}

module.exports = AddController