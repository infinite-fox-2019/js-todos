class TodoView{

    static viewTodo(data){
        console.log('                       ');
        console.log('           ──────▄▀▄─────▄▀▄');
        console.log('           ─────▄█░░▀▀▀▀▀░░█▄');
        console.log('           ─▄▄──█░░░░░░░░░░░█──▄▄');
        console.log('           █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
        console.log('                       ');
        console.log('-------------------------------------------------------------------');
        console.log(`| data-id | data-time                | status |  task`);
        data.forEach(todo => {
            console.log('-------------------------------------------------------------------');
            if(todo.status === true)todo.status = '[X]'
            else todo.status = '[ ]'
            console.log(`|    ${todo.id}    | ${todo.created_date.slice(0,24)} |   ${todo.status}  |  ${todo.todo}`);
            console.log('-------------------------------------------------------------------');    
            console.log(`|   tags  |   ${todo.tags}`);
        });
        console.log('-------------------------------------------------------------------');
    }

    static viewCompletedTodo(data){
        console.log('                       ');
        console.log('           ──────▄▀▄─────▄▀▄');
        console.log('           ─────▄█░░▀▀▀▀▀░░█▄');
        console.log('           ─▄▄──█░░░░░░░░░░░█──▄▄');
        console.log('           █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
        console.log('                       ');
        console.log('-------------------------------------------------------------------');
        console.log(`| data-id | completed-time                | status |  task`);
        data.forEach(todo => {
            console.log('-------------------------------------------------------------------');
            if(todo.status === true)todo.status = '[X]'
            else todo.status = '[ ]'
            console.log(`|    ${todo.id}    | ${todo.completed_date.slice(0,24)} |   ${todo.status}  |  ${todo.todo}`);
            console.log('-------------------------------------------------------------------');    
            console.log(`|   tags  |   ${todo.tags}`);
        });
        console.log('-------------------------------------------------------------------');
    }

    static viewById(obj){
        if(obj.id === undefined){
            console.log('                       ');
            console.log('           ──────▄▀▄─────▄▀▄');
            console.log('           ─────▄█░░▀▀▀▀▀░░█▄');
            console.log('           ─▄▄──█░░░░░░░░░░░█──▄▄');
            console.log('           █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
            console.log('                       ');
            console.log('-------------------------------------------------------------------');
            console.log(`ID TIDAK DITEMUKAN`);
            console.log('-------------------------------------------------------------------');
            return
        }
        console.log('                       ');
        console.log('           ──────▄▀▄─────▄▀▄');
        console.log('           ─────▄█░░▀▀▀▀▀░░█▄');
        console.log('           ─▄▄──█░░░░░░░░░░░█──▄▄');
        console.log('           █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
        console.log('                       ');
        console.log('-------------------------------------------------------------------');
        console.log(`| data-id | data-time                | task`);
        console.log('-------------------------------------------------------------------');
        console.log(`|    ${obj.id}    | ${obj.created_date.slice(0,24)} | ${obj.todo}`);
        console.log('-------------------------------------------------------------------');
    }

}

module.exports = TodoView