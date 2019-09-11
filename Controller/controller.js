const View = require('../View/view.js');
const Model = require('../Model/model.js');
const TicTac = require('../Game/tictac.js')

class Controller {

    static help() {
        View.help()
        // console.log('oke nyambung')
    };

    static list() {
        let dataList = Model.findAll();
        View.showList(dataList);
    };

    static listCreated(option = "desc") {
        const data = Model.createdDate(option);
        View.showCreated(data);
    };

    static add(taskContent) {
        const dataAdd = Model.create(taskContent);
        Controller.list()
        View.printMessage(`You add task "${taskContent}" to your TODO list`);
    };

    static findById(taskId) {
        const data = Model.findById(taskId);
        View.printTodo(data)
    };

    static delete(taskId) {
        const data = Model.delete(taskId);
        View.DeleteMessage([data,taskId])
    }

    static complete(taskId) {
        const data = Model.status(taskId,true);
        View.showList(data);
    };

    static uncomplete(taskId) {
        const data = Model.status(taskId,false);
        View.showList(data);
    };

    static CheckLogin() {
        const data = Model.login();
        return data;
    }

    static loggedIn(userName,password) {
        const data = Model.login();
        let userData = data[0].username;
        let passwordData = data[0].password;
        // console.log(data)
        
        if (userData == userName && passwordData == password) {
            data[0].status = true;
            Model.loginSave(data);
            View.printMessage(`Good to see you again Master ${userName}`)
        }else {
            View.printMessage('Your email or password are wrong!')
        }
    }

    static gameList() {
        const dataGame = Model.FindAllGame();
        View.showGame(dataGame);
    };

    static play(name) {
        if (name == 'TicTacToe') {
            View.playingTicTac(TicTac());
        }  
    };

    static logFalse() {
        View.printMessage(`You must login first, type 'node todo.js login <username> <password>'`)
    }

    static loggedOut() {
        const data = Model.login();
        data[0].status = false;
        Model.loginSave(data);
        View.printMessage('You success logout..')
    }


}//


module.exports = Controller;