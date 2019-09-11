class ToDoViews {
  static viewAllList(allList){
    console.log('This is the TODO list :');
    // console.log(allList);
    for(let i = 0; i < allList.length; i++){
      console.log(`${allList[i]['_id']}. ${allList[i]['_completed']} ${allList[i]['_task']}`); 
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

}

module.exports = ToDoViews;