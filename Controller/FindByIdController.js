const FindById = require('../Model/FindById')
const FindByIdView = require('../View/FindByIdView')

class FindByIdController {
    static findData(id) {
        const data = FindById.findData(id)
        FindByIdView.viewlist(data)
    }

}

module.exports = FindByIdController