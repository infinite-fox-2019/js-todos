const ToDoList = require('../Models/toDo');
const ViewMessage = require('../Views/toDoView');

class ToDoController {
    static showHelp(){
        ViewMessage.showHelp();
    }

    static showAllTask() {
        const allTasks = ToDoList.showAllTask();
        ViewMessage.showAllTask(allTasks);
    }

    static addTask(task) {
        const addedTask = ToDoList.addTask(task);
        ViewMessage.showAddedTask(addedTask);
    }

    static findById(id) {
        const findById = ToDoList.findById(id);
        ViewMessage.showTaskById(findById);
    }

    static deleteTaskById(id) {
        const deletedTask = ToDoList.deleteTaskById(id);
        ViewMessage.showDeletedTask(deletedTask);
    }

    static completedTask(id) {
        const completedTask = ToDoList.completedTaskById(id);
        ViewMessage.showCompletedTask(completedTask);
    }

    static incompletedTask(id) {
        const incompletedTask = ToDoList.incompletedTaskById(id);
        ViewMessage.showIncompletedTask(incompletedTask);
    }

    static ascByDate() {
        const sortAsc = ToDoList.asc();
        ViewMessage.ascByDate(sortAsc);
    }

    static descByDate() {
        const sortDesc = ToDoList.desc();
        ViewMessage.descByDate(sortDesc);
    }

    static completeSortAsc() {
        const completeAsc = ToDoList.completeSortAsc()
        ViewMessage.showCompleteAsc(completeAsc);
    }

    static completeSortDesc() {
        const completeDesc = ToDoList.completeSortDesc()
        ViewMessage.showCompleteAsc(completeDesc);
    }

    static tags(id, tags) {
        const taggedTask = ToDoList.tags(id, tags)
        ViewMessage.showTags(taggedTask);
    }

    static filteredTag(tag) {
        const filteredTag = ToDoList.filterTask(tag);
        ViewMessage.showFilteredTag(filteredTag);
    }
}

module.exports = ToDoController;