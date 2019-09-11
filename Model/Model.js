const fs = require('fs');
const data =  JSON.parse(fs.readFileSync('./data.json',JSON,'utf8'));

class Todo {
    constructor (id,task,status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    static list() {
        let toDoArr = [];
        for (let i = 0; i < data.length; i++) {
            toDoArr.push(new Todo (data[i].id,data[i].task,data[i].status));
        }
        return toDoArr;
    }
    static add(task) {
        let newTask = {
            id: data[data.length-1].id + 1,
            task: task
        };
        data.push(newTask);
        Todo.save();
        
    }
    static save() {
        fs.writeFileSync('./data.json',JSON.stringify(data,null,2));
    }
    static findById(id) {
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].id) {
                result.push(data[i]);
            }
        }
        return result;
    }
    static delete(id) {
        let deleteResult = [];
        for(let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].id) {
                deleteResult.push(data[i].task);
                data.splice(i,1);
            }
        }
        Todo.save();
        return deleteResult;
    }
    static complete(id) {
        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].id) {
                data[i].status = ['X'];
            }
        }
        Todo.save();
        return data;
    }
    static uncomplete(id) {
        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].id) {
                data[i].status = [' '];
            }
        }
        Todo.save();
        return data;
    }
}
// Todo.add()
// const coba = TodoModel();
// console.log(TodoModel.list());

module.exports = Todo;