"use strict";

const arr = [2, 13, 23, 6, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside massive ${arr}`);
// });

// arr.push(10);
// console.log(arr);
// arr.pop(3);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));