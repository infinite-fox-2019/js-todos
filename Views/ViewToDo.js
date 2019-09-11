class ViewToDo{
    static viewAll(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            else{
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static addTask(task){
        console.log(task);
    }
    static findId(task){
        console.log(task);
    }
    static deleteTask(task){
        console.log(task);
    }
    static completeTask(task){
        console.log(task);
    }
    static uncompleteTask(task){
        console.log(task);
    }
    static sortDate(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            else{
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static sortDateDesc(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            else{
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static viewCompletedASC(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static viewCompletedDESC(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static viewUncompleteASC(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == false){
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static viewUncompleteDESC(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == false){
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static addTags(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            else{
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }
    static searchFilterASC(toDo){
        for(let i = 0; i<toDo.length; i++){
            let status = '';
            if(toDo[i].status == true){
                status = '[X]'
            }
            else{
                status = '[ ]'
            }
            console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
        }
    }

    // static searchFilterDESC(toDo){
    //     for(let i = 0; i<toDo.length; i++){
    //         let status = '';
    //         if(toDo[i].status == true){
    //             status = '[X]'
    //         }
    //         else{
    //             status = '[ ]'
    //         }
    //         console.log(`${toDo[i].id}. ${status} ${toDo[i].task}. Tagsnya: ${toDo[i].tags}. Tanggal Pembuatan: ${toDo[i].date} \n`);
    //     }
    // }
}

module.exports = ViewToDo;