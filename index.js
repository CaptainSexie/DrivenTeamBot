/* * * * * * * * * * * * * * * * * * * * * *
 * PROJECT SYNERGY v1.4
 * BUILD: 3019.04.01
 * AUTHOR: HammeredTV (Paul Chandler)
 * ██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗███████╗██████╗ ███████╗██████╗ ████████╗██╗   ██╗
 * ██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║   ██║
 * ███████║███████║██╔████╔██║██╔████╔██║█████╗  ██████╔╝█████╗  ██║  ██║   ██║   ██║   ██║
 * ██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██╔══██╗██╔══╝  ██║  ██║   ██║   ╚██╗ ██╔╝
 * ██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║  ██║███████╗██████╔╝   ██║    ╚████╔╝ 
 * ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═════╝    ╚═╝     ╚═══╝     
 *                                                                                     
 * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * *
 * IMPORT MODULE DEPENDENCIES AND SETTINGS
 * * * * * * * * * * * * * * * * * * * * * */
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
const settings = require('./settings.json');
const client = new Discord.Client();
/* * * * * * * * * * * * * * * * * * * * * *
 * SETUP SERVER CONSTRUCT
 * * * * * * * * * * * * * * * * * * * * * */
let server = {ready: false, channelLobby: null, channelArray: new Array(),connected: false, round: new Number(1)};
/* * * * * * * * * * * * * * * * * * * * * *
 * LOGIN AND ENABLE PROJECT SYNERGY 
 * * * * * * * * * * * * * * * * * * * * * */
client.on('ready', () => {
  console.log(credit('./credit.txt'));
  loadChannels(server, client);
});
/* * * * * * * * * * * * * * * * * * * * * *
 * LISTEN FOR MESSAGE AND PARSE COMMANDS
 * * * * * * * * * * * * * * * * * * * * * */
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(settings.commandPrefix)) return;
  if (message.member.roles.find(role => role.name === settings.role)) {
    //console.log('User has role to use me.'); // <= DEBUG
    let messageArgs = message.content.split(" ");
    let command = messageArgs[0];
    if (command === settings.commandPrefix) {
      switch (true) {
        case messageArgs[1].toString().toLowerCase() === 'split':
          shuffle(commandToArray(server.channelLobby.members)).then(array => {
            if (findDiv(array) != null) {
              if (findDiv(array) == 0) {
                let str = new String();
                str = String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 121, 111, 117, 116, 117, 98, 101, 46, 99, 111, 109, 47, 119, 97, 116, 99, 104, 63, 118, 61, 71, 71, 45, 84, 77, 88, 88, 95, 108, 86, 89);
                console.log(`${str}`);
                embed(message.channel, `
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                ░░░░░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░
                ░░░░░░░░▄▄██▀▀▀▀░░▀█░░░░░░░░░░░░░░░
                ░░░░▄▄█▀▀▀▄▄▄▄█▄░▄░██░░░░░░░░░░░░░░
                ░░░▄█░▄▄▄░▄█▀▀▀▄██▀▄▀██░░░░░░░░░░░░
                ░░▄█▀░░▀▄███░░▀░░███▄██████▄▄░░░░░░
                ░░██░░░░░█▄█▀█▄██▀▀▀▀▄███▀▄▀██▄░░░░
                ░░██▀░░░▀▀██▀░░▀█▄▄██████░█░░░▀█▄░░
                ░▄██░░░░█▀█▀▀▀▀██████▀▄██░░░░░░▀█▄░
                ░█▀██░░░▀░█░░▀▀▀░▄▄▀▀▀▀▀░░░░█░░░░█▄
                ░█░░▀▀█░░░█░▀▀▀░░░░░░░░░░░▄▀░░░░░██
                ▄█▄▄░░░░░░▄░░░░░░░░░░░░░░░█▄░░░░░██
                ██▀▄░░▄░░░░▀▄░░░░░░░░░░░░█░░░░░░▄█░
                ░█▄░░░█▀░░░░░█░░░░▄░░░░░░░░░░░░▄█▀░
                ░░▀█▄▄█▄░░░░░░▀░░░░░▄░░░░░░░░░██░░░
                ░░░░▀▀██▀█▄░░░░░░░░░░▄░░░░░░▄█▀░░░░
                ░░░░░░░▀█▄█▄░░░░░░░░░▀░░░▄░▄█░░░░░░
                ░░░░░░░░▀▀▀██▄▄█▄▄█▄███████▀░░░░░░░
                ░░░░░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀▀░░░░░░░░░░
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
                join (message, str);
              }
              else {
                split(array,findDiv(array),server, message);
                addRound(server);
              }
            }
            else {
              embed(message.channel, `Error: There are not enough players in ${server.channelLobby.name}!`);
            }                
          });
          break;
        case messageArgs[1].toString().toLowerCase() === 'join':
          //console.log('Command join executed.'); <= DEBUG
          join(message, settings.url);
          break;
        case messageArgs[1].toString().toLowerCase() === 'leave':
          //console.log('Command leave executed.'); <= DEBUG
          leave(message);
          break;
        case messageArgs[1].toString().toLowerCase() === 'return':
          //console.log('Command return executed.'); <= DEBUG
          returnPlayers(server);
          break;
        case messageArgs[1].toString().toLowerCase() === 'reset':
          //console.log('Command round executed.'); <= DEBUG
          server.round = Number(1);
          console.log(`ROUND RESET:\nROUND ${server.round}:`);
          break;
        case messageArgs[1].toString().toLowerCase() === 'uc':
          //console.log('Command update executed.'); <= DEBUG
          updateChannels(server, message, settings);
          break;
        case messageArgs[1].toString().toLowerCase() === 'gc':
          //console.log('Command get channels executed.'); <= DEBUG
          embed (message.channel, `\n${server.channelArray.toString().split(',').join("\n")}`);
          break;
        case messageArgs[1].toString().toLowerCase() === 'credit':
          //console.log('Command credit executed.'); <= DEBUG
          embed (message.channel, 'Author: HammeredTV');
          break;
        case messageArgs[1].toString().toLowerCase() === 'help':
          //console.log('Command help executed.'); <= DEBUG
          embed(message.channel, "Help: \
          \n\n - !syn split ~ Distribute players into random teams.\
          \n\n - !syn return ~ Returns players to the distribution channel.\
          \n\n - !syn join ~ Joins discord channel and plays countdown.\
          \n\n - !syn leave ~ Leaves discord channel.\
          \n\n - !syn reset ~ Resets rounds.\
          \n\n - !syn gc ~ Gets linked channels.\
          \n\n - !syn uc ~ Updates linked channels.\
          ");
          break;
        default:
          // DEFAULT HELP
          //console.log('Command default executed.'); <= DEBUG
          embed(message.channel, "Error: Invalid Command Typed! \nPlease use !syn help to find out how to use me!");
          break;
      }
    }
  }
  else {
    console.log('User does not have role to use me.');
    embed(message.channel, `Error: Permission Denied!`);
  }
});
/* * * * * * * * * * * * * * * * * * * * * *
 * CLIENT LOGON USING BOT TOKEN
 * * * * * * * * * * * * * * * * * * * * * */
client.login(settings.token);
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: ROUND INCREASE
 * * * * * * * * * * * * * * * * * * * * * */
function addRound(server) {
  server.round++;
  console.log(`ROUND ${server.round}:`);
}
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: LOAD CHANNELS
 * * * * * * * * * * * * * * * * * * * * * */
function loadChannels (server, client) {
  console.log(`LOGGED IN AS ${client.user.tag.toUpperCase()}!`);
  server.channelLobby = client.channels.get(settings.lobbyChannel);
  client.channels.map(channel => {
    if (channel.name.includes(`${settings.channelPrefix}`) && channel.type == `voice`) {
      server.channelArray.push(channel);
    };
  });
  console.log(`${client.user.username.toUpperCase()} IS ONLINE, READY WITH ${server.channelArray.length} CHANNELS:`);
  console.log(`ROUND ${server.round}:`); 
  //console.log(`${server.channelArray}`); // <= DEBUG
}
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: UPDATE CHANNELS
 * * * * * * * * * * * * * * * * * * * * * */
function updateChannels(server, message, settings) {
  server.channelLobby = null, server.channelArray = new Array();
  embed (message.channel, `Updating List of Channels from Server...`);
  console.log(`UPDATING CHANNEL ARRAY:`);
  console.log(`${client.user.username.toUpperCase()} RESTARTING:`);
  client.destroy();
  client.login(settings.token);
  //message.channel.send('Updating...')
    //.then(msg => client.destroy())
    //.then(() => client.login(settings.token));
}
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: FIND DIV
 * * * * * * * * * * * * * * * * * * * * * */
 function findDiv(array) {
  let div = null;
  if (array.length > 4) {
    div = 4;
  }
  else if (array.length <= 4 && array.length > 2) {
    div = 2;
  }
  else if (array.length == 2) {
    div = 1;
  }
  else if (array.length == 1)  { // <= EASTEREGG
    div = 0;
  }
  return div;
}
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: SPLIT
 * * * * * * * * * * * * * * * * * * * * * */
function split(array, div, server, message) {
  let derv = null;
  if (div != null && div <= server.channelArray.length && server.channelArray.length > 0) {
    if (Number.isInteger(array.length / div)) {
      derv = (array.length / div);
    }
    else {
      derv = Math.ceil(array.length / div);
    }
    let teams = [""];
    for (var i = 0; i <= derv-1; i++) {
      teams[i] = `${settings.channelPrefix} ${i+1}\n`
    }
    //console.log(`SPLIT ARRAY LENGTH: ${array.length}`); // <= DEBUG
    //console.log(`SPLIT ARRAY DIVIDED: ${array.length/div}`); // <= DEBUG
    //console.log(`SPLIT DERV: ${derv}); // <= DEBUG
    let count = 0;
    array.forEach((tms, i) => {
      //console.log(`VAR i: ${i}`); // <= DEBUG
      //console.log(`VAR count ${count}`); // <= DEBUG
      //console.log(`VAR derv ${derv}`); // <= DEBUG
      if (count != (derv-1)) {
        //console.log(`!= derv-1`); // <= DEBUG
        console.log(tms.user);
        teams[count] += `${tms}\n`
        tms.setVoiceChannel(server.channelArray[count]);
        count += 1;
      }
      else {
        //console.log(`== derv`); // <= DEBUG    
        console.log(tms.user);
        teams[count] += `${tms}\n`
        tms.setVoiceChannel(server.channelArray[count]);
        count = 0;
      }
      //console.log(tms.user.username); // <= DEBUG
      
    });
    //console.log(teams) // <= DEBUG
    let ts = new Date();
    embed(message.channel, `Round: ${server.round}\n\n${teams.toString().split(',').join("\n")}\n${ts.toLocaleString()}`);
  }
  else {
    return embed(message.channel, `Error: Either there are too many players in channel ${server.channelLobby.name}\nto distribute.\n\nPlease create additional channels with the Prefix: ${settings.channelPrefix}!`);
  }
 }
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: JOIN
 * * * * * * * * * * * * * * * * * * * * * */
function join(message, url) {
  if (!(message.member.voiceChannel.members.find(members => members.id === settings.botId)) && message.member.voiceChannel && !(server.connected)) {
    //message.member.voiceChannel.join().then(connection => { // <= ALTERNATIVE CODE, BOT WILL JOIN WHERE COMMAND WAS ISSUED
    server.channelLobby.join().then(connection => { // <= PRIMARY CODE, BOT WILL JOIN CHANNEL LOBBY
      server.connected = true;
      console.log(`SYNERGY JOINED CHANNEL: ${server.channelLobby.name}.`);
      embed (message.channel, `Synergy Joined!`);
      connection.playStream(YTDL(url)).on('end', () => {
        console.log(`SYNERGY LEFT CHANNEL: ${server.channelLobby.name}.`);
        connection.channel.leave();
        embed (message.channel, `Synergy Left!`);
        server.connected = false;
      })
    }).catch(console.error);
  }
  else {
    console.log(`SYNERGY IS ALREADY IN CHANNEL: ${server.channelLobby.name}.`);
    embed(message.channel, `Error: Synergy is already in the channel!`);
  }
}
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: LEAVE
 * * * * * * * * * * * * * * * * * * * * * */
function leave(message) {
  if (message.member.voiceChannel.members.find(members => members.id === settings.botId) && message.member.voiceChannel) { 
    client.voiceConnections.get(message.guild.id).disconnect()
    //embed (message.channel, `Synergy Left!`);
    server.connected = false;
  }
}
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: RETURN PLAYERS
 * * * * * * * * * * * * * * * * * * * * * */
function returnPlayers(server) {
  server.channelArray.forEach(channel => {
    channel.members.map(member => {
      member.setVoiceChannel(server.channelLobby);
      });
  });
}
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: SHUFFLE [FISHER-YATES ALGO]
 * * * * * * * * * * * * * * * * * * * * * */
async function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  return array;
};
/* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: CHUNK ARRAY
 * * * * * * * * * * * * * * * * * * * * * */
/*
function chunk(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArray;
};
*/
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: CONVERT LIST TO ARRAY
 * * * * * * * * * * * * * * * * * * * * * */
function commandToArray(listOfMembers) {
  let teamArray = new Array();
  listOfMembers.map(x => teamArray.push(x));
  return teamArray;
};
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: EMBED MESSAGE
 * * * * * * * * * * * * * * * * * * * * * */
function embed(channel, message) {
  let embed = new Discord.RichEmbed();
  embed.setAuthor(client.user.username, client.user.avatarURL || client.user.defaultAvatarURL);
  embed.setColor(settings.hexColor);
  embed.setDescription(message);
  channel.send(embed);
};
 /* * * * * * * * * * * * * * * * * * * * * *
 * FUNCTION: CREDIT
 * * * * * * * * * * * * * * * * * * * * * */
function credit(url) {
  var fs = require("fs");
  var data = fs.readFileSync(url);
  return data.toString();
}