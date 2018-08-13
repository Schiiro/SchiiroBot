const Discord = require('discord.js');
const bot = new Discord.Client();

const func = require('./functions.js');

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

    


    //!confused
    if(message.content === '!confused')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + '  is being confused');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231194/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }

    //!cry
    if(message.content === '!cry')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + '  is sad :c ');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098484/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!cry2
    if(message.content === '!cry2')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + '  is sad :c ');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231190/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!embarassed
    if(message.content === '!embarassed')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is being embarassed');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231200/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!error
    if(message.content === '!error')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + '.exe as cease to exist');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231221/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!happy
    if(message.content === '!happy')
    {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is really happy ! ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098458/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!heart
    if(message.content === '!heart')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + ' is giving his love ');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098464/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!hello
    if(message.content === '!hello')
    {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' hello everyone !! ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231185/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!hug
    if(message.content === '!hug')
    {
        let rich = new Discord.RichEmbed();
        
        rich.setDescription(message.author + ' wants a hug :3');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231193/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!idea
    if(message.content === '!idea')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + '  got a big idea ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231220/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }

    //!judge
    if(message.content === '!judge')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + '  is judging someone ');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098471/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!kawaii
    if(message.content === '!kawaii')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' have seen something cute...  KAWAIIIII');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231219/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!kill
    if(message.content === '!kill')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + ' want to kill someone');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231215/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!knee
    if(message.content === '!knee')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + '  knee to someone ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231208/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!letsgo
    if(message.content === '!letsgo')
    {
        let rich = new Discord.RichEmbed();
        rich.setDescription(message.author + ' is ready ! Let\'s go >w< ');
        rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098457/ANDROID/sticker.png');
        rich.setColor('ORANGE');
        rich.set

        message.channel.send({embed: rich});
    }

    //!mad
    if(message.content === '!mad')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' seem very mad... *run* ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098468/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!nice
    if(message.content === '!nice')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' nice one bro ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231187/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!nyan
    if(message.content === '!nyan')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription('Nyan nyan ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231201/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!owned
    if(message.content === '!owned')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' just get owned ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231209/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!punish
    if(message.content === '!punish')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is going to punish someone ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098477/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!ready
    if(message.content === '!ready')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is ready for the battle !  ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231186/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!shocked
    if(message.content === '!shocked')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription('...okay');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231205/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!sleepy
    if(message.content === '!sleepy')
      {
          let rich = new Discord.RichEmbed();
          rich.setDescription(message.author + ' is tired, maybe it\'s time to go sleep ?');
          rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098474/ANDROID/sticker.png');
          rich.setColor('ORANGE');
          rich.set
  
          message.channel.send({embed: rich});
    }
     
    //!think
    if(message.content === '!think')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is thinking about something.. ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231204/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!wave
    if(message.content === '!wave')
      {
          let rich = new Discord.RichEmbed();
          rich.setDescription(message.author + ' is waving at someone ');
          rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098460/ANDROID/sticker.png');
          rich.setColor('ORANGE');
          rich.set
  
          message.channel.send({embed: rich});
    }
     
    //!wave2
    if(message.content === '!wave2')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription(message.author + ' is waving at someone ');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231218/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!woaw
    if(message.content === '!woaw')
      {
          let rich = new Discord.RichEmbed();
          rich.setDescription('OwO ');
          rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098469/ANDROID/sticker.png');
          rich.setColor('ORANGE');
          rich.set
  
          message.channel.send({embed: rich});
    }
     
    //!wut
    if(message.content === '!wut')
     {
         let rich = new Discord.RichEmbed();
         rich.setDescription('Nani ??');
         rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/13098462/ANDROID/sticker.png');
         rich.setColor('ORANGE');
         rich.set
 
         message.channel.send({embed: rich});
    }
     
    //!yay
    if(message.content === '!yay')
      {
          let rich = new Discord.RichEmbed();
          rich.setDescription('Yay !');
          rich.setImage('https://stickershop.line-scdn.net/stickershop/v1/sticker/33231184/ANDROID/sticker.png');
          rich.setColor('ORANGE');
          rich.set
  
          message.channel.send({embed: rich});
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


 