class TodoViews {
    static viewList (todo) {
        console.log('======================')
        console.log('My Todo list:');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${todo[i].id}. ${todo[i].task}`)
        }
        console.log('======================')
    }
}

module.exports = TodoViews;