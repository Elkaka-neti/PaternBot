const Discord = require('discord.js');

const chalk = require('chalk');

module.exports = async(interaction, client) => {
  var embed = new Discord.EmbedBuilder()
  .setTitle(" ")
  .setDescription("> **<:DiscordPartner:795661696161153034> `Gerenciador de parcerias`**\n\n* *Todas as parcerias devem estar de acordo com as [diretrizes do bot](https://paternbot.ml/guidelines)*")
  .addFields(
    {
      "name": "<:seguranca:977193497536921650> **Requisitos Personalizados**",
      "value": "```\nSeu servidor está com requisitos personalizados ativos, a lista de servidores pode estar limitada.\n```"
    },
    {
      "name": "<:classic:795350317059276800> **Quantidade de membros**",
      "value": "```\nParabéns! Seu servidor cumpre os requisitos mínimos de membros da maioria dos servidores.\n```"
    },
    {
      "name": "<a:notCHECK_bot:801265080196399145>**Parcerias automáticas**",
      "value": "```\nAs parcerias automáticas estão desativadas em seu servidor,  algum representante de parcerias precisará autorizar manualmente as parcerias.\n```"
    },
    {
      "name": "⠀⠀⠀⠀",
      "value": "⠀⠀⠀⠀"
    },
    {
      "name": "> <a:VIP:795364216697126982> **`Parcerias disponíveis`**",
      "value": "***Você tem mais 50 parcerias disponíveis [atualize para premium](https://paternbot.ml/premium)***"
    }
    )
    .setColor("#398ce6");
    
    const row = new Discord.ActionRowBuilder()
			.addComponents(
				new Discord.ButtonBuilder()
					.setLabel('Descobrir servidores')
					.setURL("https://paternbot.ml/servers/discover")
        .setEmoji("974367537368301600")
					.setStyle(Discord.ButtonStyle.Link),
			);
			
			const row1 = new Diacord.ActionRowBuilder()
			.addComponents(
			  new Discord.ButtonBuilder()
			  .setCustomId("randomServer")
			  .setLabel("Servidor aleatório")
			  .setEmoji("961678055565328475")
			  .setStyle(Discord.ButtonStyle.Primary),
			  );

    
    await interaction.reply({embeds: [embed], components: [row,row1]})
}