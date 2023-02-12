const Node = require('./Node')

class Tree {
    constructor() {
        this.root = null;
    }
    addNode(node) {

    }
}
module.exports = Tree;



// create a new tree and new node
const tree = new Tree();
const node = new Node(5);

// add the node to the tree using addNode
tree.addNode(node);

// the new node becomes the tree's root
console.log(tree.root.data); // 5