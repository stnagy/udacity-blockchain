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