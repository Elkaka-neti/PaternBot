const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = (client, readyEvent) => {


  console.log(chalk.bgGreen("[BOT]") + chalk.green(` ${client.user.username} online!`))
}