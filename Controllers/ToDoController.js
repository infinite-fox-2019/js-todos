const ToDo = require('../Models/Todo');
const ViewToDo = require('../Views/ViewToDo');

class ToDoController{
    static viewAll(){
        const toDo = ToDo.viewAll();
        ViewToDo.viewAll(toDo);
    }
    static addTask(task){
        const addTask = ToDo.addTask(task);
        ViewToDo.addTask(addTask);
    }
    static findId(id){
        const taskById = ToDo.findId(id);
        ViewToDo.findId(taskById);
    }
    static deleteTask(id){
        this.findId
        const deleteTask = ToDo.deleteTask(id);
        ViewToDo.deleteTask(deleteTask);
    }
    static competeTask(id){
        const competeTask = ToDo.completeTask(id);
        ViewToDo.completeTask(competeTask);
    }
    static uncompleteTask(id){
        const uncompleteTask = ToDo.uncompleteTask(id);
        ViewToDo.uncompleteTask(uncompleteTask);
    }
    static sortDate(){
        const sortDate = ToDo.sortDate();
        ViewToDo.sortDate(sortDate);
    }
    static sortDateDesc(){
        const sortDateDesc = ToDo.sortDateDesc();
        ViewToDo.sortDateDesc(sortDateDesc)
    }
    static viewCompleteASC(){
        const viewCompleteASC = ToDo.viewCompleteASC();
        ViewToDo.viewCompletedASC(viewCompleteASC)
    }
    static viewCompleteDESC(){
        const viewCompleteDESC = ToDo.viewCompleteDESC();
        ViewToDo.viewCompletedDESC(viewCompleteDESC)
    }
    static viewUncompleteASC(){
        const viewUncompleteASC = ToDo.viewUncompleteASC();
        ViewToDo.viewUncompleteASC(viewUncompleteASC)
    }
    static viewUncompleteDESC(){
        const viewUncompleteDESC = ToDo.viewUncompleteDESC();
        ViewToDo.viewUncompleteDESC(viewUncompleteDESC)
    }
    static addTags(id, tags){
        const addTags = ToDo.addTags(id, tags);
        ViewToDo.addTags(addTags);
    }
    static searchFilter(tag){
        const searchFilter = ToDo.searchFilter(tag);
        ViewToDo.searchFilter(searchFilter)
    }
}

module.exports = ToDoController;