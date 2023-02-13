const Node = require('./Node')
class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }
        
        let ptr = this.root;
        while(true) {
            if(node.data < ptr.data) {
                if(!ptr.left) {
                    ptr.left = node;
                    break;
                }
                else {
                    ptr = ptr.left;
                }
            }
            if (node.data > ptr.data) {
                if (!ptr.right) {
                    ptr.right = node;
                    break;
                }
                else {
                    ptr = ptr.right;
                }
            }
        }
    }
    hasNode(number) {
        let ptr = this.root;
        while (ptr) {
            if (ptr.data === number) {
                return true;
            }
            else if (number < ptr.data) {
                ptr = ptr.left;
            }
            else {
                ptr = ptr.right;
            }
        }
        return false;
    }
}


module.exports = Tree;


const tree = new Tree();
const node1 = new Node(4);

tree.addNode(node1);

console.log(tree.hasNode(4)); // true
console.log(tree.hasNode(7)); // false