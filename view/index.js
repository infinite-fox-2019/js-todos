
class View {
    static help() {
        console.log('### help = menampilkan Command yang tersedia ###' ,'\n')
        console.log('### add <task_content = Menambahkan TO-DO kedalam list ###','\n')
        console.log('### findById <task_id> = Melihat detail TO-DO sesuai `task_id` nya ###','\n')
        console.log('### delete <task_id = Menghapus TO-DO sesuai `task_id` nya ###','\n')
        console.log('### complete <task_id> = Menandai TO-DO nya selesai ###','\n')
        console.log('### uncomplete <task_id = Menandai TO-DO nya belum selesai ###','\n')
    }

    static list(data) {
        console.log(data)
    }

    static viewAll(data){
        console.log(data)
    }

    static add(data){
        console.log(data)
    }

    static findID(data){
        console.log(data)
    }
    
    static deleteID(data){
        console.log(data)
    }

    static completeID(data){
        console.log(data)
    }
}

module.exports = View
