const ToDoModels = require('../Models/toDoModel.js');
const ToDoViews = require('../Views/toDoViews.js')

class ToDoControllers {
  static viewAllList(){
    let allList = ToDoModels.data();
    return ToDoViews.viewAllList(allList);
  }

  static addData(addData){
    if(!addData){
      return ToDoViews.viewAddDataEmpty();
    }
    else{
      ToDoModels.addData(addData);
      return ToDoViews.viewAddData(addData);
    }
  }

  static findById(id){
    let data = ToDoModels.findById(id);
    return ToDoViews.findById(data);
  }

  static deleteData(id){
    let deletedData = ToDoModels.deleteData(id);
    if(!deletedData){
      ToDoViews.deleteDataNotFound(deletedData);
    }
    else{
      ToDoViews.deleteData(deletedData);
    }
  }

  static dataComplete(id){
    const newLists = ToDoModels.dataComplete(id);
    return ToDoViews.viewAllList(newLists);
  }

  static dataUncomplete(id){
    const newLists = ToDoModels.dataUncomplete(id);
    return ToDoViews.viewAllList(newLists);
  }

  static listCreated(ascDesc = 'asc'){
    return ToDoViews.viewAllList(ToDoModels.listCreated(ascDesc));
  }

  static listCompleted(ascDesc = 'asc'){
    return ToDoViews.viewAllList(ToDoModels.listCompleted(ascDesc));
  }

  static addTag(id,tag){
    const newData = ToDoModels.addTag(id,tag);
    return ToDoViews.addTag(newData, tag)
  }

  static filterTag(tag){
    return ToDoViews.filterTag(ToDoModels.filterTag(tag))
  }
}

module.exports = ToDoControllers;