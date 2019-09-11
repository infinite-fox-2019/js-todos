const command = process.argv[2];
const inputList = process.argv.slice(3);
const controller = require('./Controller/todoController.js');


switch (command) {
    case 'help':
        console.log(`List input :
        $ node todo.js help
        $ node todo.js list
        $ node todo.js add <task_content>
        $ node todo.js findById <task_id>
        $ node todo.js delete <task_id>
        $ node todo.js complate <task_id>
        $ node todo.js uncomplate <task_id>
        $ node todo.js "list:created"
        $ node todo.js "list:complated"
        $ node todo.js "list:created asc"
        $ node todo.js "list:created desc"
        $ node todo.js "list:complated asc"
        $ node todo.js "list:complated desc"
        $ node todo.js tag <example:'tag 2 hobby pet'>
        $ node todo.js filter <tag> , example : node todo.js filter hobby
        `)
        break;
    case 'list':
        controller.listController();
        break;
    case 'add':
        controller.controllerAddData(inputList[0]);
        break;
    case 'findById':
        controller.controllerFindById(inputList[0]);
        break;
    case 'delete':
        controller.controllerDeleteById(inputList[0]);
        break;
    case 'complate':
        controller.controllerComplate(inputList[0]);
        break;
    case 'uncomplate':
        controller.controllerUncomplate(inputList[0]);
        break;
    case 'list:created':
        controller.controllerListCreated();
        break;
    case 'list:complated':
        controller.controllerListComplated();
        break;
    case 'list:created asc':
        controller.controllerListCreated();
        break;
    case 'list:created desc':
        controller.controllerListCreatedDesc();
        break;
    case 'list:complated asc':
        controller.controllerListComplated();
        break;
    case 'list:complated desc':
        controller.controllerListComplatedDesc();
        break;
    case 'tag':
        controller.controllerTag(inputList);
        break;
    case 'filter':
        controller.controllerFilter(inputList);
        break;
    default:
        console.log("$ node todo.js <must be inputed>, go check 'node todo.js <help>' for view list input");
}