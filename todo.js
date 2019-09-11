const Controller = require ('./Controller/controller');

/*
type 'node todo.js login <username> <password>'

username : laskar
password : bongkibong
*/


const input = process.argv.slice(2);
let taskContent = ''
let taskId = 0;

let checkLogin = Controller.CheckLogin();

if (checkLogin[0].status == false) {

    if (input[0] == 'login') {
        let user = input[1];
        let pass = input[2];
        Controller.loggedIn(user,pass)
    }else {
        Controller.logFalse();
    }

}else {

// console.log(input);
switch (input[0]) {

    case 'help' : 
        Controller.help();
        break;
    case 'list':
        Controller.list();
        break;
    case 'list:created':
        option = input[1];
        Controller.listCreated(option);
        break;
    case 'add':
        taskContent = process.argv.slice(3).join(' ')
        Controller.add(taskContent)
        break;
    case 'findById':
        Controller.findById(input[1])
        break;
    case 'delete' :
        taskId = Number(input[1]);
        Controller.delete(taskId);
        break;
    case 'complete' :
        taskId = Number(input[1]);
        Controller.complete(taskId)
        break;
    case 'uncomplete' :
        taskId = Number(input[1]);
        Controller.uncomplete(taskId)
        break;
    case 'game' :
        Controller.gameList();
        break;
    case 'play' :
        const nameGame = input[1];
        Controller.play(nameGame);
        break;
    case 'logout' :
        Controller.loggedOut()
    default :
        console.log(`if you need help, you can type 'node todo.js help'`)
        break;
}//
}




