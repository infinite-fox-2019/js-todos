const fs = require('fs');

class Todo {
    constructor (id, status, task, created, completedDate, tag) {
        this.id = id;
        this.status = status;
        this.task = task;
        this.created = created;
        this.completedDate = completedDate;
        this.tag = tag;
    }

    static sortCreated(array, type) {
      for (var i = 0; i < array.length; i++) {
        var indexMinimum = i;
        for (var j = i; j < array.length; j++) {
          if (type === 'asc') {
            if (array[j].created<array[indexMinimum].created) {
              indexMinimum = j;
            }  
          } else {
            if (array[j].created>array[indexMinimum].created) {
              indexMinimum = j;
            } 
          }
        }
        var temp = array[i];
        array[i] = array[indexMinimum];
        array[indexMinimum] = temp;
      }
      return array;
    }

    static list (key, type) {
        const data = JSON.parse(fs.readFileSync('./data.json'))
        const arrayData = [];
        for (let i = 0; i < data.length; i++) {
            arrayData.push(new Todo(data[i].id, data[i].status, data[i].task, data[i].created, data[i].completedDate, data[i].tag));
        }
        if (key === 'created') {
            this.sortCreated(arrayData, type);
        } else if (key === 'completed') {
            const arrayCompleted = []
            for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].status === 'x') {
                    arrayCompleted.push(arrayData[i])
                }
            }
            return this.sortCreated(arrayCompleted, type);
        }
        return arrayData;
    }
    static add (task) {
        const listTodo = this.list();
        listTodo.push(new Todo(listTodo.length+1, " ", task, new Date, null, []));
        this.save(listTodo);
    }
    static addTag (id, arrayTag) {
        const listTodo = this.list();
        let taggedTask = '';
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                taggedTask = listTodo[i].task;
                listTodo[i].tag = arrayTag;
            }
        }
        this.save(listTodo);
        return taggedTask;
    }
    static filter (tag) {
        const listTodo = this.list();
        let tagTask = [];
        for (let i = 0; i < listTodo.length; i++) {
            for (let j = 0; j < listTodo[i].tag.length; j++) {
                if (listTodo[i].tag[j] === tag) {
                    tagTask.push(listTodo[i]);
                }
            }
        }
        return tagTask;
    }
    static findById (id) {
        const listTodo = this.list();
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                return listTodo[i];
            }
        }
    }
    static deleteTask (id) {
        const listTodo = this.list();
        const task = {
            id: 0,
            task: ''
        }
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                task.id = listTodo[i].id;
                task.task = listTodo[i].task;
                listTodo.splice(i, 1);
            }
        }
        this.save(listTodo);
        return task;
    }
    static completeTask(id, key) {
        const listTodo = this.list();
        for (let i = 0; i < listTodo.length; i++) {
            if (listTodo[i].id === id) {
                if (key === 'complete') {
                    listTodo[i].status = "x";
                    listTodo[i].completedDate = new Date;
                } else if (key === 'uncomplete') {
                    listTodo[i].status = " ";
                    listTodo[i].completedDate = null;
                }
            }
        }
        this.save(listTodo);
        return listTodo;
    }
    static save (data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }
}

// console.log(Todo.sort(Todo.list()));


module.exports = Todo;