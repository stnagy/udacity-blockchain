const SHA256 = require("crypto-js/sha256");

/*******Blockchain Class *************************
| Class with a constructor for new block.        |
| ***********************************************/

class Block {
    
    // function called when class is initialized
    constructor (data) {
        // Block data model
        this.hash = "",
        this.height = 0,
        this.prev_block = "",
        this.time = 0,
        this.body = data
    }
}
/*******Blockchain Class *************************
| Class with a constructor for new blockchain.   |
| ***********************************************/

class Blockchain {
    
    constructor () {
        this.chain = [];
        this.addBlock(new Block("Genesis Block"));
    }
    
    /*  addBlock function -- adds new block to blockchain
    *   1. Block height determined using length of `chain` array on blockchain object.
    *   2. Time determined using built-in Date() class.
    *   3. Previous block hash referenced in new block as `prev_block`.
    *   4. Hash of new block computed and assigned to `hash`.
    *   5. New block pushed to `chain` array. 
    */
    addBlock(new_block){
        new_block.height = this.chain.length;
        new_block.time = new Date().getTime().toString().slice(0, -3);
        if (this.chain.length > 0) {
            new_block.prev_block = this.chain[this.chain.length-1].hash;
        }
        new_block.hash = SHA256(JSON.stringify(new_block)).toString();
        this.chain.push(new_block);
    }
    
    blocks(){
        return this.chain
    }
    
}