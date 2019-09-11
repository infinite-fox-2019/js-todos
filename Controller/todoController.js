const modelList = require('../Models/Task.js');
const viewList = require('../Views/viewList.js');

class ControllerToDo {
    static listController() {
        let viewData = viewList.viewListData(modelList.listData());
        return viewData;
    }

    static controllerAddData(input) {
        let pesan = 'Succsess Add Data :)';
        modelList.addData(input);
        viewList.viewAddData(modelList.listData(), pesan);
    }

    static controllerFindById(findId) {
        let findData = modelList.findData(findId);
        viewList.viewFindData(findData);
    }

    static controllerDeleteById(delId) {
        let deleteData = modelList.deleteData(delId);
        viewList.viewDeleteData(deleteData);
    }

    static controllerComplate(complate) {
        let complateData = modelList.complateData(complate);
        viewList.viewComplate(complateData);
    }

    static controllerUncomplate(uncomplate) {
        let uncomplateData = modelList.unComplateData(uncomplate);
        viewList.viewComplate(uncomplateData);
    }

    static controllerListCreated() {
        let listCreated = modelList.listCreated();
        viewList.viewListCreated(listCreated);
    }

    static controllerListComplated() {
        let listComplated = modelList.listComplated();
        viewList.viewListComplated(listComplated);
    }

    static controllerListCreatedDesc() {
        let listCreated = modelList.listCreatedDesc();
        viewList.viewListCreatedDesc(listCreated);
    }

    static controllerListComplatedDesc() {
        let listComplated = modelList.listComplatedDesc();
        viewList.viewListComplatedDesc(listComplated);
    }

    static controllerTag(arrTag) {
        let tagged = modelList.listTag(arrTag);
        viewList.viewListTag(tagged);
    }

    static controllerFilter(arrFilter) {
        let filtered = modelList.listFilter(arrFilter);
        viewList.viewListFiltered(filtered);
    }
};

module.exports = ControllerToDo;