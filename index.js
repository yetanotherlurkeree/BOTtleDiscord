const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});

client.on('message', message =>{
	if (message.content === '!hello') {
		message.channel.send('Hello World!');
		message.channel.send('Yo Adriano!');
	}
})

client.once('ready', () => {
	console.log('Ready!');
})

client.login('OTcyMTk1NTc1ODkyMTY0NjQ4.GbvVW4.qfl6-a6q82aX2fNn0DTqiHI8-9a4CNvey0uymY')
