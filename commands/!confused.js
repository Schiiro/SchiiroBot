const Discord = require('discord.js');

exports.run = (bot, message, args) =>
{ 
    let rich = new Discord.RichEmbed();
         
        rich.setDescription(message.author + '  is being confused');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231194/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        
 
        message.channel.send({embed: rich});
}