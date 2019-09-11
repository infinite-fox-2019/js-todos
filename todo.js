const control = require("./Controllers/TodoController");

if (process.argv[2] === undefined) {
  control.help();
} else {
  let command = process.argv[2].split(":");
  let additional = process.argv.slice(3);
  switch (command[0]) {
    case "help":
      control.help();
      break;
    case "list":
      control.list(command[1], additional);
      break;
    case "add":
      control.add(additional);
      break;
    case "findById":
      control.findId(additional);
      break;
    case "delete":
      control.deleteTask(additional);
      break;
    case "complete":
      control.completeTask(additional);
      break;
    case "uncomplete":
      control.uncompleteTask(additional);
      break;
    case "tag":
      control.addTag(additional);
      break;
    case "filter":
      control.filter(command[1]);
  }
}
