class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.value === value) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1500);
const value = new LinkedList(head);
value.add(27)
value.add(13)
value.add(59)
value.add(68)
value.add(43)
console.log(JSON.stringify(value))