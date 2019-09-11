const view = require("../View/ViewTask.js");
const model = require("../Model/Task.js");
class ControllerTask {
    static view(){
        let arrList = model.listKegiatan();
        return view.viewList(arrList);
    }

    static add(str){
        model.addKegiatan(str);
        return view.viewAdd(str);
    }

    static delete(str){
        model.deleteById(str);
        return view.viewDel(str);
    }

    static findByID(num){
        model.findById(num);
        return view.findById(num);
    }

    static complete(num){
        let arrList = model.complete(num);
        return view.viewList(arrList);
    }

    static uncomplete(num){
        let arrList = model.uncomplete(num);
        return view.viewList(arrList);
    }

    static listCreated(str){
        let arrList = model.listCreated(str);
        return view.listCreated(arrList);
    }

    static listCompleted (str){
        let arrList = model.listCompleted(str);
        return view.listCompleted(arrList);
    }

    static tag (num,arr){
        let arrList = model.tag(num,arr);
        return view.tag(num,arrList);
    }
}

// ControllerTask.findByID(2);
module.exports = ControllerTask