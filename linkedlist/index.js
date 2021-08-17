class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter ++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    
    clear() {
        this.head = null;
    }

    removeFirst() {
       if (!this.head){
           return;
       }
       this.head = this.head.next;
    }

    removeLast() {
        if (!this.head){
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let currentNode = this.head.next;
        while(currentNode.next) {
            previous = currentNode;
            currentNode = currentNode.next;
        }
        previous.next = null;
    }

    insertLast() {
       const last = this.getLast();
        if (last) {
            // there is some existing node in the chain 
            last.next = new Node(data);
        } else {
            // the chain in here is empty
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while(node) {
            if (counter === index) {
                return node
            }
            counter ++;
            node = node.next;
        }
        return null;
    }
}


module.exports = {Node, LinkedList}
