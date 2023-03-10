const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const numBlocks = form.elements.numBlocks.value;
  const hashStart = form.elements.hashStart.value;

  output.textContent = '';
  let prevBlockHash = '';
  for (let i = 1; i <= numBlocks; i++) {
    let block = {
      nonce: 0,
      hash: ''
    };
    while (!block.hash.startsWith(hashStart)) {
      block.nonce++;
      block.hash = await hash(`${prevBlockHash}${block.nonce}`);
    }
    output.textContent += `Block: Block ${i}\n`;
    output.textContent += `Nonce: ${block.nonce}\n`;
    output.textContent += `Hash: ${block.hash}\n\n`;
    prevBlockHash = block.hash;
  }
});

async function hash(data) {
    const buffer = new TextEncoder().encode(data);
    const hashArray = await window.crypto.subtle.digest('SHA-256', buffer);
    const hex = Array.from(new Uint8Array(hashArray)).map(b => b.toString(16).padStart(2, '0')).join('');
    return hex;
  }
  