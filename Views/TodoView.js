class TodoView {
  static list(tasks){
    for(let i=0 ; i<tasks.length ; i++){
      if(tasks[i].complete ===  false){
        console.log( `${tasks[i].id}. [ ] ${tasks[i].task} `)
      } else if (tasks[i].complete === true ){
        console.log(`${tasks[i].id}. [X] ${tasks[i].task} `)
      }
    }
  }


  static add(task){
    console.log(`Added ${task} to your TODO list`)
  }

  static find(task){
    if(task.complete == true){
      console.log(`${task.id}. [X] ${task.task}`)
    } else {
      console.log(`${task.id}. [ ] ${task.task}`)
    }
  }

  static delete(task){
    console.log(`Deleted ${task.task} from your TODO list`)
  }

  static created(list){
    console.log(list)
  }

  static listCompleted(list){
    let result = ''
    for(let i=0 ; i<list.length ; i++){
      result += `${list[i].id}. [X] ${list[i].task} \n`
    }
    console.log(result)
  }

  static tag(task){
    let tagResult = ''
    for(let i=0 ; i<task[0].length ; i++){
      tagResult += `${task[0][i]} `
    }
    let name = task[1].task
    console.log(`Tagged task "${name}" with tags: ${tagResult}`)
  }

  static filter(arr){
    let print = ''
    for(let i=0 ; i<arr.length ; i++){
      print+= (`${arr[i].id}. ${arr[i].task} [${arr[i].tags}] \n`)
    }
    console.log(print)
  }
}
module.exports = TodoView
