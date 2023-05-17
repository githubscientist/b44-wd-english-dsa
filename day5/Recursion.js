/*
    Recursion: A function that calls itself!

    Example: 

    Write a recursive function to print a the message 'hello' for 3 times.
*/

// normal function
// function sayHello() {
//     console.log('hello');
// }

// sayHello();


// recursive function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree

    sayHello():
        - console.log('hello')
        - sayHello():
            - console.log('hello')
            - sayHello():
                - console.log('hello')
                - sayHello()
                    ...
                    ...
                    ...

    
*/

// let times = 3;

// function sayHello() {
//     if (times == 0) return;
//     console.log('hello');
//     // after printing the message to the console
//     // decrease the number of times to be printed
//     times--;
//     sayHello();
// }

// sayHello();

/*
    sayHello():
        - times = 3, 3 == 0, false
        - console.log('hello')
        - times = 2
        - sayHello():
            - times = 2, 2 == 0, false
            - console.log('hello')
            - times = 1
            - sayHello():
                - times = 1, 1 == 0, false
                - console.log('hello')
                - times = 0
                - sayHello():
                    - times = 0, 0 == 0, true, return
*/

// let times = 5;

// function sayHello() {
//     if (times == 0) return;
//     console.log('hello');
//     times--;
//     sayHello();
// }

// sayHello();

// let times = 5;

// function sayHello() {
//     for (let i = 1; i <= times; i++){
//         console.log('hello');
//     }
// }

// function sayHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

/*
    sayHello(3):
        - times = 3, 3 == 0, false
        - console.log('hello')
        - sayHello(2):
            - times = 2, 2 == 0, false
            - console.log('hello')
            - sayHello(1):
                - times = 1, 1 == 0, false
                - console.log('hello')
                - sayHello(0):
                    - times = 0, 0 == 0, true, return
*/

// Exercise: 1
// Write a recursive function that takes a positive integer 'n' as input and print the numbers from n to 1 in descending order
// For example: if n is 5, the function should print: 5 4 3 2 1

// Exercise: 2
// Write a recursive function that takes a base number 'base' and an exponent 'exp' as input, and calculates the result of raising
// base to the power of 'exp'. 
// For example: if base is 2 and exp is 3, the function should return 8. i.e.,2^3

// Exercise: 3
// Write a recursive function that takes a string as input and returns the reverse of the string. 
// For example: if the input string is 'hello', the function should return 'olleh'

// function countDown(n) {
//     if (n == 0) return;

//     console.log(n);
//     countDown(n - 1);
// }

// countDown(5);

// Problem: Printing the sum of the first N natural numbers
// for example: if the n is 5, then the output should be 15
// 1 + 2 + 3 + 4 + 5 = 15

// RECURRENCE RELATION

/*

S(N) = ?

Base Cases:

For N = 1, S(1) = 1

-----------------------

For N = 2, S(2) = 1 + 2 = 3
For N = 3, S(3) = 1 + 2 + 3 = 6
For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

Backward Substitution:

For N = 1, S(1) = 1

-----------------------

For N = 2, S(2) = S(1) + 2 = 3
For N = 3, S(3) = S(2) + 3 = 6
For N = 4, S(4) = S(3) + 4 = 10
For N = 5, S(5) = S(4) + 5 = 15

Generalize:

For N = 1, S(N) = 1

For All N > 1, S(N) = S(N-1) + N


*/

// function to return the sum of first N natural numbers
// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;

//     // For All N > 1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(10));

// Exercise: 2
// Write a recursive function that takes a base number 'base' and an exponent 'exp' as input, and calculates the result of raising
// base to the power of 'exp'. 
// For example: if base is 2 and exp is 3, the function should return 8. i.e.,2^3

/*
    E(base, exp) = ?

    Start with the Base Cases:

    base = 2

    For exp = 0, E(2, 0) = 1

    For exp = 1, E(2, 1) = 2 * 1 = 2
    For exp = 2, E(2, 2) = 2 * 2 = 4
    For exp = 3, E(2, 3) = 2 * 2 * 2 = 8
    For exp = 4, E(2, 4) = 2 * 2 * 2 * 2 = 16
    For exp = 5, E(2, 5) = 2 * 2 * 2 * 2 * 2 = 32

    ----------------------------------------------
    

    For exp = 0, E(2, 0) = 1

    For exp = 1, E(2, 1) = E(2, 0) * 2 = 2
    For exp = 2, E(2, 2) = E(2, 1) * 2 = 4
    For exp = 3, E(2, 3) = E(2, 2) * 2 = 8
    For exp = 4, E(2, 4) = E(2, 3) * 2 = 16
    For exp = 5, E(2, 5) = E(2, 4) * 2 = 32

    Generalize:

    For exp = 0, keeping the base as constant base = 2,
        E(base, exp) = 1
    
    For all the values exp>=1, base = 2, 
        E(base, exp) = E(base, exp-1) * base
*/

// function E(base, exp) {
//     if (exp == 0) return 1
    
//     return E(base, exp - 1) * base;
// }

// console.log(E(3, 3));

// Factorial

/*
    F(N) = ?

    Base Cases:

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1

    -----------------------

    For N = 2, F(2) = 2 * 1 = 2
    For N = 3, F(3) = 3 * 2 * 1 = 6
    For N = 4, F(4) = 4 * 3 * 2 * 1 = 24
    For N = 5, F(5) = 5 * 4 * 3 * 2 * 1 = 120

    Backward Substitution:

    For N = 2, F(2) = 2 * F(1) = 2
    For N = 3, F(3) = 3 * F(2) = 6
    For N = 4, F(4) = 4 * F(3) = 24
    For N = 5, F(5) = 5 * F(4) = 120

    Generalize:

    For N = 0, F(N) = 1
    For N = 1, F(N) = 1
    For N > 1, F(N) = N * F(N-1)
    
*/

function F(N) {
    if (N == 0 || N == 1) return 1;
    return N * F(N - 1);
}

console.log(F(5));