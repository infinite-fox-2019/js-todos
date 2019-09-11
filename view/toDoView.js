class toDoView {
    static help() {
        console.log('list ==> to see activity(es) list')
        console.log('add <activity> ==> to add new one new activity')
        console.log('findById <id> ==> to find activity by the id')
        console.log('delete <id> ==> to delete an activity')
        console.log('complete <id> ==> set activity to complete')
        console.log('uncomplete <id> ==> set activity to uncomplete')
        console.log('list:created asc ==> to see activity(es) ascending')
        console.log('list:created desc ==> to see activity(es) descending')
        console.log('list:completed asc ==> to show complete activity(es) ascending')
        console.log('list:completed dsc ==> to show complete activity(es) descending')
        console.log('tag <id> <tagname1> <tagname2> ==> to add tag')
        console.log('filter:<tagname> ==> to filter by tagname')
    }
    static show(data) {
        console.table(data)
    }
    static save() {
        console.log('saving succes!')
    }
    static findById(argument) {
        console.log(argument)
    }
    static delete(argument) {
        console.log(argument)
        console.log('the data above was succesfully deleted')
    }
    static asc(argument) {
        console.table(argument)
    }
    static desc(argument) {
        console.table(argument)
    }
    static ascComplete(argument) {
        console.table(argument)
    }
    static descComplete(argument) {
        console.table(argument)
    }
    static tag(argument) {
        console.table(argument)
    }
    static filterTag(argument) {
        console.table(argument)
    }
}

module.exports = toDoView