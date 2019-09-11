const fs = require('fs');

class ToDoList {
    constructor(id, task) {
        this.id = id;
        this.status = false;
        this.task = task;
    }

    static readTask() {
        const list = JSON.parse(fs.readFileSync('./data.json'));
        return list;
    }

    static showAllTask() {
        const list = this.readTask();
        const listArr = [];
        for(let i = 0; i < list.length; i++) {
            listArr.push(new ToDoList(list[i].id, list[i].task));
        }
        return listArr;
    }

    static addTask(task) {
        const list = this.readTask();
        let id = list[list.length-1].id + 1;
        const newTask = {id, task};
        list.push(newTask)
        const addedTask = new ToDoList(newTask.id, newTask.task);
        this.save(list);
        return addedTask;
    }

    static save(data) {
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 2));
    }

    static findById(id) {
        const allTasks = this.showAllTask();
        const taskById = [];
        const searchedId = parseInt(id)
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].id === searchedId) {
                taskById.push(allTasks[i]);
            }
        }
        return `${taskById[0].id}. ${taskById[0].task}`;
    }

    static deleteTaskById(id) {
        const allTasks = this.showAllTask();
        const searchedId = parseInt(id);
        const deletedTask = [];
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].id === searchedId) {
                deletedTask.push(allTasks[i]);
                allTasks.splice(i,1);
            }
        }
        this.save(allTasks);
        return `Deleted "${deletedTask[0].task}" from your TODO list.`;
    }

    static completedTaskById(id) {
        const allTasks = this.showAllTask();
        const searchedId = parseInt(id);
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].id === searchedId) {
                allTasks[i].status = true;
            }
        }
        this.save(allTasks);
        return allTasks;
    }
}

module.exports = ToDoList;