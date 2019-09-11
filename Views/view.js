
class View{

    static help() {
        console.log(
        `          -------== TO DO LIST HELP ==-------

          $ node todo.js
          $ node todo.js help
          $ node todo.js list
          $ node todo.js add <task_content>
          $ node todo.js findById <task_id>
          $ node todo.js delete <task_id>
          $ node todo.js complete <task_id>
          $ node todo.js uncomplete<task_id>
          `
          )
    }

    static list(data) {
        console.log('-------== HERE\'S YOUR LIST ==-------\n')
        for (let i=0; i<data.length; i++){
            if (data[i].isComplete == false){
            } else console.log(`${data[i].id}. [x] ${data[i].task}`)
        }
    }

    static showAdd(data) {
        console.log()
        console.log(`Added ${data.task} to your TODO list...`)
    }

    static showTaskId(taskById) {
        console.log(`${taskById.id}. ${taskById.task}`)
    }
    static showDeleted(taskById) {
        console.log(`Deleted ${taskById} from your TODO list...`)
    }
    static showResultStatus(data) {
        console.log('-------== HERE\'S YOUR LIST ==-------\n')
        console.table(data)
    }

    
}

module.exports = View