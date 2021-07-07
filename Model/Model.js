const fs = require('fs');
const data =  JSON.parse(fs.readFileSync('./data.json',JSON,'utf8'));
class Todo {
    constructor (id,task,status,time,tagName) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.time = time;
        this.tagName = tagName;
    }
    static list() {
        let toDoArr = [];
        for (let i = 0; i < data.length; i++) {
            toDoArr.push(new Todo (data[i].id,data[i].task,data[i].status,data[i].time,data[i].tagName));
        }
        return toDoArr;
    }
    static add(task) {
        let newTask = {
            id: 0,
            task: task,
            status: [' '],
            time: new Date,
            tagName: []
        };
        if (data.length === 0) {
            newTask.id = 1;
        } else {
            newTask.id = data[data.length-1].id +1;
        }
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
                data[i].status = ['V'];
                data[i].time = String(new Date());
            }
        }
        Todo.save();
        return data;
    }
    static uncomplete(id) {
        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].id) {
                data[i].status = [' '];
                data[i].time = String(new Date());
            }
        }
        Todo.save();
        return data;
    }
    static asc() {
        for (let i = 0; i < data.length; i++) {
            for (let j = i +1; j < data.length; j++) {
                if (data[i].time > data[j].time) {
                    [data[i],data[j]] = [data[j],data[i]];
                }
            }
        }
        return data;
    }
    static desc() {
        for (let i = 0; i < data.length; i++) {
            for (let j = i +1; j < data.length; j++) {
                if (data[i].time < data[j].time) {
                    [data[i],data[j]] = [data[j],data[i]];
                }
            }
        }
        return data;
    }
    static completeAsc() {
        let result = [];
        this.asc();
        for (let i = 0; i < data.length; i++) {
            if (data[i].status[0] === 'V') {
                result.push(data[i]);
            }
        }
        return result;
    }
    static completeDesc() {
        let result = [];
        this.desc();
        for (let i = 0; i < data.length; i++) {
            if (data[i].status[0] === 'V') {
                result.push(data[i]);
            }
        }
        return result;
    }
    static tag(id,tagName) {
        for (let i = 0; i < data.length; i++) {
            if (Number(data[i].id) === Number(id)) {
                data[i].tagName = tagName;
            }
        }
        Todo.save();
        return data;
    }
    static filterTag(tagName) {
        let result = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j< data[i].tagName.length; j++) {
                if (data[i].tagName[j] === tagName) {
                    result.push(data[i]);
                }
            }
        }
        return result;
    }
}
module.exports = Todo;