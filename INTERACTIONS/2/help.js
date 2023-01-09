const Discord = require('discord.js');

const chalk = require('chalk');

module.exports = async(interaction, client) => {
  
  
  var embed = new Discord.MessageEmbed()
  .setAuthor({content: client.user.tag + "'s help"})
  .setDescription("🇧🇷 **Olá, bem vindo ao painel de ajuda do bot!**\nAqui lhe ajudaremos desde o cadastro até sua primeira parceria. Primeiro, confira nossos painéis de ajuda:\n<a:info:791353607919239199> **[Website](https://google.com)**\n<:DiscordPartner:795661696161153034> **[Procurar parceria](https://google.com)**")
  .setColor("#74a9f3")
  
  
  interaction.reply({content: "", embeds: [embed]})
}