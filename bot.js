const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => {
    console.log('PLEBS2');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});


client.on('message', message => {
    if (message.content === prefix + 'raz') {
        message.channel.send('test');
      }
});

 client.on('message', msg => {
  if (message.content === prefix + 'kostka') {
    var roll = Math.floor(Math.random() * 6) + 1;
             message.channel.send({
      embed: {
        color: 3447003,
        description: msg.author + ', wylosowałeś: ' + roll,
        author: {
          name: '🎲 Kostka 🎲',
        }
      }}
         )}});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); 
