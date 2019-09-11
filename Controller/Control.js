const Model = require('../Model/Model');
const View = require('../View/View');
class TodoController {
    static list() {
        let list = Model.list();
        View.View(list);
    }
    static add(task) {
        Model.add(task);
        View.save(task);
    }
    static findById(id) {
       let data = Model.findById(id)
        View.View(data);
    }
    static delete(id){
        let data = Model.delete(id);
        View.delete(data);
    }
    static complete(id){
        let data = Model.complete(id);
        View.complete(data);
    }
    static uncomplete(id){
        let data = Model.uncomplete(id);
        View.uncomplete(data);
    }
    static asc() {
        let data = Model.asc();
        View.View(data);
    }
    static desc() {
        let data = Model.desc();
        View.View(data);
    }
    static completeAsc() {
        let data = Model.completeAsc();
        View.View(data);
    }
    static completeDesc() {
        let data = Model.completeDesc();
        View.View(data);
    }
    static tag(id,tagName) {
        let data = Model.tag(id,tagName);
        View.View(data);
    }
    static filterTag(tagName) {
        let data = Model.filterTag(tagName);
        View.View(data);
    }
}

module.exports = TodoController;