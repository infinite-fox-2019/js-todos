const TodoList = require ('../Models/Task');
const View = require ('../Views/todoViews' );

class Controller {
    static takeData () {
        let show = View.ViewData ( TodoList.showData() );
        return show;
    }
    static addTodo ( name ) {
        let add = View.addData ( name , TodoList.add( name ) );
        return add;
    }
    static findData ( num ) {
        let get = View.viewFind ( TodoList.find ( num ) );
        return get;
    }
    static deleteData ( numm ) {
        let newData = View.viewDelete ( TodoList.delete ( numm ) );
        return newData;
    }
    static completeStatus ( num ) {
        let data = View.viewComplete ( TodoList.statusComplete ( num ) );
        return data;
    }
    static uncompleteStatus ( num ) {
        let uncom = View.viewUncomplete ( TodoList.statusUncomplete ( num ) );
        return uncom;
    }
    static listDesc () {
        let getDesc = View.viewListDesc ( TodoList.descList () );
        return getDesc;
    }
    static addTags ( arr ) {
        let getTags = View.viewAddTags ( TodoList.addTags ( arr ) );
        return getTags;
    }
    static getByTagFilter ( data ) {
        let getFilter = View.viewFilterTag ( TodoList.getbyFilter ( data ) );
        return getFilter;
    }
}

module.exports = Controller;