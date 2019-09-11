

class DataView {
    static help() {
        console.log(` \n
        $ node todo.js \n
        $ node todo.js help \n
        $ node todo.js list \n
        $ node todo.js add <task_content> \n
        $ node todo.js findById <task_id> \n
        $ node todo.js delete <task_id> \n
        $ node todo.js complete <task_id> \n
        $ node todo.js uncomplete <task_id> \n`)
    }
    static list(contents) {
       console.table(contents)
    }
    static add(contents) {
        console.log(`Added ${contents} to your TODO list...`)
    }
    static findById(content) {
        console.log(`${content.id}. ${content.task}`);
    }
    static delete(deletedTask) {
        console.log(`Deleted ${deletedTask.task} from your TODO list...`)
    }
}

module.exports = DataView