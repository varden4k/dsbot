const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => {
    console.log('KURLA123');
    client.user.setActivity('szanty', {type: 'LISTENING'});
});

client.user.setStatus('dnd')
  .then(console.log)
  .catch(console.error);

client.on('message', message => {
    if (msg.content === prefix + 'raz') {
        msg.channel.send('test');
      }
});

 client.on('message', msg => {
  if (msg.content === prefix + 'kostka') {
    var roll = Math.floor(Math.random() * 6) + 1;
             msg.channel.send({
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
