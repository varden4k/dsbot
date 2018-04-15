const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
client.on('ready', () => {
        client.user.setActivity('szant', {type: 'LISTENING'});
    client.user.setUsername("Pirat");

    if (running == false) {
        console.log("Bot running! (Took: " + ((new Date()).getTime() - loadstart.getTime()) + " ms)");
        running = true;
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
