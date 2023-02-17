const MerkleTree = require('./MerkleTree');

// Concatenation function for leaf nodes
const concat = (a, b) => `Hash(${a} + ${b})`;

// Test cases
const testCases = [
  {
    leaves: ['A'],
    expectedRoot: 'A',
  },
  {
    leaves: ['A', 'B'],
    expectedRoot: 'Hash(A + B)',
  },
  {
    leaves: ['A', 'B', 'C'],
    expectedRoot: 'Hash(Hash(A + B) + C)',
  },
  {
    leaves: ['A', 'B', 'C', 'D', 'E'],
    expectedRoot: 'Hash(Hash(Hash(A + B) + Hash(C + D)) + E)',
  },
  {
    leaves: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    expectedRoot: 'Hash(Hash(Hash(A + B) + Hash(C + D)) + Hash(Hash(E + F) + G))',
  },
];

// Run test cases
testCases.forEach(({ leaves, expectedRoot }) => {
  const tree = new MerkleTree(leaves, concat);
  const root = tree.getRoot();
  console.log(`Leaves: [${leaves.join(', ')}], Expected root: ${expectedRoot}, Actual root: ${root}`);
});
