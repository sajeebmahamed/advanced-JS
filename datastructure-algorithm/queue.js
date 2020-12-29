// FIFO -> Queue data structure

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        if(this.queue.length) {
            return this.queue.shift()
        }
    }
}

const items = new Queue()
items.enqueue('phone')
items.enqueue('laptop')
items.enqueue('watch')
console.log(items);
const rmv = items.dequeue()
console.log(rmv);
console.log(items);