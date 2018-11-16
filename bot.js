const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("If you can dream it you can do it",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('2Wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('1Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
  
  }
          
});
client.login(process.env.BOT const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("If you can dream it you can do it",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('2Wt')) {const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("If you can dream it you can do it",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('2Wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('1Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
  
  }
          
});
client.login(process.env.BOT_TOKEN);
 
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('1Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`${argresult} \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '..1') {
  let channel = client.channels.get('511744532992229377');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
 
const Discord = require("discord.js");//NouNouDz#6720
const nounoudz = new Discord.Client();//NouNouDz#6720
const nounou = ['ايدي حسابك','401406828820299777'];

nounoudz.on("ready", () => {//NouNouDz#6720
console.log('Ready To Run ');//NouNouDz#6720
  nounoudz.user.setActivity(`N o u N o u`, {type:'WATCHING'}); 
});

nounoudz.on('message', message => {//NouNouDz#6720
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!nounou.includes(message.author.id)) return;
 
  if (message.content.startsWith('nWt')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult, {type:'WATCHING'});//NouNouDz#6720
     message.channel.send(`☑`)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('nLs')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult , {type:'LISTENING'});//NouNouDz#6720
     message.channel.send(`☑`)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('nSt')) {
    nounoudz.user.setGame(argresult, "https://www.twitch.tv/idk");//NouNouDz#6720
     message.channel.send(`☑`)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else//NouNouDz#6720
      if (message.content.startsWith('nPl')) {//NouNouDz#6720
    nounoudz.user.setGame(argresult);//NouNouDz#6720
     message.channel.send(`☑`)//NouNouDz#6720
          message.delete()//NouNouDz#6720
  }//NouNouDz#6720
});//NouNouDz#6720

nounoudz.on('message', message => {//NouNouDz#6720
        if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
  if (message.content === '951') {//NouNouDz#6720

  let channel = nounoudz.channels.get('511744532992229377');//NouNouDz#6720

  channel.join()//NouNouDz#6720
  .then(connection => message.channel.send(`Done ☑`))//NouNouDz#6720
  .catch(console.error);//NouNouDz#6720
  }
});


nounoudz.login(process.env.BOT_TOKEN);//NouNouDz#6720
 
