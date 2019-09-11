class ViewMessage {
    static showHelp() {
        console.log("node todo.js help --> to view all the command lines");
        console.log("node todo.js list --> to view all the to do list");
        console.log("node todo.js add <task_content --> to add a new task");
        console.log("node todo.js findById <task_id> --> to find task by its ID");
        console.log("node todo.js delete <taks_id> --> to delete a task using its ID");
        console.log("node todo.js complete <taks_id> --> to mark completed task");
        console.log("node todo.js incomplete <taks_id> --> to mark incomplete task");
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
        console.log(completedTask);
    }

    static showIncompletedTask(incompletedTask) {
        console.log(incompletedTask);
    }
}

module.exports = ViewMessage;