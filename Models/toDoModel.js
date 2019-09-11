const fs = require('fs');
const dataJSON = JSON.parse(fs.readFileSync('./data.json','utf8'));

class Todo {
  constructor(id, task, date, completed = false, completedDate, tag = []){
    this._id = id;
    this._completed = completed;
    this._task = task;
    this._tag = tag;
    this._createDate = new Date(date);
    this._completedDate = completedDate;
  }

  static data(){
    let data = [];
    for(let i = 0; i < dataJSON.length; i++){
      data.push(new Todo(dataJSON[i]['_id'],dataJSON[i]['_task'],dataJSON[i]['_createDate'],dataJSON[i]['_completed'],dataJSON[i]['_completedDate'],dataJSON[i]['_tag']));
    }
    return data;
  }
  
  static addData(addData){
    let data = this.data();
    if(!data.length){
      data.push(new Todo(1,addData, new Date(), false, null))      
    }
    else{
      data.push(new Todo((data[data.length-1]['_id']+1), addData, new Date(), false, null))
    }
    this.save(data);
  }

  static findById(id){
    let data = this.data();
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        return data[i]
      }
    }
  }

  static deleteData(id){
    let data = this.data();
    let indeks = 0;
    let deletedData;
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        indeks = i;
        deletedData = data[i]['_task'];
        data.splice(indeks,1);
      }
    }
    this.save(data);
    return deletedData;
  }

  static dataComplete(id){
    let data = this.data();
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        data[i]['_completed'] = true;
        data[i]['_completedDate'] = new Date();
      }
    }
    this.save(data);
    return data
  }

  static dataUncomplete(id){
    let data = this.data();
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        data[i]['_completed'] = false
        data[i]['_completedDate'] = null;
      }
    }
    this.save(data);
    return data
  }

  static save(data){
    fs.writeFileSync('./data.json',JSON.stringify(data,null,2))
  }

  static sortObj(arr, key, sort = 'asc'){
    var max = 0;
    for(var i = 0; i < arr.length-1; i++){
      for(var j = i+1; j < arr.length; j++){
        if(sort == 'desc'){
          if(arr[i][key] < arr[j][key]){
            max = arr[i];
            arr[i] = arr[j];
            arr[j] = max;
          }
        }
        else{
          if(arr[i][key] > arr[j][key]){
            max = arr[i];
            arr[i] = arr[j];
            arr[j] = max;
          }
        }
      }
    }
    return arr;
  }

  static listCreated(ascDesc = 'asc'){
    let data = this.data();
    return this.sortObj(data,'_createDate',ascDesc)
  }

  static listCompleted(ascDesc = 'asc'){
    let data = this.data();
    let dataComplete = [];
    for(let i = 0; i < data.length; i++){
      if(data[i]['_completed']){
        dataComplete.push(data[i]);
      }
    }
    return this.sortObj(dataComplete,'_completedDate',ascDesc);
  }

  static addTag(id, tag){
    let data = this.data();
    let indeks;
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        data[i]['_tag'] = tag;
        indeks = i;
      }
    }
    this.save(data);
    return data[indeks];
  }

  static filterTag(tag){
    let data = this.data();
    let filteredTag = []
    for(let i = 0; i < data.length; i++){
      for(let j = 0; j < data[i]['_tag'].length; j++){
        if(data[i]['_tag'][j] == tag){
          filteredTag.push(data[i])
        }
      }
    }
    return filteredTag;
  }
}

module.exports = Todo;