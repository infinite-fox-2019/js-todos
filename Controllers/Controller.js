const View = require('../Views/View')
const Model = require('../Models/Task')

class Controller {
  static help() {
    View.help()
  }
  static list() {
    View.list()
  }
  static add(parameters) {
    Model.add(parameters)
    View.add(parameters)
  }
  static findById(parameters) {
    View.findById(Model.findById(parameters))
  }
  static delete(parameters) {
    View.delete(Model.delete(parameters))
  }
  static complete(parameters) {
    Model.complete(parameters)
    View.list()
  }
  static uncomplete(parameters) {
    Model.uncomplete(parameters)
    View.list()
  }
  static listCreated(parameter) {
    Model.listSortByCreated(parameter)
    // View.list()
  }
}

module.exports = Controller 