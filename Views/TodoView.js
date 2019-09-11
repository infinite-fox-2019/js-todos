class TodoViews {
    static help () {
        console.log('usage:');
        console.log('');
        console.log('node todo.js help  # menampilkan command apa saja yang tersedia');
        console.log('node todo.js list  # melihat daftar TODO');
        console.log('node todo.js list:created asc|desc # melihat daftar TODO berdasarkan tanggal dibuat');
        console.log('node todo.js list:completed asc|desc # melihat daftar TODO complete berdasarkan tanggal selesai');
        console.log('node todo.js add <task_content>  # menambahkan TODO ke dalam list');
        console.log('node todo.js findById <task_id>  # melihat detail TODO sesuai `task_id`');
        console.log('node todo.js delete <task_id>  # menghapus TODO sesuai `task_id` nya');
        console.log('node todo.js complete <task_id>  # menandai status TODO selesai');
        console.log('node todo.js uncomplete <task_id>  # menandai status TODO belum selesai');
        console.log('');
    }
    static viewList (todo) {
        console.log('======================')
        if (todo.length == 0) {
            console.log('Belum ada todo list');
        } else {
            console.log('My Todo list:');
            for (let i = 0; i < todo.length; i++) {
                console.log(`${todo[i].id}. [${todo[i].status}] ${todo[i].task}`)
            }
        }
        console.log('======================')
    }
    static viewById (todo) {
        if (!todo) {
            console.log('Not found..');
        } else {
            console.log(`${todo.id}. ${todo.task}`)
        }
    }
    static viewAddedTask (task) {
        console.log(`Added ${task} to your TODO list...`);
    }
    static viewFilter (tagTask) {
        for (let i = 0; i < tagTask.length; i++) {
            console.log(`${tagTask[i].id}. ${tagTask[i].task} [${tagTask[i].tag}]`)
        }
    }
    static viewAddedTag (task, arrayTag) {
        let stringTag = '';
        for (let i = 0; i < arrayTag.length; i++) {
            stringTag += arrayTag[i];
            stringTag += ' '
        }
        console.log(`Tagged task ${task} with tags: ${stringTag}`);
    }
    static viewDeleteTask (todo) {
        console.log(`Deleted ${todo.task} from your TODO list...`);
    }
}

module.exports = TodoViews;