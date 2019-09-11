const fs = require("fs")

class Model {

    constructor(taskId, taskContent, hasCompleted = false, createdDate) {
        this._taskId = taskId;
        this._taskContent = taskContent;
        this._hasCompleted = hasCompleted;
        this._createdDate = createdDate || new Date();
    };

    get taskId() {
        return this._taskId;
    };

    get taskContent() {
        return this._taskContent;
    };

    get hasCompleted() {
        return this._hasCompleted;
    };

    get createdDate() {
        return this._createdDate;
    };

    set hasCompleted(complete) {
        return this._hasCompleted = complete;
    };

    ///////////////////////////////////////////////////////
    static saveData(todoArr) {
        const dataArr = [];
        for (let i = 0;i < todoArr.length;i++) {
            let objData = {
                id: todoArr[i]._taskId,
                task: todoArr[i]._taskContent,
                hasCompleted: todoArr[i]._hasCompleted,
                createdDate: todoArr[i]._createdDate
            };
         
            dataArr.push(objData)    
        }
        
        fs.writeFileSync("./data2.json",JSON.stringify(dataArr,null,2));
    };

    static loginSave (data) {
        fs.writeFileSync("./login.json",JSON.stringify(data,null,2));
    }//

    static findAll() {
        const data = JSON.parse(fs.readFileSync("./data2.json",'utf8'));
        let dataArr = [];
        for (let i = 0; i < data.length; i++) {
            let todo = new Model(data[i].id, data[i].task,data[i].hasCompleted,data[i].createdDate)
            dataArr.push(todo);
        }
        return dataArr;
    };

    static create(taskContent) {

        const dataArr = Model.findAll();
        let addId = (dataArr[dataArr.length-1]._taskId) + 1;
        
        const newData = new Model(addId,taskContent);

        dataArr.push(newData);
        Model.saveData(dataArr);
        return taskContent;
    
    };

    static findById(taskId) {

        const dataArr = Model.findAll();
        for (let i = 0; i < dataArr.length;i++) {
            if (taskId == dataArr[i]._taskId) {
                return dataArr[i]
            }
        }

    }

    static delete(taskId) {

        const dataArr = Model.findAll();
        const newDataArr = [];
        let deleteData = {};

        for (let i = 0; i < dataArr.length;i++) {
            if (taskId != dataArr[i]._taskId) {
                newDataArr.push(dataArr[i])
            }else {
                deleteData = dataArr[i]
            }
        };

        Model.saveData(newDataArr);
        
        return newDataArr;

    }//

    static status(taskId,status) {
        const dataArr = Model.findAll();

        for (let i = 0; i < dataArr.length;i++) {
            if (taskId == dataArr[i]._taskId) {
                dataArr[i].hasCompleted = status;
            }
        }//

        Model.saveData(dataArr);
        return dataArr;
        
    };

    static FindAllGame() {
        const game = JSON.parse(fs.readFileSync("./game.json",'utf8'));
        return game;
    }

    static login() {
        const dataLog = JSON.parse(fs.readFileSync("./login.json",'utf8'));
        return dataLog;
    }



    static createdDate (option) {
        const dataArr = Model.findAll();

        if (option == 'asc') {
            dataArr.sort((a,b) => new Date(a.createdDate) - new Date(b.createdDate))
        }else if (option == 'desc') {
            dataArr.sort((a,b) => new Date(b.createdDate) - new Date(a.createdDate));
        };
        return dataArr;
    }

}//

module.exports = Model;


