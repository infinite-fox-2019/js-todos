class TaskView {
    static viewAll(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(`${array[i].id}. [${array[i].completed}] ${array[i].name}`)
        }
    }

    static add(name) {
        console.log(`Added "${name}" to your TODO list...`)
    }

    static displayAList(object) {
        console.log(`${object.id}. [${object.completed}] ${object.name}`)
    }

    static delete(name) {
        console.log(`Deleted "${name}" from your TODO list...`)
    }
}

module.exports = TaskView