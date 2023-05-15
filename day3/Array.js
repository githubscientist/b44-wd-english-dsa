// set a context of how we can create our own data structure and write
// our own methods
class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    toString() {
        let thead = this.head;
        let data = [];
        while (thead != null) {
            data.push(thead.data);
            thead = thead.next;
        }
        return data;
    }

    push(data) {
        let newItem = new Item(data);
        let thead = this.head;

        if (thead == null) {
            this.head = newItem;
        } else {
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newItem;
        }
    }

    whileEach(func) {
        let thead = this.head;
        let index = 0;
        let nodes = [];
        
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        thead = this.head;
        while (thead != null) {
            func(thead.data, index++, nodes);
            thead = thead.next;
        }
    }
}

module.exports = Array;