class ViewMessage {
    static showHelp() {
        console.log(`
        node todo.js help --> to view all the command lines \n
        node todo.js list --> to view all the to do list \n
        node todo.js add <task_content --> to add a new task \n
        node todo.js findById <task_id> --> to find task by its ID \n
        node todo.js delete <taks_id> --> to delete a task using its ID \n
        node todo.js complete <taks_id> --> to mark completed task \n
        node todo.js incomplete <taks_id> --> to mark incomplete task`);
    }

    static showAllTask(allTasks){
        console.log(allTasks);
    }

    static showAddedTask(addedTask) {
        console.log(`Added ${addedTask.task} to your TO DO list.`);
    }

    static showTaskById(findById) {
        console.log(findById);
    }

    static showDeletedTask(deletedTask) {
        console.log(deletedTask);
    }

    static showCompletedTask(completedTask) {
        for(let i = 0; i < completedTask.length; i++) {
            if(completedTask[i].status === true) {
                completedTask[i].status = '[x]';
            } else {
                completedTask[i].status = '[ ]';
            }
            console.log(`${completedTask[i].id} ${completedTask[i].status} ${completedTask[i].task}`);
        }
    }

    static showIncompletedTask(incompletedTask) {
        for(let i = 0; i < incompletedTask.length; i++) {
            if(incompletedTask[i].status === false) {
                incompletedTask[i].status = '[ ]';
            } else {
                incompletedTask[i].status = '[x]';
            }
            console.log(`${incompletedTask[i].id} ${incompletedTask[i].status} ${incompletedTask[i].task}`);
        }
    }

    static ascByDate(allTask) {
        console.log(allTask)
    }
    static descByDate(allTask) {
        console.log(allTask)
    }

    static showCompleteAsc(completeAsc) {
        console.log(completeAsc);
    }

    static showCompleteDesc(completeDesc) {
        console.log(completeDesc);
    }

    static showTags(taggedTask) {
        console.log(taggedTask);
    }

    static showFilteredTag(filteredTaggedTask) {
        console.log(filteredTaggedTask);
    }

}

module.exports = ViewMessage;