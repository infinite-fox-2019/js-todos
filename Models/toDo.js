const fs = require('fs');

class ToDoList {
    constructor(date, id, status, task, tags = []) {
        this.createdDate = date;
        this.id = id;
        this.status = status;
        this.task = task;
        this.tags = tags;
    }

    static readTask() {
        const list = JSON.parse(fs.readFileSync('./data.json'));
        return list;
    }

    static showAllTask() {
        const list = this.readTask();
        const listArr = [];
        for(let i = 0; i < list.length; i++) {
            listArr.push(new ToDoList(list[i].createdDate, list[i].id, list[i].status, list[i].task, list[i].tags));
        }
        return listArr;
    }

    static addTask(task) {
        const list = this.readTask();
        let id = list[list.length-1].id + 1;
        let createdDate = new Date();
        let status = false;
        let tags = [];
        const addedTask = new ToDoList(createdDate, id, status, task, tags);
        list.push(addedTask);
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

    static incompletedTaskById(id) {
        const allTasks = this.showAllTask();
        const searchedId = parseInt(id);
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].id === searchedId) {
                allTasks[i].status = false;
            }
        }
        this.save(allTasks);
        return allTasks;
    }

    static asc() {
        const allTasks = this.showAllTask();
        for(let i = 0; i < allTasks.length; i++) {
            for(let j = i + 1; j < allTasks.length; j++) {
                if(allTasks[j].createdDate < allTasks[i].createdDate) {
                    var temp = allTasks[i];
                    allTasks[i] = allTasks[j];
                    allTasks[j] = temp
                }
            }
        }
        return allTasks;
    }

    static desc() {
        const allTasks = this.showAllTask();
        for(let i = 0; i < allTasks.length; i++) {
            for(let j = i + 1; j < allTasks.length; j++) {
                if(allTasks[j].createdDate > allTasks[i].createdDate) {
                    var temp = allTasks[i];
                    allTasks[i] = allTasks[j];
                    allTasks[j] = temp
                }
            }
        }
        return allTasks;
    }

    static completeSortAsc() {
        let result = [];
        const allTasks = this.asc();
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].status === true) {
                result.push(allTasks[i])
            }
        }
        return result;
    }

    static completeSortDesc() {
        let result = [];
        const allTasks = this.asc();
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].status === false) {
                result.push(allTasks[i])
            }
        }
        return result;
    }

    static tags(id, tags) {
        let allTasks = this.showAllTask();
        for(let i = 0; i < allTasks.length; i++) {
            if(parseInt(allTasks[i].id) === parseInt(id)) {
                allTasks[i].tags = tags;
            }
        }
        this.save(allTasks);
        return allTasks;
    }

    static filterTags(tags) {
        let allTasks = this.showAllTask();
        let result = [];
        for(let i = 0; i < allTasks.length; i++) {
            for(let j = 0; j < allTasks[i].tags.length; j++) {
                if(allTasks[i].tags[j] === tags) {
                    result.push(allTasks[i]);
                }
            }
        }
        return result;
    }

}

module.exports = ToDoList;