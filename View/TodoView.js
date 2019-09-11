class TodoView {
    static showList(todos) {
        for(let i = 0; i < todos.length; i++) {
            console.log(`${todos[i].id}. ${todos[i].task}`);
        }
    }
}

module.exports = TodoView;