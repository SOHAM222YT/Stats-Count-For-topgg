const Discord = require("discord.js");
const client = new Discord.Client();
const AutoPoster = require('topgg-autoposter');

const ap = AutoPoster('TOP.GG_TOKEN', client);

ap.on('posted', () => {
  console.log('> Statistics are updated with success.')
});
client.on('ready', () => {
    console.log('ALL DATA NOW SENDING TO TOP.GG CHECK OUT YOUR BOT PAGE');
});

client.login('BOT_TOKEN');


