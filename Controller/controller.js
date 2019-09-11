const ToDoModel = require ('../Model/model.js')
const ToDoView = require ('../View/view.js')

class ToDoControler {
  static help (){
    ToDoView.showHelp()
  }
  static list (){ 
    ToDoView.showList(ToDoModel.list())
  }
  static addList (add){
    const result = ToDoModel.add(add)
    if(result === 'success') ToDoView.addList(add)
  }
  static find (id){
    ToDoView.showList(ToDoModel.find(id))
  }
  static deleteList (del){
    const result = ToDoModel.delete(del)
    if(result === 'success') ToDoView.deleteList(del)
  }
  static completed (id){
    ToDoView.showList(ToDoModel.completed(id))
  }
  static uncompleted (id){
    ToDoView.showList(ToDoModel.uncompleted(id))
  }
  static dataSort (tipe){
    const result = ToDoModel.dataSort(tipe)
    ToDoView.showList(result)
  }
  static completedSort (tipe){
    const result = ToDoModel.completedSort(tipe)
    ToDoView.showList(result)
  }
  static tag (id,tagList){
    const result = ToDoModel.tag(id,tagList)
    if(result === 'success') ToDoView.tagList(id,tagList)
  }
  static filterTag (dataTag){
    const result = ToDoModel.filterTag(dataTag)
    ToDoView.showList(result)
  }
}



module.exports = ToDoControler