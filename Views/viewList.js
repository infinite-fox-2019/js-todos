class ViewData {
    static viewListData(data) {
        console.log('List Todos :');
        console.log('------------------------------------');
        console.table(data);
    }

    static viewAddData(data, pesan) {
        console.log('List Todos recent, go check $ node todo.js list for view update data');
        console.log('------------------------------------');
        console.table(data);
        console.log(pesan)
    }

    static viewFindData(data) {
        console.log('List Todos Finded :');
        console.log('------------------------------------');
        console.log(data);
    }

    static viewDeleteData(data) {
        console.log(`Deleted ${data} from your TODO list`);
    }

    static viewComplate(data) {
        console.log(data);
    }

    static viewListCreated(data) {
        console.log('List Todos by Created :');
        console.log('------------------------------------');
        console.table(data);
    }

    static viewListComplated(data) {
        console.log('List Todos by Complated :');
        console.log('------------------------------------');
        console.table(data);
    }

    static viewListCreatedDesc(data) {
        console.log('List Todos by Created Descending :');
        console.log('------------------------------------');
        console.table(data);
    }

    static viewListComplatedDesc(data) {
        console.log('List Todos by Complated Descending:');
        console.log('------------------------------------');
        console.table(data);
    }

    static viewListTag(tag) {
        console.log(tag);
    }

    static viewListFiltered(filtered) {
        console.log('List Todos filtered by tag:');
        console.log('------------------------------------');
        console.table(filtered);
    }
}

module.exports = ViewData;