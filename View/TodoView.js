class TodoView {
    static displayList(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. [${data[i].completed}] ${data[i].todo}`)
        }
    }

    static displayListAdded(data) {
        console.log(`Added ${data.todo} to your TODO list... `)
    }

    static displayFindedById(data) {
        console.log(`${data.id}. ${data.todo}`)
    }

    static displayDeleted(data) {
        console.log(`Deleted ${data.todo} from your TODO list... `)
    }
}


module.exports = TodoView