const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
  
	.setName('test')
	.setDescription('Tentando comando')


module.exports = {
  data: data
}
