const List = require('../Model/List')
const ListView = require('../View/ListView')

class ListController {
    static findAll() {
        const data = List.findAll()
        ListView.viewlist(data)
    }
}

module.exports = ListController