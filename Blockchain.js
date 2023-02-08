const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for(let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i];
            const prev = this.chain[i - 1];
            if(block.previousHash.toString() !== prev.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;


/*
const block1 = new Block("Charlie sent Dave 2 BTC");
const block2 = new Block("Dave sent Alice 1 BTC");
const block3 = new Block("Alice sent Bob 3 BTC");

blockchain.addBlock(block1);
blockchain.addBlock(block2);
blockchain.addBlock(block3);

console.log(blockchain.chain);
*/
