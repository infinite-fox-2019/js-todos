class TodoView {
    static showList(todos) {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${todos[i].id}. [${todos[i].complete ? 'x' : ' '}] ${todos[i].task}`);
        }
    }

    static showTodo(todo) {
        if(todo === undefined) {
            console.log('Task not found!');
        } else {
            console.log(`${todo.id}. [${todo.complete ? 'x' : ' '}]${todo.task}`);
        }
    }

    static showAddMessage(task) {
        console.log(`Added ${task} to your TODO list...`)
    }

    static showDeleteMessage(task) {
        console.log(`Deleted ${task} from your TODO list...`)
    }
}

module.exports = TodoView;