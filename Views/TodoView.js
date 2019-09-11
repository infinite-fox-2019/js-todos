class TodoView {
    static viewAll(test) {
        console.table(test)
        console.log(`jumlah record ${test.length}`)
    }
    static filterShow(num) {
        console.table(num)
    }
    static sortShow(str){
        console.table(str)
    }
    static messageAddingTag(arr,str,data){
        console.log(`Tagged task ${data[Number(str)-1].task} with tags : ${arr}`)
    }
    static messageFilterTag(input){
        console.log(input)
    }

}

module.exports = TodoView