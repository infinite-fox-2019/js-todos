class View {
    static help() {
        console.log('WELCOME TO TO DO LIST APPS');
        console.log('============================');
        console.log('node todo.js help = show available commands');
        console.log('node todo.js list = show to do list of yours');
        console.log('node todo.js add <task_content> = to add a task to your to do list');
        console.log('node todo.js findById <task_id> = take a look of your selected task');
        console.log('node todo.js delete <task_id> = delete the selected task');
        console.log('node todo.js complete <task_id> = mark the selected task as completed');
        console.log('node todo.js uncomplete <task_id> = mark the selected task as uncompleted');
    }

    static show(data) {
        console.table(data)
    }

    static successDeleted(deleted) {
        console.log(`Deleted "${deleted.name}" from your TODO list.`);
    }

    static status(data) {
        for (let i = 0; i < data.length; i++) {
            if (!data[i].done) {
                console.log(`[ ] ${data[i].name}`);
            } else {
                console.log(`[X] ${data[i].name}`)
            }
        }
    }

    static showError() {
        console.log('The task id you are looking for doesn`t exist.')
    }

}

module.exports = View