class TodoView {
    static showList(todos) {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${todos[i].id}. [${todos[i].isComplete ? 'x' : ' '}] ${todos[i].task}`);
        }
    }

    static showTodo(todo) {
        if(todo === undefined) {
            console.log('Task not found!');
        } else {
            console.log(`${todo.id}. [${todo.isComplete ? 'x' : ' '}] ${todo.task}`);
        }
    }

    static showAddMessage(todo) {
        console.log(`Added ${todo.task} to your TODO list...`)
    }

    static showDeleteMessage(todo) {
        console.log(`Deleted ${todo.task} from your TODO list...`)
    }

    static showTagMessage(todo) {
        console.log(`Tagged task ${todo.task} with tags: ${todo.tags.join(' ')}`)
    }

    static showFilterDisplay(todos) {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${todos[i].id}. ${todos[i].task} [${todos[i].tags.join(', ')}]`);
        }
    }
}

module.exports = TodoView;