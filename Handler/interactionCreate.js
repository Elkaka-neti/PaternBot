const Discord = require('discord.js');
const chalk = require('chalk');
const {readdir} = require('fs');

module.exports = async(client, interaction) => {
 
readdir(process.cwd() + "/INTERACTIONS", (err, dirns) => {
if (err) console.log(err);
dirns.forEach((dir) => {
if (interaction.type == dir) {
    
readdir(process.cwd() + "/INTERACTIONS/" + dir, (err, files) => {
files.forEach((file) => {
file = file.split(".js")[0]
if (interaction.customId == file || interaction.commandName == file) {
var command = require(process.cwd() + "/INTERACTIONS/" + dir + "/" + file);
async function _init() {
let exec = command;
await exec(interaction, client);
}
_init()
}
})
})
}
})
})

}


       

  
