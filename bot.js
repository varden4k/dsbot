const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => {
    console.log('PLEBS3')
    client.user.setUsername("Pirat");
    client.user.setStatus('dnd');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
