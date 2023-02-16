class MerkleTree {
  constructor(leaves, concatFunc) {
    this.leaves = leaves;
    this.concatFunc = concatFunc;
  }

  getRoot() {
    if (this.leaves.length < 2) {
      return null;
    }

    // Hash the two leaves together
    const root = this.concatFunc(this.leaves[0], this.leaves[1]);

    return root;
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

const leaves = ['A', 'B'];
const tree = new MerkleTree(leaves, sha256Concat);
const root = tree.getRoot();
console.log(root);
