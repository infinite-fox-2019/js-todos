const fs = require ("fs")

class Task {
    constructor(id,task,completed,date){
       this.id = id
       this.task = task
       this.completed = completed
       this.date = Date()
    }

    static taskList(){
        const list = JSON.parse(fs.readFileSync('./data.json'));
        const listOfTask = []
        for(let i = 0; i<list.length;i++){
            listOfTask.push(new Task(list[i].id, list[i].task, list[i].completed, list[i]))
        }
        return listOfTask
    }

    static viewAll(){
        const data = this.taskList()
        let previewAll = []
        let temp = '' 
        let checkBox = '[ ]'
        for(let i = 0 ; i < data.length ; i++){
            if(data[i].completed == true){
                checkBox = '[X]'
            }else{
                checkBox = '[ ]'
            }
                temp += data[i].id +'. ' + checkBox + data[i].task
                previewAll.push(temp)
                temp = ''
        }
        return previewAll
    }

    static addTask(update){

        const listBefore = this.taskList()
        const newId = listBefore[listBefore.length-1].id + 1
        listBefore.push(new Task(newId, update, false))
        this.save(listBefore)
    }
    
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data,null,2))
    }

    static findID(num){
        const allTask = this.taskList()
        // const specificID = []
        for(let i = 0 ; i < allTask.length; i++){
            if(allTask[i].id == num){
                return allTask[i]
            }
        }
    }

    static deleteID(num){
        const allTask = this.taskList()

        for(let i = 0; i < allTask.length; i++){
            if(allTask[i].id == num){
                allTask.splice(i,1)
                // console.log(allTask[i])
            }
        }
        this.save(allTask)
        // return allTask
    }

    static completeID(num){
        const allTask = this.taskList()
        let str = ''
        // let checkerList = []
        for(let i = 0 ; i < allTask.length; i++){
            if(allTask[i].id == num){
                allTask[i].completed = true
            }
        }
        this.save(allTask)
    }
}

module.exports = Task
// console.log(studentList)