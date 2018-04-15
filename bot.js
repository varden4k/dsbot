const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => {
    console.log('GOTOWY DO DZIAŁANIA');
});

client.on('message', msg => {
  if (msg.content === prefix + 'raz') {
    msg.channel.send('harr skurwysyny XD') 
  	}
});

const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
        client.user.setActivity('szanty', {type: 'LISTENING'});
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
