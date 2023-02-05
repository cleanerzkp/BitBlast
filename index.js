const form = document.querySelector('form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const blockNumber = form.elements.blockNumber.value;
  const firstCharacter = form.elements.firstCharacter.value;

  // Validate input
  if (blockNumber < 0 || blockNumber > 100 || firstCharacter.length !== 1) {
    return;
  }

  // Clear previous results
  resultsDiv.innerHTML = '';

  const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('your data to hash');
const hashValue = hash.digest('hex');

const findBlock = (blockNumber, prevBlockHash) => {
  let nonce = 0;
  let hash = '';

  while (!hash.startsWith('5')) {
    hash = crypto.createHash('sha256').update(blockNumber + nonce + prevBlockHash).digest('hex');
    nonce++;
  }

  return {
    nonce,
    hash
  };
};

let prevBlockHash = '0';
for (let i = 0; i < 3; i++) {
  const block = findBlock(i, prevBlockHash);
  console.log(`Block: Block ${i}`);
  console.log(`Nonce: ${block.nonce}`);
  console.log(`Hash: ${block.hash}`);
  prevBlockHash = block.hash;
}

});
