"use strict";

let number = 5;

number = 10;
console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// {
//     let result = 50;
//     const age = {
//         a: 40
//     }
// }
// console.log(result, age)
const obj = {
    name: "Jhon",
    age: 25,
    isMarried: false
};

// console.log(obj ["name"]);
console.log( obj.name, obj.age + "year", obj.isMarried );

let arr = ['plum.png', 'orange.jpg'];
console.log(arr[1]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

const answer = prompt("Вам есть 18 лет?", "");
console.log(answer);

const answers = [];
answers[0] = prompt('Как ваше имя?', "");
answers[1] = prompt('Как вашf фамилия?', "");
answers[2] = prompt('Сколько вам лет?', "");

// document.write(answers);
// console.log

const category = 'toys';
console.log('https://someurl.com/' + category + '/' + '5');
console.log(`https://someurl.com/${category}/5` );

const user = "Alex";

alert(`Hello, ${user}`);

console.log('arr' + " - object");
console.log(4 + +"5")

let incr = 10, decr = 10;

incr++;
decr--;

// ++incr;
// --decr;
console.log(incr, decr);

console.log(5%2);