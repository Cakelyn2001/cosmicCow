const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

commands = [];
prefix = botconfig.prefix;

bot.on("ready", async () => {
  console.log(`is online`);
});

bot.login(botconfig.token);

bot.on("message",async message =>{
  if(message.author.bot){return}
  return message.channel.send("Who tf are you");
});
