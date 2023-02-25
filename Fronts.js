class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;

        this.head = new_node;
        return this;
    }

    removeFront() {
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front() {
        return this.head.data;
    }

    display() {
        let runner = this.head;
        let list = "";
        while (runner !== null) {
            list = list + "," + runner.data;
            runner = runner.next;
        }
        return list;
    }
}

let myGamerLinkedList = new LinkedList();

myGamerLinkedList.addFront(1);
myGamerLinkedList.addFront(69);
myGamerLinkedList.addFront(420);
myGamerLinkedList.addFront(99);
console.log(myGamerLinkedList);

myGamerLinkedList.removeFront();
console.log(myGamerLinkedList);
console.log(myGamerLinkedList.front());
console.log(myGamerLinkedList.display());