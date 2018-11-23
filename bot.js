const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','515417209267290132'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Hwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/iitxbro");
  client.user.setStatus("idle")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//iiHouSSaM#9494
        if (!developers.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === '963') {//iiHouSSaM#9494

//if (!channel) return generale.join() .then(connection => message.channel.send(` \` ** Done.:white_check_mark:  ** `));  

  let channel = client.channels.get('515417209267290132');//iiHouSSaM#9494


  channel.join()//iiHouSSaM#9494
  .then(connection => console.log(`????`))//iiHouSSaM#9494
  .catch(console.error);//iiHouSSaM#9494
  }
});
          
});
client.on('message', message => {
if(message.author.id !== '343743154429755392') return;
    if (message.content.startsWith('1')) {
        message.channel.send(` WelcoMe To ** Flix-Community 💖🌹** `)
        message.delete()
    }
    });
client.login(process.env.BOT_TOKEN);
