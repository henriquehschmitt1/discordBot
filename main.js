const Twitter = require('twitter')

const client1 = new Twitter({
    consumer_key: 'rimUOF7kI9QML0Q1iprQzFcSF',
    consumer_secret: 'jwS1rJFsPh1NXnOq8FydeKYlvctuYUgrh6OMhKaKwnCvs5pbPF',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAPdsNQEAAAAA1Ams6BcJKzOEXfuoqcKe41W2320%3Dz4oUT6rgJyxy0GnwX5vHswDysRifao1S2x096dhjwRw5ryUO63'
});

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Golf is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'p') {
        client1.get('search/tweets', { q: 'nasa' }, function (error, tweets, response) {
            for (let i = 0; i < 3; i++) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${tweets.statuses[i].user.name} (@${tweets.statuses[i].user.screen_name})`)
                    .setURL(`https://twitter.com/${tweets.statuses[i].user.screen_name}`)
                    .setDescription(tweets.statuses[i].text)
                    .setThumbnail(tweets.statuses[i].user.profile_image_url)
                    .addFields(
                        { name: 'Descrição do usuário', value: tweets.statuses[i].user.description },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Link do tweet', value: `https://twitter.com/${tweets.statuses[i].user.name.replace(/\s+/g, '')}/status/${tweets.statuses[i].id_str}`, inline: true },
                        { name: 'Tweetado em:', value: tweets.statuses[i].created_at, inline: true },
                    )
                    .setTimestamp()
                    .setFooter('Hoje, às', 'https://i.imgur.com/XlctxvH.png');
                message.channel.send(exampleEmbed);
            }
        });
        message.channel.send('pong!');
    }
});

client.login('ODE3MTY1MzE4NDMzOTMxMjg1.YEFigg.w-6Cp6m5--SEepduTjvPUX7pKHo');
