const Discord = require('discord.js');

exports.run = (bot, message, args) =>
{
    let rich = new Discord.RichEmbed();
    rich.setDescription('Nyan nyan ');
    rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231201/ANDROID/sticker.png');
    rich.setColor('ORANGE');
    rich.set

    message.channel.send({embed: rich});

}