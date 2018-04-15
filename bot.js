const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => {
  client.user.setActivity('szanty', {type: 'LISTENING'});
  client.set
});
client.login("MzQ5NjQyMjE0NzAxNDAwMDY0.DH4dOA.fXGo7Rb536zGQqqYD5XDfV70HQU");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//raz
client.on('message', msg => {
  if (msg.content === prefix + 'raz') {
    msg.channel.sendMessage('harr skurwysyny XD') 
    break;}
  if (msg.content === prefix + 'riot') {
     msg.channel.sendMessage('10zł = 350<:rp:346616505028575242> \n20zł = 700<:rp:346616505028575242> \n40zł = 1200<:rp:346616505028575242>') 
    return; }
 });;
