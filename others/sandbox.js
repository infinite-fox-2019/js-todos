// const fs = require ('fs');

// // const data = JSON.parse(fs.readFileSync("./data.json",'utf8'));

// const data = JSON.parse(fs.readFileSync("./data.json",'utf8'));
// console.log(data)

// const input = process.argv.slice(2);
// console.log(process.argv.slice(3))


// let arr = [
//     [1,"✔","Main ayunan"],
//     [2," ","Main tanah"],
//     [3,"✔","Main Layangan"]
// ]

// console.table(arr)

// console.table({ firstname : "John", lastname : "Doe" });

var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3]); 

// var car1 = { name : "Audi", model : "A4" }
// var car2 = { name : "Volvo", model : "XC90" }
// var car3 = { name : "Ford", model : "Fusion" }

// console.table([car1, car2, car3], ["model"]);

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     console.log('hallo')

//   }
  
//   var me = new Person("John", "Smith");
  
//   console.log(me);
// //   console.log(me.sayWords())


// function sleep (milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds) {
//         break;
//       }
//     }
//   }

//   function clearScreen () {
//     // Un-comment this line if you have trouble with console.clear();
//     // return process.stdout.write('\033c');
//     console.clear();
//   }


//   console.log('Hallo');
//   sleep(500);
//   clearScreen()
//   console.log('Hallo.');
//   sleep(500);
//   clearScreen()
//   console.log('Hallo...');
//   sleep(500);
//   clearScreen()