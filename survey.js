const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(` What's your name ? Nicknames are also acceptable `, (nickName) => {

  rl.question(`What's an activity you like doing? `, (activity) => {

    rl.question(`What do you listen to while doing that? `, (music) => {

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (mealTime) => {

        rl.question(`What's your favourite thing to eat for that meal? `, (meal) => {

          rl.question(`Which sport is your absolute favourite? `, (sport) => {

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (powers) => {

              console.log(`Thank you for your valuable feedback ${nickName}!\n It's pretty cool that you like to listen to ${music} while ${activity}.\nI bet that get's you super hunger for ${mealTime}. Those ${meal} probably taste great!\nNothing like sitting down to watch some ${sport} afterwards.\nI hope one day you really do get ${powers}. No doubt the world will be better for it! Cheers!`);

              rl.close();

            });
          });
        });
      });
    });
  });
});

