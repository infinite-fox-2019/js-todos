class TodoView {
    static displayList(data) {
        console.table(data)
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