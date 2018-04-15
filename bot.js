const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('GANG KURWA');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
  });
client.on('ready', () => {
  client.user.setActivity('szanty', {type: 'LISTENING'});
  client.set <------- co to kurwa?
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
