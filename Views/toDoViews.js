class ToDoViews {
  static viewAllList(allList){
    console.log('This is the TODO list :');
    // console.log(allList);
    for(let i = 0; i < allList.length; i++){
      if(!allList[i]['_completed']){
        console.log(`${allList[i]['_id']}. [ ] ${allList[i]['_task']}`); 
      }
      else{
        console.log(`${allList[i]['_id']}. [x] ${allList[i]['_task']}`); 
      }
    }
  }

  static viewAddData(addData){
    console.log(`Added "${addData}" to your TODO list...`);
  }

  static viewAddDataEmpty(){
    console.log('No data entered');
  }

  static findById(data){
    console.log(data);
  }

  static deleteData(deleteData){
    console.log(`Deleted "${deleteData}" from your TODO list...`);
  }

  static deleteDataNotFound(){
    console.log('Data want to delete is not found');
    
  }

  static addTag(data, tag){
    console.log(`Tagged task "${data['_task']}" with tags: ${tag.join(' ')}`);
  }

  static filterTag(data){
    console.log('This is the filtered TODO list :');
    for(let i = 0; i < data.length; i++){
      console.log(`${data[i]['_id']}. ${data[i]['_task']} [${data[i]['_tag']}]`); 
    }
  }
}

module.exports = ToDoViews;