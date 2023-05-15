/*
    1. Singly Linked List
    2. Doubly Linked List
    3. Circularly Linked List
*/

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next ? next : null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    print() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    insertAtTail(data) {
        // create a new node
        let newNode = new Node(data);

        // if the list is empty
        // put the data node that we create in the head
        if (this.head == null) {
            this.head = newNode;
        } else {
            // when the list is not empty
            // we find the last node of the list
            let lastNode = this.head;

            while (lastNode.next != null) {
                lastNode = lastNode.next;
            }

            // lastNode.next = null
            // we insert the new node as the next node
            // of the last node
            lastNode.next = newNode;
        }
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Homework
    // return the length / number of nodes in the linked list
    length() {
        
    }

    // delete the head node from the linked list
    deleteAtHead() {
        
    }

    // delete the last item from the linked list
    deleteAtTail() {
        
    }

    // return the middle node address of the linked list
    findMiddle() {
        
    }
}

let list = new LinkedList();

list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtHead(2);

console.log(list.print());
// console.log(list.length()); // print 4 -> number of nodes in the linked list at that point of time

/*
    list = LinkedList {
            head: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: null
                }
            }
        }
*/