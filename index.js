const Discord = require("discord.js");
const client = "YOUR CLIENT ID"; // Your discord.js client
const Topgg = require('@top-gg/sdk')
const { keep_alive } = require("./keep_alive");


const api = new Topgg.Api('YOUR TOP.GG TOKEN')

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    shardId: client.shard.ids[0], // if you're sharding
    shardCount: client.options.shardCount
  })
}, 1800000) // post every 30 minutes
