const view = require('../view/')
const modelList = require('../model/list')

class Controller {
    static list(){
        const dataBase = modelList.viewAll()  
        view.viewAll(dataBase)   
    }

    static help(){
        view.help()
    }

    static add(update){
        const add = modelList.addTask(update)
    }

    static findID(num){
        const findID = modelList.findID(num)
        view.findID(findID)
    }

    static deleteID(num){
        const deleteID = modelList.deleteID(num)
        // view.deleteId(deleteID) 
    }

    static completeID(num){
        const completeID = modelList.completeID(num)
        view.completeID(completeID)
    }
    // static add()
}

module.exports = Controller