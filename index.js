var chalk = require("chalk");
var message = "Hello "+chalk.yellow('world') + chalk.red("!!!");
message += "\n"+chalk.blue.underline("Otto");
message += chalk.bgRed.bold.green(" is awesome!");
console.log(message);
