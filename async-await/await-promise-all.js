// Another way to take advantage of concurrency when we have multiple promises 
// which can be executed simultaneously is to await a Promise.all()

// We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. 
// This promise will resolve when all of the promises in the argument array have resolved

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

async function serveDinnerAgain() {
  const foodArray = await Promise.all(
    [steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]
  );
  let vegetable = foodArray[0];
  let starch =  foodArray[1];
  let protein =  foodArray[2];
  let side =  foodArray[3];
  console.log(`Dinner is served. We're having ${vegetable},
  ${starch}, ${protein}, ${side}.`)
}

serveDinnerAgain();