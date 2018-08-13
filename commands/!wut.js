const Discord = require('discord.js');

exports.run = (bot, message, args) =>
{
    let rich = new Discord.RichEmbed();
         rich.setDescription('Nani ??');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098462/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         
 
         message.channel.send({embed: rich});
}