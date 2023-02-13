function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greeting("John", sayGoodbye);
  // Output:
  // Hello, John!
  // Goodbye!
  

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The operation was successful.");
    }, 2000);
  });
  
  promise.then(result => {
    console.log(result);
  });
  // Output:
  // The operation was successful.
  

let lang1 = ['html', 'css', 'javascript'];
let lang2 = ['solidity', 'python', 'rust'];
let learnings = [...lang1, ...lang2];

console.log(learnings);