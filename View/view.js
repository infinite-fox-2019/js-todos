'use strict'

const toDoModel = require ('../Model/model.js')
const toDoControler = require ('../Controller/controller.js')

class ToDoView {
  
  static showHelp (){
    const commands = [
      `$ node todo.js help # menampilkan command apa saja yang tersedia`,
      `$ node todo.js list # Melihat daftar TODO`,
      `$ node todo.js add <task_content> # Menambahkan TODO ke dalam list`,
      `$ node todo.js find <task_id> # Melihat detail TODO sesuai 'task_id' nya`,
      `$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya`,
      `$ node todo.js completed <task_id> # Menandai status TODO selesai`,
      `$ node todo.js uncompleted <task_id> # Menandai status TODO belum selesai`,
      `$ node todo.js list:created <asc|desc> # Melihat daftar TODO yang sudah di sort`,
      `$ node todo.js list:completed <asc|desc> # Melihat daftar TODO yang sudah selesai`,
      `$ node todo.js tag <task_id> <tag_1> <tag_2> <....> # Memberikan tag pada TODO list`,
      `$ node todo.js filter: <tag> # Melakukan filter pada TODO list sesuai tag`
    ]

    commands.forEach((command) => {
      console.log(command)
    })
  }

  static showList (list){
    console.table(list)
  }

  static addList (add){
    console.log(`Menambahkan ${add} ke list = success`)
  }
  static deleteList (del){
    console.log(`Menghilangkan ID: ${del} ke list = success`)
  }
  static tagList(id,tagList){
    console.log(`tag ditambahkan pada ID:${id} dengan tag ${tagList}`)
  }

}

module.exports = ToDoView