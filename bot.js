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
 
