const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
  
	.setName('help')
	.setDescription('Veja informações sobre o bot e todas suas funções.')
 .setDescriptionLocalizations({
   'en-US': "See information about the bot and all its functions."
 })

module.exports = {
  data: data
}
