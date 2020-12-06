const client = require('discord-rich-presence')('785275386976141333');
 
client.updatePresence({
  state: 'coding',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'icon',
  largeImageText: "coding",
  smallImageKey: 'testing',
  smallImageText: "smol",
  instance: true,
  
});