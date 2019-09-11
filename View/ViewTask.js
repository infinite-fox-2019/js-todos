const arrModel = require("../Model/Task.js")
class ViewTask {
    static viewAdd(string){
        console.log(`Added ${string} to your TODO list ...`);
    }
    static viewDel(string){
        console.log(`Deleted activity with id ${string} to your TODO list ...`);
    }
    static viewList(arr) {
        let tanda = " ";
        let arrlist = arr;
        for(let i = 0; i < arrlist.length; i++){
            if (arrlist[i].status == true){
                tanda = "X";
            } else {
                tanda = " ";
            }
            console.log(`${arrlist[i].id}. [${tanda}] ${arrlist[i].kegiatan} created at ${arrlist[i].date}`);
        }
    }
    static findById(num){
        let tanda = " ";
        let dataTerpilih =  arrModel.findById(num);
        if(dataTerpilih.status == true){
            tanda = "X";
        } else {
            tanda = " "
        }
        console.log(`${dataTerpilih.id}. [${tanda}] ${dataTerpilih.kegiatan} created at ${dataTerpilih.date}`);
    }

    static listCreated(arr){
        let tanda = " ";
        let arrlist = arr;
        for(let i = 0; i < arrlist.length; i++){
            if (arrlist[i].status == true){
                tanda = "X";
            } else {
                tanda = " ";
            }
            console.log(`${arrlist[i].id}. [${tanda}] ${arrlist[i].kegiatan} created at ${arrlist[i].date}`);
        }
    }

    static listCompleted(arr){
        let tanda = " ";
        let arrlist = arr;
        for(let i = 0; i < arrlist.length; i++){
            if (arrlist[i].status == true){
                tanda = "X";
            } else {
                tanda = " ";
            }
            console.log(`${arrlist[i].id}. [${tanda}] ${arrlist[i].kegiatan} update at ${arrlist[i].update}`);
        }
    }

    static tag(num,arr){
        let arrList = arr;
        for (let i = 0; i < arrList.length; i++ ){
            if(arrList[i].id == num){
                console.log(`Tagged task "${arr[i].kegiatan}" with tags: ${arr[i].tag}`);
            }
        }
    }
}
module.exports = ViewTask;