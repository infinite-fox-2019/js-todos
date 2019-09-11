class TodoView {
    static showList(todos) {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${todos[i].id}. ${todos[i].task}`);
        }
    }

    static showAddMessage(task) {
        console.log(`Added ${task} to your TODO list...`)
    }
}

module.exports = TodoView;