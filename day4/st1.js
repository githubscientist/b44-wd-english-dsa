// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function checkAdjacentWords(words) {
    for (let index = 0; index < words.length; index++){
        if (words[index] == words[index + 1]) {
            return index;
        }
    }
    return -1;
}

class Stack {
    constructor(size) {
        this.items = [];
        this.size = size ? size : 100;
        this.top = -1;
    }

    // methods or operations
    push(data) {
        if (this.top + 1 == this.size) {
            // console.log('Error: Stack Overflow!');
        } else {
            this.items.push(data);
            this.top++;
        }
    }

    // returns the topmost element of the stack
    tos() {
        if (this.isEmpty()) {
            // return 'Error: Stack is Empty!';
        } else {
            return this.items[this.top];
        }
    }

    // deletes the element from the top
    pop() {
        if (this.isEmpty()) {
            // stack is empty
            // console.log('Error: Stack Underflow');
        } else {
            this.items.pop();
            this.top--;
        }
    }

    isEmpty() {
        return this.top == -1;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    // let words = userInput[0].split(' ');
    // let shouldIterateAgain = true

    // while (shouldIterateAgain) {
    //     // check if any adjacent words are equal
    //     // get the indices of the adjacent words
    //     let adjacentIndex = checkAdjacentWords(words);

    //     // if true => delete them
    //     if (adjacentIndex != -1) {
    //         // perform the deletion
    //         words.splice(adjacentIndex, 2);
    //     } else {
    //         shouldIterateAgain = false;
    //     }
    // }

    // if (words.length == 0) {
    //     console.log(-1);
    // } else {
    //     console.log(words.join(' '));
    // }
    
    let words = userInput[0].split(' ');
    
    // create a stack
    let stack = new Stack(words.length);

    for (let word of words) {
        if (stack.isEmpty()) {
            // push the word to the stack
            stack.push(word);
        } else {
            // if the stack is not empty
            // check the tos with the current word
            if (word == stack.tos()) {
                // pop the stack
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
  //end-here
});