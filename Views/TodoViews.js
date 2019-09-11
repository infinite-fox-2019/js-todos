class Views{
    static tampilList(listData){
        console.log('==============================================');
        console.log('                 YOUR TODO LIST               ');
        console.log('==============================================');
        console.table(listData);
    }

    static tambahTodo(parameter, newListTodo){
        console.log('Done');
        console.log('------------');
        console.table(newListTodo);
        console.log('Added ' + parameter + ' to your TODO List.');        
    }

    static findById(objTask){
        console.table([objTask]);
    }

    static delete(num){
        console.log(`Todo with id-${num} successfully deleted`);
    }

    static complete(completed){
        console.table(completed);
    }

    static uncomplete(uncompleted){
        console.table(uncompleted);
    }

    static sortByCreated(listData){
        console.table(listData);
    }

    static sortByCompleted(listData){
        console.table(listData);
    }

    static addTag(newList){
        console.log('New tag successfully added');
        console.table(newList);        
    }
}

module.exports = Views
