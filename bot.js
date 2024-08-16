const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createTeams(array, teamSize, minLastTeamSize) {
  const teams = [];
  while (array.length >= teamSize + minLastTeamSize) {
    const team = array.splice(0, teamSize);
    teams.push(team);
  }
  if (array.length > 0) {
    teams.push(array.splice(0, minLastTeamSize));
  }
  return teams;
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates],
});

const settingsRaw = fs.readFileSync('./settings.json');
const settings = JSON.parse(settingsRaw);

const commands = [
  new SlashCommandBuilder()
    .setName('randomize')
    .setDescription('Randomize users in a specified voice channel and create teams')
    .addIntegerOption(option =>
      option.setName('teamsize').setDescription('Size of each team')
    )
    .addIntegerOption(option =>
      option.setName('minlastteamsize').setDescription('Minimum size of the last team')
    )
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(settings.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(settings.clientId, settings.guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === 'randomize') {
    const voiceChannelId = settings.voiceChannelId;
    const teamSize = options.getInteger('teamsize') || settings.teamSize;
    const minLastTeamSize = options.getInteger('minlastteamsize') || settings.minLastTeamSize;

    const voiceChannel = interaction.guild.channels.cache.get(voiceChannelId);
    if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
      await interaction.reply('Invalid voice channel.');
      return;
    }

    const voiceStates = voiceChannel.members.map(member => member.user);

    const randomizedArray = shuffleArray([...voiceStates]);
    const teams = createTeams(randomizedArray, teamSize, minLastTeamSize);

    // Your code to create voice channels and manage deletion here

    await interaction.reply('Randomization and team creation complete!');
  }
});

client.login(settings.token);