const fs = require("fs");

class Task {
    constructor(id, kegiatan, date,status,update){
        this.id = id;
        this.kegiatan = kegiatan;
        this.status = status;
        this.date = new Date(date).toISOString();
        this.update = update;
        this.tag = [];
    }

    static save(param){
        fs.writeFileSync("./data.json" , JSON.stringify(param, null, 2));
    }

    static listKegiatan(){
        const bacaData = JSON.parse(fs.readFileSync("./data.json"));
        // console.log(bacaData)
        let arrKegiatan = [];
        for (let i = 0; i < bacaData.length; i++){
            arrKegiatan.push(new Task(bacaData[i].id, bacaData[i].kegiatan, bacaData[i].date,bacaData[i].status,bacaData[i].update));
        }
        Task.save(arrKegiatan);
        return arrKegiatan;
    }

    static addKegiatan(kegiatan){
        const addKegiatan = Task.listKegiatan();
        let id = null;
        if(addKegiatan.length === 0){
            id = 1 ;
        } else {
            id = addKegiatan[addKegiatan.length-1].id + 1;
        }
        
        addKegiatan.push(new Task(id, kegiatan, new Date,false, null));
        Task.save(addKegiatan);
    }

    static findById (num){
        const addKegiatan = Task.listKegiatan();
        for(let i = 0; i < addKegiatan.length;i++){
            if (addKegiatan[i].id == num){
                return addKegiatan[i];
            }
        }
    }

    static deleteById (num){
        const deleteKegiatan = Task.listKegiatan();
        for(let i = 0; i < deleteKegiatan.length;i++){
            if (deleteKegiatan[i].id == num){
                deleteKegiatan.splice(i,1);
            }
        }
        Task.save(deleteKegiatan);
    }

    static complete(num){
        const completeKegiatan = Task.listKegiatan();
        for(let i = 0; i < completeKegiatan.length;i++){
            if (completeKegiatan[i].id == num){
                completeKegiatan[i].status = true;
                completeKegiatan[i].update = new Date().toISOString();
            }
        }
        Task.save(completeKegiatan);
        return completeKegiatan;
    }

    static uncomplete(num){
        const unCompleteKegiatan = Task.listKegiatan();
        for(let i = 0; i < unCompleteKegiatan.length;i++){
            if (unCompleteKegiatan[i].id == num){
                unCompleteKegiatan[i].status = false;
                unCompleteKegiatan[i].update = null;
            }
        }
        Task.save(unCompleteKegiatan);
        return unCompleteKegiatan;
    }

    static listCreated(str){
        let arrKegiatan = Task.listKegiatan();
        if(str == "desc"){
            for(let i = 0; i < arrKegiatan.length-1; i++){
                for(let j = i; j >= 0; j--){
                    let minimum = arrKegiatan[j].date;
                    if(minimum<arrKegiatan[j+1].date){
                        let temp = arrKegiatan[j];
                        arrKegiatan[j] = arrKegiatan[j+1];
                        arrKegiatan[j+1] = temp;
                    }
                }
            }
        } else if (str == "asc"){
            for(let i = 0; i < arrKegiatan.length-1; i++){
                for(let j = i; j >= 0; j--){
                    let minimum = arrKegiatan[j].date;
                    if(minimum>arrKegiatan[j+1].date){
                        let temp = arrKegiatan[j];
                        arrKegiatan[j] = arrKegiatan[j+1];
                        arrKegiatan[j+1] = temp;
                    }
                }
            }
        }
        return arrKegiatan;
    }

    static listCompleted (str){
        let arrComplete = [];
        let arrKegiatan = Task.listKegiatan();
        for(let i = 0; i < arrKegiatan.length; i++){
            if(arrKegiatan[i].status == true){
                arrComplete.push(arrKegiatan[i]);
            }
        }
        if(str == "desc"){
            for(let i = 0; i < arrComplete.length-1; i++){
                for(let j = i; j >= 0; j--){
                    let minimum = arrComplete[j].update;
                    if(minimum<arrComplete[j+1].update){
                        let temp = arrComplete[j];
                        arrComplete[j] = arrComplete[j+1];
                        arrComplete[j+1] = temp;
                    }
                }
            }
        } else if (str == "asc"){
            for(let i = 0; i < arrComplete.length-1; i++){
                for(let j = i; j >= 0; j--){
                    let minimum = arrComplete[j].date;
                    if(minimum>arrComplete[j+1].date){
                        let temp = arrComplete[j];
                        arrComplete[j] = arrComplete[j+1];
                        arrComplete[j+1] = temp;             
                    }
                }
            }
        }
        return arrComplete;
    }

    static tag(num,arr){
        let tagId = Task.listKegiatan();
        for(let i = 0; i < tagId.length; i++){
            if (tagId[i].id == num){
                for(let j = 0; j < arr.length; j++){
                    tagId[i].tag.push(arr[j]);
                }
            }
        }
        Task.save(tagId);
        return tagId;
    }
}
// Task.addKegiatan("tidur");
// console.log(Task.listKegiatan())
// console.log(Task.findById(2))
// Task.deleteById(4);
// console.log(Task.listKegiatan())
// console.log(Task.uncomplete(2))
module.exports = Task;