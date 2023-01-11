const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
  
	.setName('patern')
	.setNameLocalizations({
	  'pt-BR': "parceria"
	})
	.setDescription('Divulgue seu servidor se juntando a outras comunidades com requisitos similares.')
 .setDescriptionLocalizations({
   'en-US': "Promote your server by joining other communities with similar requirements."
 })

module.exports = {
  data: data
}
