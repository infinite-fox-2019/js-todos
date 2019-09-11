const fs = require('fs')
const dataLocation = './data.json'
const data = fs.readFileSync(dataLocation);

class ToDo {
    constructor(id, status, task, date, comp_date, tags){
        this.id = id;
        this.status = status
        this.task = task;
        this.date = date;
        this.comp_date = comp_date;
        this.tags = tags;
    }

    static viewAll(){
        const ToDoData = []
        const dataToDo= JSON.parse(data);
        for(let i = 0; i<dataToDo.length; i++){
            ToDoData.push(new ToDo( dataToDo[i].id,dataToDo[i].status, dataToDo[i].task, dataToDo[i].date, dataToDo[i].comp_date, dataToDo[i].tags));
        }
        return ToDoData;
    }

    static addTask(task){
        const tasks = this.viewAll()
        let date = new Date().toISOString()
        if(!task){
            return 'task belum dimasukkan'
        }
        else{
            if(tasks.length == 0){
                tasks.push(new ToDo(1, false, task, date, null, []))
            }
            else{
                tasks.push(new ToDo(tasks[tasks.length-1].id + 1, false, task, date, null, []))
            }
            this.save(tasks);
            return `${task} sudah dimasukkan dalam todo list`
        }
    }

    static findId(id){
        const tasks = this.viewAll()
        const findId = []
        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].id == id){
                findId.push(tasks[i])
            }
        }

        return findId;
    }

    static deleteTask(id){
        const tasks = this.viewAll()
        let deleted = []
        let index = 0;

        if(tasks.length == 0){
            return `ToDo list masih kosong`
        }
        else{
            for(let i = 0; i<tasks.length;i++){
                if(tasks[i].id == id){
                    index = i;
                    deleted.push(tasks[i]);
                }
            }

            if(deleted.length == 0){
                return `tidak ada task pada id ${id}`
            }
            else{
                tasks.splice(index,1)
                this.save(tasks);
                return `${deleted[0].task}\n Sudah Dihapus`;
            }

        }
    }

    static completeTask(id){
        const tasks = this.viewAll();
        let isDone = false;
        let date = new Date().toISOString();

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].id == id){
                tasks[i].status = true;
                tasks[i].comp_date = date;
                isDone = true;
            }
        }

        if(isDone == false){
            return `tidak ada task pada id ${id}`
        }

        this.save(tasks)
        return `task dengan id ${id} sudah selesai`
    }

    static uncompleteTask(id){
        const tasks = this.viewAll();
        let isDone = false;

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].id == id){
                tasks[i].status = false;
                task[i].comp_date = null;
                isDone = true;
            }
        }

        if(isDone == false){
            return `tidak ada task pada id ${id}`
        }

        this.save(tasks);
        return `task dengan id ${id} belum selesai`
    }

    static sortDate(){
        const tasks = this.viewAll()

        for(let i = 0; i<tasks.length; i++){
            for(let j = i+1; j<tasks.length; j++){
                if(tasks[i].date > tasks[j].date){
                    let sementara = tasks[i];
                    tasks[i] = tasks[j];
                    tasks[j] = sementara;

                }
            }
        }
        return tasks;
    }

    static sortDateDesc(){
        const tasks = this.viewAll()

        for(let i = 0; i<tasks.length; i++){
            for(let j = i+1; j<tasks.length; j++){
                if(tasks[i].date < tasks[j].date){
                    let sementara = tasks[i];
                    tasks[i] = tasks[j];
                    tasks[j] = sementara;
                }
            }
        }
        return tasks;
    }

    static viewCompleteASC(){
        const tasks = this.viewAll()
        const completed = []

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].status == true){
                completed.push(tasks[i])
            }
        }

        for(let i = 0; i<completed.length; i++){
            for(let j = i+1; j<completed.length; j++){
                if(completed[i].comp_date > completed[j].comp_date){
                    let sementara = completed[i];
                    completed[i] = completed[j];
                    completed[j] = sementara;
                }
            }
        }

        if(completed.length == 0){
            return 'tidak ada task yang selesai'
        }
        else{
            return completed;
        }
    }

    static viewCompleteDESC(){
        const tasks = this.viewAll()
        const completed = []

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].status == true){
                completed.push(tasks[i])
            }
        }

        for(let i = 0; i<completed.length; i++){
            for(let j = i+1; j<completed.length; j++){
                if(completed[i].comp_date < completed[j].comp_date){
                    let sementara = completed[i];
                    completed[i] = completed[j];
                    completed[j] = sementara;
                }
            }
        }

        if(completed.length == 0){
            return 'tidak ada task yang selesai'
        }
        else{
            return completed;
        }
    }

    static viewUncompleteASC(){
        const tasks = this.viewAll()
        const unCompleted = []

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].status == false){
                unCompleted.push(tasks[i])
            }
        }

        for(let i = 0; i<unCompleted.length; i++){
            for(let j = i+1; j<unCompleted.length; j++){
                if(unCompleted[i].date > unCompleted[j].date){
                    let sementara = unCompleted[i];
                    unCompleted[i] = unCompleted[j];
                    unCompleted[j] = sementara;
                }
            }
        }

        if(unCompleted.length == 0){
            return 'tidak ada task yang belum selesai'
        }
        else{
            return unCompleted;
        }
    }

    static viewUncompleteDESC(){
        const tasks = this.viewAll()
        const unCompleted = []
        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].status == false){
                unCompleted.push(tasks[i])
            }
        }

        for(let i = 0; i<unCompleted.length; i++){
            for(let j = i+1; j<unCompleted.length; j++){
                if(unCompleted[i].date < unCompleted[j].date){
                    let sementara = unCompleted[i];
                    unCompleted[i] = unCompleted[j];
                    unCompleted[j] = sementara;
                }
            }
        }

        if(unCompleted.length == 0){
            return 'tidak ada task yang belum selesai'
        }
        else{
            return unCompleted;
        }
    }

    static addTags(id, tags){
        const tasks = this.viewAll();
        let index = 0;
        let isDone = false;

        for(let i = 0; i<tasks.length; i++){
            if(tasks[i].id == id){
                index = i
                for(let j = 0; j<tags.length; j++){
                    tasks[i].tags.push(tags[j]);
                    isDone = true
                }
            }
        }
        if(isDone == false){
            return `id ${id} tidak ditemukan `
        }
        this.save(tasks)
        return tasks[index]
    }

    static searchFilter(tag){
        const tasks = this.viewAll();
        let filtered = [];

        for(let i = 0; i<tasks.length; i++){
            for(let j = 0; j<tasks[i].tags.length; j++){
                if(tasks[i].tags[j] == tag){
                    filtered.push(tasks[i])
                    break;
                }
            }
        }
        return filtered;
    }

    static save(ToDoData){
        fs.writeFileSync(dataLocation, JSON.stringify(ToDoData, null, 2))
    }
}



module.exports = ToDo;