const Discord = require('discord.js');
const bot = new Discord.Client();

var commands = require('./help_commands/help_commands.json');

var token = require('./token.json');

bot.on('ready', function () {
  console.log("Je suis connecté !");

});

const prefix = '!'

bot.on('message', message =>
{
    
    let msg = message.content.toUpperCase();
    let sender = message.author;

    let args = message.content.slice(prefix.lenght).trim().split(" ");
    let comd = args.shift().toLowerCase();


    if(sender.bot) return;
    if(!message.content.startsWith(prefix)) return;

    

    try{

        let commandFile = require(`./commands/${comd}.js`);
        commandFile.run(bot, message, args);

    } catch(e) {
        
        console.log(e.message);

    } finally {
        
        console.log(`${message.author.username} ran the command: ${comd}`);

    }
 
    
    //!help
    if(msg.startsWith(prefix + 'HELP'))
    {
        if(msg === prefix + 'HELP')
        {
            const onlyHelp = new Discord.RichEmbed()
                .setColor('GREEN')
                
            let commandsFound = 0;

            for(var cmd in commands)
            {
                if(commands[cmd].group.toUpperCase() === 'USER')
                {
                    commandsFound++;
                    onlyHelp.addField(commands[cmd].name, ' **Description:** ' + commands[cmd].desc +  '\n**Usage:** ' + prefix + commands[cmd].usage);
                }

                onlyHelp.setFooter('Currently showing user commands.');
            }

            message.channel.send({embed: onlyHelp});

        }
        else
        {
           let groupFound = '';
           
            for(var cmd in commands)
            {
                if(args.join(' ').trim().toUpperCase() === commands[cmd].group.toUpperCase())
                {
                    groupFound = commands[cmd].group.toUpperCase();
                    break;
                }

            }

            if(groupFound != '')
            {
                if(groupFound === 'EMOTE' || groupFound === 'EMOTE2' || groupFound === 'EMOTE3')
                {
                    const onlyHelp = new Discord.RichEmbed()
                        .setColor('GREEN')
                
                    let commandsFound = 0;
                
                
                    for(var cmd in commands)
                    {
                        if(commands[cmd].group.toUpperCase() === groupFound)
                        {   
                            commandsFound++;
                            onlyHelp.addField(prefix + commands[cmd].name, '.');
                        }

                        
                    }
                    onlyHelp.setFooter('Use !help emote/emote2/emote3');
                    message.channel.send({embed: onlyHelp});
                    return;
                }

                const onlyHelp = new Discord.RichEmbed()
                .setColor('GREEN')
                
                let commandsFound = 0;
                
                
                for(var cmd in commands)
                {
                    if(commands[cmd].group.toUpperCase() === groupFound)
                    {   
                        commandsFound++;
                        onlyHelp.addField(commands[cmd].name, ' **Description:** ' + commands[cmd].desc +  '\n**Usage:** ' + prefix + commands[cmd].usage + '\n\n');
                    }

                    onlyHelp.setFooter('Currently showing ' + groupFound + ' commands.');
                }

                message.channel.send({embed: onlyHelp});

            }
        }
    }

});

for(var tok in token)
            {
                if(token[tok].group.toUpperCase() === 'SCHIIRO')
                {
                    bot.login(token[tok].id);
                }                
            }


 