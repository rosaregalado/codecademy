// await halts the execution of our async function.
// This allows us to conveniently write synchronous-style code to handle independent promises


let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken()
  const sidePromise = cookBeans()
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();
