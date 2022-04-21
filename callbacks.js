const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

let prom = new Promise((resolve, reject) => {
  let inStock = checkInventory();
  if (inStock){
    resolve("Thank you. Your order was successful.");
  } else {
    reject("We're sorry. Your order could not be completed because some items are sold out");
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkInventory(order).then(handleSuccess, handleFailure);

