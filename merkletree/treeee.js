class MerkleTree {
  constructor(leaves, concatFunc) {
    this.leaves = leaves;
    this.concatFunc = concatFunc;
  }

  getRoot() {
    if (this.leaves.length === 0) {
      return null;
    }
  
    let layer = this.leaves;
    while (layer.length > 1) {
      const nextLayer = [];
      for (let i = 0; i < layer.length; i += 2) {
        const a = layer[i];
        const b = (i + 1 < layer.length) ? layer[i + 1] : '';
        const hash = this.concatFunc(a, b);
        nextLayer.push(hash);
      }
      layer = nextLayer;
    }
  
    return layer[0];
  }
} 


const crypto = require('crypto');

function sha256Concat(a, b) {
  // Concatenate the two leaf nodes as strings
  const concatStr = a.toString() + b.toString();

  // Hash the concatenated string with SHA-256
  const hash = crypto.createHash('sha256').update(concatStr).digest('hex');
  return hash;
}

const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const tree = new MerkleTree(leaves, sha256Concat);
const root = tree.getRoot();
console.log(root);
