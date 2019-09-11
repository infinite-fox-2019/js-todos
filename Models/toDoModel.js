const fs = require('fs');
const dataJSON = JSON.parse(fs.readFileSync('./data.json','utf8'));

class Todo {
  constructor(id, task, completed = '[ ]', tag = [], date){
    this._id = id;
    this._completed = completed
    this._task = task;
    this._tag = tag
    this._createAt = date
  }

  static data(){
    let data = [];
    for(let i = 0; i < dataJSON.length; i++){
      data.push(new Todo(dataJSON[i]['_id'],dataJSON[i]['_task'],dataJSON[i]['_completed']));
    }
    return data;
  }
  
  static addData(addData){
    let data = this.data();
    if(!data.length){
      data.push(new Todo(1,addData))      
    }
    else{
      data.push(new Todo((data[data.length-1]['_id']+1),addData))
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
        data[i]['_completed'] = '[X]'
      }
    }
    this.save(data);
    return data
  }

  static dataUncomplete(id){
    let data = this.data();
    for(let i = 0; i < data.length; i++){
      if(data[i]['_id'] == id){
        data[i]['_completed'] = '[ ]'
      }
    }
    this.save(data);
    return data
  }

  static save(data){
    fs.writeFileSync('./data.json',JSON.stringify(data,null,2))
  }

}

module.exports = Todo;