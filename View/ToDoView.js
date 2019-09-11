
class ToDoView {
    static help (){
        console.log("list : untuk menampilkan semua to do list yang ada")
        console.log("add <activitity> : untuk menambahkan activity baru")
        console.log("findById <id> : untuk menampilkan to do list dari id tertentu")
        console.log("delete <id> : untuk menghapus to do list dari id tertentu")
        console.log("complete <id> : untuk mencentang status pada id tertentu")
        console.log("uncomplete <id> : untuk mengkosongkan status pada id tertentu")
        console.log("list:created asc|desc : untuk menampilkan list yang urut berdasarkan waktu, bisa ascending atau descending")
        console.log("list:completed asc|desc : untuk menampilkan list yang sudah complete dan urut berdasarkan waktu, bisa ascending atau descending")
        console.log("tag <id> <tag_name_1> <tag_name_2> .. : untuk menambahkan tagname pada id tertentu, bisa lebih dari 1 tagname")
        console.log("filter:<tag_name> : untuk menampilkan to do list dengan tag name tertentu")
    }

    static list (list){
        console.log("=====================================================");
        console.log("                        TO DO LIST                   ");
        console.log("=====================================================");
        console.table(list)
    }

    static save (activity){
        console.log(`"${activity}" berhasil ditambahkan`);
    }

    static delete (activity){
        console.log(`"${activity}" berhasil dihapus`);
    }

    static complete (activity){
        console.log(`"${activity}" berhasil di complete`);
    }

    static uncomplete (activity){
        console.log(`"${activity}" berhasil di uncomplete`);
    }

    static tag (activity, tag){
        let hasil = `${activity} berhasil diisi dengan tag name: ${tag.join(", ")}`
        console.log(hasil);
    }
}

module.exports = ToDoView