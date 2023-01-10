const Discord = require('discord.js');

const chalk = require('chalk');

module.exports = async(interaction, client) => {
  
  
  var embed = new Discord.MessageEmbed()
  .setTitle("  ")
  .setDescription("🇧🇷 **Olá! Bem vindo ao painel de ajuda do bot!**\n<:line:975905186876915713> *Somos um grupo que busca ajudar comunidades pequenas oferecendo um sistema próprio de parcerias que consegue divulgar vários servidores de uma forma fácil, prática e segura. Nosso objetivo é tornar o início de comunidades mais fáceis e automatizadas na plataforma, fazendo os staffs focarem no que realmente importa: A interação entre os membros.*\n<:booster:826142793638084680> **Confira nossos recursos:**\n\n<:slash:788561306759594035> **Comandos**\n[https://paternbot.ml/\ncommands](https://paternbot.ml/commands)\n<:DiscordPartner:795661696161153034> **Procurar parcerias**\n[https://paternbot.ml/\nservers/discover](https://paternbot.ml/servers/discover)\n<:textchannel:800732045491961857> **Dúvidas?\nEntre no servidor de suporte!**\n[https://paternbot.ml/\nsupport](https://paternbot.ml/support)\n<:rules:806587175869087754> **Diretrizes do bot**\n[https://paternbot.ml/\nguidelines](https://paternbot.ml/guidelines)\n<:info:826138720116670546>  **Mais sobre nós**\n[https://paternbot.ml/\nabout](https://google.com)")
  .setColor("#74a9f3")
  
  
  interaction.reply({content: "", embeds: [embed]})
}