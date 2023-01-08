const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');
//----------_------------_------------
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_INVITES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]
});


fs.readdir(__dirname + "/Handler/",(err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/Handler/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (event.bind(null,client)));
    console.log(chalk.bgYellow("[EVENT]") + chalk.yellow(" Loading Event: "+ eventName))
  });
});

const commands = [];
const commandFiles = fs.readdirSync('./SlashCmds').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
  const clientId = '1061634612725547009';
const guildId = '765354820638081035';

for (const file of commandFiles) {
	const command = require(`./SlashCmds/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new Discord.REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log(chalk.bgYellow("[SLASH (/)]") + chalk.yellow(" Started refreshing slash's"));

		await rest.put(
			Discord.Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(chalk.bgBlue("[SLASH (/)]") + chalk.blue(" Successfully reloaded"));
	} catch (error) {
		console.error(error);
	}
})()


client.login(process.env.TOKEN);