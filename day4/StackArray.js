class Stack {
    constructor(size) {
        this.items = [];
        this.size = size ? size : 100;
        this.top = -1;
    }

    // methods or operations
    push(data) {
        if (this.top + 1 == this.size) {
            console.log('Error: Stack Overflow!');
        } else {
            this.items.push(data);
            this.top++;
        }
    }

    // returns the topmost element of the stack
    tos() {
        if (this.isEmpty()) {
            return 'Error: Stack is Empty!';
        } else {
            return this.items[this.top];
        }
    }

    // deletes the element from the top
    pop() {
        if (this.isEmpty()) {
            // stack is empty
            console.log('Error: Stack Underflow');
        } else {
            this.items.pop();
            this.top--;
        }
    }

    isEmpty() {
        return this.top == -1;
    }
}

// create a new stack
let stack = new Stack(5);

stack.push(5);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.pop(); stack.pop(); stack.pop(); stack.pop(); stack.pop(); stack.pop();
console.log(stack.isEmpty());