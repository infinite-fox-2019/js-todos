
// const JsRacer = require('../Game/jsRacer')

class View {

    static help() {
        View.clearScreen()
        let message = '';
        message += '\n'
        message += '|=================================ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ=======================================|\n'
        message += '$ node todo.js list                     # ---> Menampilkan daftar Todo            $\n'; 
        message += '$ node todo.js list:created <asc/desc>  # ---> Menambah TODO ke dalam list        $\n';
        message += '$ node todo.js add <task_content>       # ---> Menambah TODO ke dalam list        $\n';
        message += '$ node todo.js findById <task_id>       # ---> Melihat detail TODO sesuai task_id $\n';
        message += '$ node todo.js delete <task_id>         # ---> Menghapus TODO sesuai task_id      $\n'; 
        message += '$ node todo.js complete <task_id>       # ---> Menandai status TODO selesai       $\n';
        message += '$ node todo.js uncomplete <task_id>     # ---> Menandai status TODO belum selesai $\n';
        message += '$ node todo.js game                     # ---> Memainkan game                     $\n';
        message += '|=================================================================================|\n'
        message += '\n'
        console.log(message)

    };

    static showList(message) {
        View.clearScreen()
        let gatherData = [];
        message.forEach(function (data) {
            
            let check = "";
            if (data._hasCompleted == true) {
                check = "✔"
            }else {
                check = " "
            }
            // subGather = [data._taskId,check,data._taskContent]
            
            let subGather = {
                id: data._taskId,
                checklist: check,
                task: data._taskContent
            }
            gatherData.push(subGather);
            // console.log(` ${data._taskId}. [${check}] ${data._taskContent}`)
        })

        console.table(gatherData)

    };

    static showCreated(message) {
        View.clearScreen()
        let gatherData = [];
        message.forEach(function (data) {
            
            let check = "";
            if (data._hasCompleted == true) {
                check = "✔"
            }else {
                check = " "
            }
            // subGather = [data._taskId,check,data._taskContent]
            
            let subGather = {
                id: data._taskId,
                checklist: check,
                task: data._taskContent
            }
            gatherData.push(subGather);
            // console.log(` ${data._taskId}. [${check}] ${data._taskContent}`)
        })

        console.table(gatherData)
    }

    static DeleteMessage(arr) {
        View.clearScreen()
        let gatherData = [];
        arr[0].forEach(function (data) {
            
            let check = "";
            if (data._hasCompleted == true) {
                check = "✔"
            }else {
                check = " "
            }
            // subGather = [data._taskId,check,data._taskContent]
            
            let subGather = {
                id: data._taskId,
                checklist: check,
                task: data._taskContent
            }
            gatherData.push(subGather);
            // console.log(` ${data._taskId}. [${check}] ${data._taskContent}`)
        })

        console.table(gatherData)
        
        ///////////////////
        console.log(`Your task witd id ${arr[1]} has been deleted`)
    };  

    static printAdd(message) {

        View.clearScreen()
        let gatherData = [];
        message.forEach(function (data) {
            
            let check = "";
            if (data._hasCompleted == true) {
                check = "✔"
            }else {
                check = " "
            }
            // subGather = [data._taskId,check,data._taskContent]
            
            let subGather = {
                id: data._taskId,
                checklist: check,
                task: data._taskContent
            }
            gatherData.push(subGather);
            // console.log(` ${data._taskId}. [${check}] ${data._taskContent}`)
        })

        console.table(gatherData)

    };



    static printMessage(message) {
        
        console.log(message)
    };

    static printTodo(data) {
        View.clearScreen()
        let check = "";
        if (data._hasCompleted == true) {
            check = "✔"
        }else {
            check = " "
        }

        console.log(`${data._taskId}. [${check}] ${data._taskContent}`)
        
    };
    ///

    static showGame(data) {
        View.clearScreen()
        console.table(data)
        console.log(`type 'node todo.js play <game_name>' To star play`)
        console.log('-------------------------------------------------->')
    }

    static playingTicTac(game) {
        View.clearScreen();
        console.log(game)
    }

    static sleep(milliseconds) { //.............SleepFunction
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if (new Date().getTime() - start > milliseconds) {
                break;
            }
        }
    }
    static clearScreen() { //........................clearScreen
        // Un-comment this line if you have trouble with console.clear();
        // return process.stdout.write('\033c');
        console.clear();
    }

}//


module.exports = View;