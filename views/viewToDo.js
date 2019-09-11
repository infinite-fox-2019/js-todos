
// const ToDoControllers = require("../controllers/todoController")
const ModelToDo = require('../models/modelToDo')

class ViewToDo{
    
    static showHelp(){
        console.log("HAI, sepertinya butuh bantuan")
        console.log("list command yang ada adalah :")
        console.log("list, yaitu menampilkan To Do yang ada")
        console.log("add, yaitu menambahkan To Do baru, tambahkan kegiatan setelah command")
        console.log("findById, yaitu menambahkan To Do baru, tambahkan filter ID setelah command")
        console.log("delete, yaitu menghapus To Do yang ada, tambahkan delete setelah command")
        console.log("complete, yaitu menandakan To Do yang selesai, tambahkan perintah setelah command")
        console.log("uncomplete, yaitu menandakan To Do yang belum selesai, tambahkan perintah setelah command")
    }

    static showList(data){
        const hasil = []
        for(let i=0; i<data.length; i++){
            if(data[i].status===true){
                hasil.push(`[X] ${data[i].id}.${data[i].todo}`)
            }else{
                hasil.push(`[ ] ${data[i].id}.${data[i].todo}`)
            }
            
        }
        console.log(hasil.join("\n"))
    }

    static showSuccess(message) {
        console.log('Success:\n====================')
        console.log(message)
    }

    static showId(message) {
        console.log('Task by ID:\n====================')
        console.log(message)
    }

    static showDeleted(message){
        console.log('Task dihapus:\n====================')
        console.log(message)
    }

    static showCompleted(message){
        console.log('Task selesai:\n====================')
        console.log(message)
    }

    static showUnCompleted(message){
        console.log('Task belum selesai:\n====================')
        console.log(message)
    }

    static showTag(message){
        console.log('tag ditambahkan kedalam task:\n====================')
        console.log(message)
    }
    
    static showListComp(data){
        const hasil = []
        for(let i=0; i<data.length; i++){
            if(data[i].status===true){
                hasil.push(`[X] ${data[i].id}.${data[i].todo}`)
            }
        }
        for(let i=0; i<data.length; i++){
            if(data[i].status===false){
                hasil.push(`[ ] ${data[i].id}.${data[i].todo}`)
            }
        }
        console.log(hasil.join("\n"))
    }

    static showListCrt(data){
        const hasil = []
        for(let i=data.length-1; i>=0; i--){
            if(data[i].status===true){
                hasil.push(`[X] ${data[i].id}.${data[i].todo}`)
            }else{
                hasil.push(`[ ] ${data[i].id}.${data[i].todo}`)
            }
        }
        console.log(hasil.join("\n"))
    }

    static showInvalid(){
        console.log(`input invalid, cek kembali`)
    }
}

module.exports = ViewToDo