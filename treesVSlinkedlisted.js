class LinkedListNode {
    constructor (data) {
    this.data = data;
    this.next = null;
    }
}
    
    class TreeNode {
    constructor (data) {
    this.data = data;
    this.children = [];
    }
}

const numbers = [1, 4, 7, 9, 10, 12, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        console.log("Found 10 at index: " + i);
        break;
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        
    }
}

module.exports = Node;

const node = new Node(5);

console.log(node.data); // 5
console.log(node.left); // null
console.log(node.right); // null