const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";
const narko = require('cennik.json');


client.on('ready', () => {
    console.log('PLEBS4')
    client.user.setUsername("PIRAT");
    client.user.setStatus('dnd');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
