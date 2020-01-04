const notes = require("./notes");
const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue("Hello World"));
// const log = console.log;

// log(chalk.green("Hello") + "world" + chalk.green("!"));
// log(chalk.blue.bgRed.bold("HELLO WORLD"));
// log(`
// CPU: ${chalk.red("90%")}
// RAM: ${chalk.green("40%")}
// DISK: ${chalk.yellow("70%")}
// `);
 // const error = chalk.bold.red;
 // const warning = chalk.keyword('orange');

 // console.log(error('Error!'));
 // console.log(warning('Warning!'));

 //...............
// const name = "Arbaz";
// console.log(chalk.green("Hello %s"), name);
 //...............



// console.log(validator.isEmail("Arbazcs786@gmail.com"));
// console.log(validator.isEmail("Arbazcs786@.com"));
// console.log(validator.isURL("http://cc.com"));
// console.log(validator.isURL("http:/cc.com"));


// const fs = require('fs')
// fs.writeFileSync('notes.txt','hello');

// fs.appendFileSync('notes.txt',' World');

const not = notes();
console.log(not);

const greenmsg = chalk.blue.inverse.bold("Success!");
console.log(greenmsg);
console.log(process.argv[2]);


