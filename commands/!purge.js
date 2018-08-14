exports.run = (bot, message, args) =>
{
    async function purge()
    {
        message.delete();

        if(!message.member.roles.find("name", "Ultimate"))
        {
            if(!message.member.roles.find("name", "Admin Al"))
            {
                if(!message.member.roles.find("name", "Omega"))
                {
                    message.channel.send('Tu n\'as pasles droits pour cette action.');
                    return;
                }
            }
            
        }

        if(isNaN(args[0]))
        {
            message.channel.send('Entrez un nombre comme argument. \n Example: ' + prefix + 'purge 10');
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + 'messages trouvés, éffacés');

        message.channel.bulkDelete(fetched);
    }

    purge();
}