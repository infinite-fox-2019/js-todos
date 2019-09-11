class Views {
    static list(data) {
        console.table(data);
        for(let i = 0 ; i < data.length; i++){
            if (data[i]._completed == true) {
                console.log(`${data[i]._id}. [X] ${data[i]._task}`);
            } else {
                console.log(`${data[i]._id}. [ ] ${data[i]._task}`);
            }
        }
    }
    static message(task) {
        console.log(`${task} successfully add.`)
    }
    static findById(data){
        if (data.length !== 0) {
            console.log(data);
        } else {
            console.log('ID tidak ditemukan');
        }
    }
    static deleteMessage(data){
        if (data.length !== 0) {
            console.log(`ID ${data[0]._id} successfully delete.`);
        } else {
            console.log('ID tidak ditemukan');
        }
    }
    static completeMessage(data){
        if (data.length !== 0) {
            console.log(`ID ${data} successfully complete task.`);
        } else {
            console.log('ID tidak ditemukan');
        }
    }
    static sortAsc(data){
        Views.list(data)
        // console.log(data);
    }
    static sortDsc(data){
        Views.list(data)
        // console.log(data);
    }
    static filter(data){
        if (data.length == 0) {
            console.log('tag tidak ditemukan!')
        }
        for(let i = 0 ; i < data.length; i++){
            console.log(`${data[i]._id}. [ ${data[i]._tag} ]`);
        }
    }
}

module.exports = Views