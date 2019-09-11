class TodoViews {
    static viewList (todo) {
        console.log('======================')
        console.log('My Todo list:');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${todo[i].id}. [${todo[i].status}] ${todo[i].task}`)
        }
        console.log('======================')
    }
    static viewById (todo) {
        console.log(`${todo.id}. ${todo.task}`)
    }
    static viewAddedTask (task) {
        console.log(`Added ${task} to your TODO list...`);
    }
    static viewDeleteTask (todo) {
        console.log(`Deleted ${todo.task} from your TODO list...`);
    }
}

module.exports = TodoViews;