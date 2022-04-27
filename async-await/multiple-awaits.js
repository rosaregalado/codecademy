// The true beauty of async...await is 
// when we have a series of asynchronous actions which depend on one another.

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  console.log(type);
  let isSoft = await soakTheBeans(type);
  console.log(isSoft);
  let dinner = await cookTheBeans(isSoft)
  console.log(dinner)
}
makeBeans();


// native promise method (old method):

// function nativePromiseVersion() {
//   returnsFirstPromise()
//     .then((firstValue) => {
//       console.log(firstValue);
//       return returnsSecondPromise(firstValue);
//     })
//    .then((secondValue) => {
//       console.log(secondValue);
//     });
// }