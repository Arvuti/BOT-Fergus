// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/go/i)) {
  let messageContent = context.params.event.content.match(/go/i);

  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `Go, go, go!`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}