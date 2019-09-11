const Model = require("../Model/Model.js")
const View = require("../View/ToDoView.js")

class ToDoController {
    constructor (){
        this.list = []
    }

    static help (){
        View.help()
    }

    static list (){
        this.list = Model.list()
        View.list(this.list)
    }

    static add(activity){
        Model.add (activity)
        View.save (activity)
    }

    static findById(id){
        let data = Model.findById(id)
        View.list(data)
    }

    static delete(id){
        let activity = Model.delete (id)
        View.delete (activity)
    }

    static complete(id){
        let complete = Model.complete (id)
        View.complete (complete)
    }

    static uncomplete(id){
        let uncomplete = Model.uncomplete (id)
        View.uncomplete (uncomplete)
    }

    static createdAsc(){
        let createdAsc = Model.createdAsc()
        View.list(createdAsc)
    }

    static createdDesc(){
        let createdDesc = Model.createdDesc()
        View.list(createdDesc)
    }

    static listCompletedAsc() {
        let listCompletedAsc = Model.listCompletedAsc()
        View.list(listCompletedAsc)
    }

    static listCompletedDesc() {
        let listCompletedDesc = Model.listCompletedDesc()
        View.list(listCompletedDesc)
    }

    static tag (id, tagName){
        let tag = Model.tag(id, tagName)
        View.tag(tag, tagName)
    }

    static filterTag (tagName){
        let filtertag = Model.filterTag(tagName)
        View.list(filtertag)
    }
}


module.exports = ToDoController