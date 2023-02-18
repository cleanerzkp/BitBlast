// Import the MerkleTree class
const MerkleTree = require('./MerkleTree');

// Define a function to concatenate two hash values
const concat = (a, b) => {
  return a + b;
};

// Define an array of leaf values
const leaves = ['A', 'B', 'C', 'D', 'E'];

// Create a new MerkleTree object
const tree = new MerkleTree(leaves, concat);

// Get the Merkle root
const root = tree.getRoot();
console.log('Root:', root);

// Get a Merkle proof for the leaf at index 2 (C)
const proof = tree.getProof(2);
console.log('Proof:', proof);
