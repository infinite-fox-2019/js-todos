class View {
  static showHelp() {
    console.log("these are all command that you can ask :");
    console.log("========================================");
    console.log("node todo.js help");
    console.log("node todo.js list");
    console.log("node todo.js add <task_content>");
    console.log("node todo.js findById <task_id>");
    console.log("node todo.js delete <task_id>");
    console.log("node todo.js complete <task_id>");
    console.log("node todo.js uncomplete <task_id>");
    console.log("node todo.js list:created asc|desc");
    console.log("node todo.js list:completed asc|desc");
    console.log("node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
    console.log("node todo.js filter:<tag_name>");
  }
  static showList(list) {
    console.table(list);
  }
  static addReport(task_content){
    console.log(`Added ${task_content} to your TODO list..`)
  }
  static showTask(task){
    console.log(task)
  }
  static deleteReport(task_id){
    console.log(`Deleted ${task_id} from your TODO list..`)
  }
  static tagReport(messageTag){
    if (messageTag === false){
      console.log("Tag anda duplikat!!!")
    } else {
      console.log(`Tagged task ${messageTag.message} with tags: ${messageTag.thisTag}`)
    }
  }
}

module.exports = View;
