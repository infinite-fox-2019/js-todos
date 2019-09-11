class View {

    static help() {
        let output = ''
        output += `node todo.js # will call help\n`
        output += `node todo.js # help\n`
        output += `node todo.js # list\n`
        output += `node todo.js # add <taks_content>\n`
        output += `node todo.js # findById <task_id>\n`
        output += `node todo.js # complete <task_id>\n`
        output += `node todo.js # uncomplete <task_id>\n`
        output += `node todo.js # tag <task_id> <tag>\n`
        output += `node todo.js # filter:<tag>\n`
        console.log(output);
    }

    static error(err) {
        console.log(`${err} tidak boleh kosong\n`);
    }

    static list(data) {
        let output = ''
        if (data.length != 0) {
            data.forEach(datum => {
                let complete = '[ ]'
                if (datum.complete) {
                    complete = '[X]'
                }
                output += `${datum.id}. ${complete} ${datum.todo} [${datum.tag}]\n`
            });
            console.log(output);
        } else {
            console.log(`Tidak ada data`);
        }


    }

    static add(data) {
        console.log(`add "${data.todo}" to your TODO list`);
    }

    static delete(task) {
        console.log(`Deleted "${task[0].todo}" from yout TODO list`);
    }

    static tag(data, tag) {
        console.log(`Tagged task "${data.todo}" with tag: ${tag}`);
    }

    static filter(data) {
        if (data.length === 0) {
            console.log(`tag yang anda cari tidak ada `);
        } else {
            for (let i = 0; i < data.length; i++) {
                console.log(`${data[i].id}. ${data[i].todo} [${data[i].tag.join(', ')}]`);
            }
        }
    }

}


module.exports = View