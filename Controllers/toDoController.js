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
}

module.exports = ToDoController;