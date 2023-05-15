/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // assume that the totalCandies is greater than all the other kid's candies
//     let assumption = true;

//     // iterate through the candies array <- index
//     for(let index=0; index<candies.length; index++){
//         // except the index `i`
//         if(index != i){
//             // for every candies[index]
//             // check if the totalCandies is smaller than candies[index]
//             if(totalCandies < candies[index]){
//                 // update my assumption
//                 assumption = false;
//             }
//         }
//     }
    
//     // return my assumption
//     return assumption;
// }

// O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // 1. initialize an empty array <- result
//     let result = [];

//     // find the greatest Candy
//     let greatestCandy = Math.max(...candies);

//     // 2. Iterate or Traverse through the candies array <- iterator: i
//     for(let i=0; i<candies.length; i++){
//         // for every kid @ ith position
//         // find the total number of candies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kid's candies
//         // except the position/index i
//         if(totalCandies >= greatestCandy){
//             // if true => push the result 'true' to the array result
//             result.push(true);
//         } else {
//             // if false => push the result 'false' to the array result
//             result.push(false);
//         }
//     }
    
//     // 3. return the result array
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

