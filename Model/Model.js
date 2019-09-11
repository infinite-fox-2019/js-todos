const fs = require('fs')
const json = JSON.parse(fs.readFileSync("./data.json", JSON, "utf8"))

class ToDo {
    constructor(id, activity, status, time, tagName){
        this.id = id
        this.activity = activity
        this.status = status
        this.time = time
        this.tagName = tagName
    }

    static list(){
        let ToDoArr = []
        for(let i = 0 ; i < json.length ; i++){
            ToDoArr.push(new ToDo(json[i].id, json[i].activity, json[i].status, json[i].time, json[i].tagName))
        }
        return ToDoArr
    }

    static add (activity){
        let toDobaru = {}
        if(json.length == 0){
            toDobaru["id"] = 1
        }
        else{
            toDobaru["id"] = json[json.length-1]["id"] + 1
        }
        toDobaru["activity"] = activity
        toDobaru["status"] = "[ ]"
        toDobaru["time"] = new Date
        toDobaru["tagName"] = []
        json.push(toDobaru)
        this.save()
    }

    static save (){
        fs.writeFileSync("./data.json", JSON.stringify(json, null, 2))
    }

    static findById(id){
        let ToDoArr = []
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["id"] == id){
                ToDoArr.push(json[i])
                return ToDoArr
            }
        }
    }

    static delete (id){
        let activity = ''
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["id"] == id){
                activity = json[i]["activity"]
                json.splice(i, 1)
                this.save()
                return activity
            }
        }
    }

    static complete (id){
        let activity = ''
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["id"] == id){
                json[i]["status"] = "[V]"
                json[i]["time"] = new Date
                activity = json[i]["activity"]
                this.save()
                return activity
            }
        }
    }

    static uncomplete (id){
        let activity = ''
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["id"] == id){
                json[i]["status"] = "[ ]"
                json[i]["time"] = new Date
                activity = json[i]["activity"]
                this.save ()
                return activity
            }
        }
    }

    static createdAsc (){
        for(let i = 0 ; i<json.length ; i++){
            for(let j = 0 ; j<json.length-1 ; j++){
                if(json[j]["time"] > json[j+1]["time"]){
                    let penampung = json[j]
                    json[j] = json[j+1]
                    json[j+1] = penampung
                }
            }
        }
        return json
    }

    static createdDesc (){
        for(let i = 0 ; i<json.length ; i++){
            for(let j = 0 ; j<json.length-1 ; j++){
                if(json[j]["time"] < json[j+1]["time"]){
                    let penampung = json[j]
                    json[j] = json[j+1]
                    json[j+1] = penampung
                }
            }
        }
        return json
    }

    static listCompletedAsc (){
        this.createdAsc()
        let listCompletedAsc = []
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["status"] == "[V]"){
                listCompletedAsc.push(json[i])
            }
        }
        return listCompletedAsc
    }

    static listCompletedDesc (){
        this.createdDesc()
        let listCompletedDesc = []
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["status"] == "[V]"){
                listCompletedDesc.push(json[i])
            }
        }
        return listCompletedDesc
    }

    static tag (id, tagName){
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["id"] == id){
                for(let j = 0 ; j<tagName.length ; j++){
                    if (json[i]["tagName"].indexOf(tagName[j]) == -1){
                        json[i]["tagName"].push(tagName[j])
                    }
                }
                this.save()
                return json[i]["activity"]
            }
        }
    }

    static filterTag (tagName){
        let filterTag = []
        for(let i = 0 ; i < json.length ; i++){
            if (json[i]["tagName"].indexOf(tagName) != -1){
                filterTag.push(json[i])
            }
        }
        return filterTag
    }
}

module.exports = ToDo
