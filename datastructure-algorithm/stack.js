// LIFO -> stack data structure

class Stack {
    constructor() {
        this.stack = []
    }
    add(friend) {
        this.stack.push(friend)
    }
    remove() {
        // this.stack.length && this.stack.pop()
        if(this.stack.length) {
            return this.stack.pop()
        }
    }
}
const friends = new Stack()
friends.add('Sajeeb')
friends.add('Shakib')
friends.add('Jhon')
console.log(friends);
const special = friends.remove()
console.log(special);
console.log(friends);