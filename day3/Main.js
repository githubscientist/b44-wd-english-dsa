const Array = require('./Array');

let numbers = new Array();
numbers.push(3);
numbers.push(4);
numbers.push(5);

// console.log(numbers.toString());
numbers.whileEach((element, index, array) => {
    console.log(element, index, array[index]);
});