// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// This code checks if our message includes !status
// We only want our code to run if it does!
if(context.params.event.content.includes("!status")) {
  
  // This is our code which updates our status!
  // You could improve it by letting the user specify what the status should be set to
  lib.discord.users['@0.1.5'].me.status.update({
    activity_name: `Counter-Strike: Global Offensive`,
    activity_type: 'GAME',
    status: 'ONLINE'
  });
  
  // This code posts in our Discord channel when our command is run!
  return lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `The bot's status was set!`
  });
}


// This code checks if our message includes !clearstatus
// We only want to clear their status if it does!
if(context.params.event.content.includes("!clearstatus")) {
  
  // This code clears our custom status
  lib.discord.users['@0.1.5'].me.status.clear();
  
  // This code posts in our Discord channel when our command is run!
  return lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `The bot's status was cleared!`
  });
}