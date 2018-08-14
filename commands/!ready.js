const Discord = require('discord.js');

exports.run = (bot, message, args) =>
{
    let rich = new Discord.RichEmbed();
    rich.setDescription(message.author + ' is ready for the battle !  ');
    rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231186/ANDROID/sticker.png');
    rich.setColor('ORANGE');
    rich.set

    message.channel.send({embed: rich});

}