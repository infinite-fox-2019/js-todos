const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

class Task {
    constructor(status, id, task, newDate, tag) {
        this.status = status;
        this.id = id;
        this.task = task;
        this.date = newDate;
        this.tag = tag;
    }

    static listData() {
        let arrData = [];
        for (let i = 0; i < data.length; i++) {
            arrData.push(new Task(data[i].status, Number(data[i].id), data[i].task, data[i].date, data[i].tag));
        }
        return arrData;
    }

    static addData(input) {
        let newStatus = false;
        let newDate = new Date();
        let recentData = Task.listData();
        let tag = [];
        if (recentData.length === 0) {
            let newId = 1;
            recentData.push(new Task(newStatus, newId, input, newDate, tag));
        } else {
            let newId = (Number(recentData[recentData.length - 1].id) + 1);
            recentData.push(new Task(newStatus, newId, input, newDate, tag));
        }

        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].status === false) {
                recentData[i].status = [];
            }
        }
        this.save(recentData);
        return recentData;
    }

    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }

    static findData(findData) {
        let recentData = Task.listData();
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].id == findData) {
                return recentData[i];
            }
        }
    }

    static deleteData(deleteData) {
        let recentData = Task.listData();
        let taskDel = '';
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].id == deleteData) {
                taskDel += recentData[i].task;
                recentData.splice(i, 1);
                this.save(recentData);
                return taskDel;
            } else if (i == recentData.length - 1 && recentData[i].id != deleteData) {
                taskDel += 'ID tidak tersedia'
                return taskDel;
            }
        }

    }

    static complateData(complateData) {
        let recentData = Task.listData();
        var pesan = '';
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].id == complateData) {
                if (recentData[i].status.length !== 0) {
                    pesan += `pilihan sudah di centang/complate, mohon inputkan ID yg lain`;
                    this.save(recentData);
                    return pesan;
                } else if (recentData[i].status.length === 0) {
                    recentData[i].status = ['x'];
                    pesan += `pilihan berhasil di centang`;
                    this.save(recentData);
                    return pesan;
                }
            } else if (i === recentData.length - 1) {
                pesan += 'ID tidak tersedia, mohon inputkan sesuai list ID yg tersedia';
            }
        }
        return pesan;
    }

    static unComplateData(uncomplateData) {
        let recentData = Task.listData();
        var pesan = '';
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].id == uncomplateData) {
                if (recentData[i].status.length === 0) {
                    pesan += `pilihan memang sudah uncomplate, mohon inputkan ID yg lain`;
                    this.save(recentData);
                    return pesan;
                } else if (recentData[i].status.length !== 0) {
                    recentData[i].status = [];
                    pesan += `pilihan berhasil di uncomplate`;
                    this.save(recentData);
                    return pesan;
                }
            } else if (i === recentData.length - 1) {
                pesan += 'ID tidak tersedia, mohon inputkan sesuai list ID yg tersedia';
            }
        }
        return pesan;
    }

    static listCreated() {
        let recentData = Task.listData();
        for (let i = 0; i < recentData.length; i++) {
            for (let j = i + 1; j < recentData.length; j++) {
                if (recentData[i].id > recentData[j].id) {
                    let temp = recentData[i];
                    recentData[i] = recentData[j];
                    recentData[j] = temp;
                }
            }
        }
        return recentData;
    }

    static listComplated() {
        let recentData = Task.listData();
        let dataComplated = [];
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].status.length !== 0) {
                dataComplated.push(recentData[i]);
            }
        }
        return dataComplated;
    }

    static listCreatedDesc() {
        let recentData = Task.listData();
        for (let i = 0; i < recentData.length; i++) {
            for (let j = i + 1; j < recentData.length; j++) {
                if (recentData[i].id < recentData[j].id) {
                    let temp = recentData[i];
                    recentData[i] = recentData[j];
                    recentData[j] = temp;
                }
            }
        }
        return recentData;
    }

    static listComplatedDesc() {
        let recentData = Task.listData();
        let dataComplated = [];
        for (let i = 0; i < recentData.length; i++) {
            if (recentData[i].status.length !== 0) {
                dataComplated.push(recentData[i]);
            }
        }
        for (let i = 0; i < dataComplated.length; i++) {
            for (let j = i + 1; j < dataComplated.length; j++) {
                if (dataComplated[i].id < dataComplated[j].id) {
                    let temp = dataComplated[i];
                    dataComplated[i] = dataComplated[j];
                    dataComplated[j] = temp;
                }
            }
        }
        return dataComplated;
    }

    static listTag(arrTag) {
        let recentData = Task.listData();
        for (let i = 1; i < arrTag.length; i++) {
            let checkTagNow = arrTag[i];
            for (let j = 0; j < recentData.length; j++) {
                if (arrTag[0] === recentData[j].id) {
                    for (let k = 0; k < recentData[j].tag.length; k++) {
                        if (checkTagNow !== recentData[j].tag[k]) {
                            recentData.push(checkTagNow);
                        }
                    }
                }
            }
        }
        this.save(recentData);
        return `add tag for ID : ${arrTag[0]} succsess, go check node todo.js list!`;
    }

    static listFilter(arrFilter) {
        let recentData = Task.listData();
        let dataFiltered = [];
        let statusFilter = false;
        for (let i = 0; i < arrFilter.length; i++) {
            for (let j = 0; j < recentData.length; j++) {
                for (let k = 0; k < recentData[j].tag.length; k++) {
                    if (recentData[j].tag[k] === arrFilter[i]) {
                        dataFiltered.push(recentData[j]);
                        statusFilter = true;
                    }
                }
            }
        }
        if (statusFilter === true) {
            return dataFiltered;
        }
        return 'filter no have result, coba masukan filter dengan kata lainnya, cek list todo'
    }
};

module.exports = Task;