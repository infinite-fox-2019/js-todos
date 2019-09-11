const fs = require ('fs');
const listData = JSON.parse(fs.readFileSync('./data.json'));

class Task {
    constructor ( id , task, status , date , tags ) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.date = date;
        this.tags = tags
    }
    static showData () {
        let arrData = [];
        for( let i=0; i<listData.length; i++ ) {
            arrData.push(new Task(listData[i].id, listData[i].task , listData[i].status, listData[i].date , listData[i].tags))
        }
        return arrData;
    }

    static add ( task ) {
        let takeStatus = false;
        let newDate = new Date ();
        let take = this.showData();
        let idd = Number((take[take.length-1].id)+1);
        take.push(new Task( idd , task , takeStatus , newDate ));
        this.save(take);
    }
    static save ( task ) {
        fs.writeFileSync('./data.json',JSON.stringify(task, null ,5))
    }
    static find ( num ) {
        let listData = this.showData();
        let tamp = '';
        for ( let i=0; i<listData.length; i++ ) {
            if ( listData[i].id == Number( num ) ) {
                tamp = listData[i].task;
            }
        }
        return tamp;
    }
    static delete ( num ) {
        let getData = this.showData ();
        let newData = []
        for ( let i=0 ; i<getData.length; i++ ) {
            if ( getData[i].id == num ) {
                newData = getData.splice ( i , 1 );
            }
        }
        this.save ( getData );
        return newData;
    }
    static statusComplete ( num ) {
        let getData = this.showData ();
        for ( let i=0; i<getData.length; i++ ) {
            if ( getData[i].id == num ) {
                getData[i].status = true;
            }
        }
        this.save ( getData )
        return getData;
    }
    static statusUncomplete ( num ) {
        let getData = this.showData ();
        for ( let i=0; i<getData.length; i++ ) {
            if ( getData[i].id == num ) {
                getData[i].status = false;
            }
        }
        this.save ( getData );
        return getData;
    }
    static descList () {
        let getData = this.showData();
        let data = [];
        for ( let i=getData.length-1; i>=0; i-- ) {
            data.push( getData[i] );
        }
        return data;
    }
    static addTags ( arr ) {
        let getData = this.showData ();
        let getTags = arr.slice(1);
        for ( let i=0; i<getData.length; i++ ) {
            if ( getData[i].id == arr[0] ) {
                // record = getData[i]
                getData[i].tags.push ( String(getTags) );
            }
        }
        this.save ( getData );
        return getData;
    }
    static getbyFilter ( data ) {
        let getTags = this.showData ();
        let result = [];
        for ( let i=0; i<getTags.length; i++ ) {
            for ( let j=0; j<getTags[i].tags.length; j++ ) {
                let split = getTags[i].tags[j].split(',');
                for ( let k=0; k<split.length; k++ ) {
                    if ( split[k] == data ) {
                        result.push( getTags[i].task)
                    }
                }
            }
        }
        return result;
    }
}

module.exports = Task;