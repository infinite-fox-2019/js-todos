const fs = require('fs')

class Todo{
    constructor(status, id, task, created_date, completed_date, tags){
        this.status = status
        this.id = id
        this.task = task
        this.created_date = created_date || new Date()
        this.completed_date = completed_date || null
        this.tag = tags || []
    }

    static listTodo(){
        let tempList = []
        let file = JSON.parse(fs.readFileSync('./data.json'))
        for(let i = 0; i < file.length; i++){
            tempList.push(new Todo(file[i].status, file[i].id, file[i].task, file[i].created_date, file[i].completed_date, file[i].tag))
        }
        return tempList
    }

    static tambahTodo(task){
        let todoList = this.listTodo()
        let newId;
        if(todoList.length == 0){
            newId = 1
        } else {
            newId = Number(todoList[todoList.length-1].id) + 1
        }
        let newTask = task.join(' ')
        let newTodo = new Todo([],newId, newTask)
        todoList.push(newTodo)
        this.save(todoList)
    }

    static findById(num){
        let todoList = this.listTodo()
        return todoList.find(({id}) => id == num)
    }

    static delete(num){
        let todoList = this.listTodo()
        let newTodo = todoList.filter(({id}) => id != num)
        this.save(newTodo)
    }

    static complete(num){
        let todoList = this.listTodo()
        todoList.forEach(a => {
            if( a.id == num){
                a.status.push('X')
                a.completed_date = new Date()
            }
        });
        this.save(todoList)
        return todoList
    }

    static uncomplete(num){
        let todoList = this.listTodo()
        todoList.forEach(a => {
            if( a.id == num){
                a.status = []
                a.completed_date = null
            }
        });
        this.save(todoList)
        return todoList
    }

    static sortByCreated(type){
        let todoList = this.listTodo()
        if(type == 'desc'){
            return todoList.sort((a, b) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime())
        } else {
            return todoList.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())
        }
    }

    static sortByCompleted(type){
        let todoList = this.listTodo()
        if(type == 'desc'){
            return todoList.sort((a, b) => new Date(a.completed_date).getTime() - new Date(b.completed_date).getTime())
        } else {
            return todoList.sort((a, b) => new Date(b.completed_date).getTime() - new Date(a.completed_date).getTime())
        }
    }

    static addTag(arr){        
        let todoList = this.listTodo()
        let tagArr = arr.splice(1)
        todoList.forEach(a => {
            if( a.id == arr[0]){
                for(let i = 0; i < tagArr.length; i++){
                    a.tag.push(tagArr[i])
                }
            }
        });
        this.save(todoList)
        return todoList
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }
}


module.exports = Todo
