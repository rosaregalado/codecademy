// using async...await to return a promise

const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// expected output:

// 1. Heading to the store to buy beans...
// 2. I bought fava beans because they were on sale.
// 3. Great! I'm making fava beans for dinner tonight!

