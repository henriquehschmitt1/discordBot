const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: 'rimUOF7kI9QML0Q1iprQzFcSF',
    consumer_secret: 'jwS1rJFsPh1NXnOq8FydeKYlvctuYUgrh6OMhKaKwnCvs5pbPF',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAPdsNQEAAAAA1Ams6BcJKzOEXfuoqcKe41W2320%3Dz4oUT6rgJyxy0GnwX5vHswDysRifao1S2x096dhjwRw5ryUO63'
});

client.get('search/tweets', { q: 'nasa' }, function (error, tweets, response) {
    console.log('USUARIO COMEÇA AQUI:', tweets.statuses[0]);
});



const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription(tweets.statuses[i].text)
    //tweets.statuses[i].user.description
    .setThumbnail(tweets.statuses[i].user.profile_image_url)
    .addFields(
        { name: 'Descrição do usuário', value: tweets.statuses[i].user.description },
        { name: '\u200B', value: '\u200B' },
        { name: 'Link do tweet', value: `https://twitter.com/${tweets.statuses[i].user.name.replace(/\s+/g, '')}/status/${tweets.statuses[i].id_str}`, inline: true },
        { name: 'Tweetado em:', value: tweets.statuses[i].created_at, inline: true },
    )
    .setTimestamp()
    .setFooter('Hoje, às', 'https://i.imgur.com/XlctxvH.png');