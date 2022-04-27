// async functions always return a promise. 
//  This means we can use traditional promise syntax, like .then() and .catch with our async functions

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:
async function withAsync() {
  if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
}

withAsync(0)
.then(resolveValue => {
  console.log(resolveValue);
})

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
