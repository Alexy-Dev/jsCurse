"use strict";
// let a = "Alex", g = "Gala";
// console.log(a, g);

// // const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// // console.log(numberOfFilms);

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [],
//     privat: false,

// };


// const a = prompt("One from wathed film?", "");
// const b = +prompt("Your rating?", "");
// const c = prompt("One from wathed film?", "");
// const d = +prompt("Your rating?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok!');
// }  else {
//         console.log('No!');
//     }

    // const num = 50;

    // if (num<49) {
    //     console.log('Error');
    // } else if (num > 100) {
    //     console.log('More');
    // } else {
    //     console.log('Vivat');
    // }
    
    // (num === 50) ? console.log('Ok!') : console.log('Error');

    // switch (num) {
    //     case 49:
    //         console.log('No!');
    //         break;
    //         case 100:
    //             console.log('No!');
    //             break;
    //             case 50,5:
    //         console.log('Near!');
    //         break;
    //         case 50:
    //         console.log('Yes!');
    //         break;
    //         default:
    //             console.log('enybodyhome?');
    //             break;   
    // }
    // let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for (let i = 1; i < 50; i++) {
//     if (i === "") {
//         break;
//         // continue;
//     }

//     console.log(i);
// }

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much films you already watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much films you already watched?", "");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
    // const a = prompt(`What your lovely genres? ${i}`);
    // personalMovieDB.genres[i - 1] = a;
    personalMovieDB.genres[i - 1] = prompt(`What your lovely genres? ${i}`);
   

                    
          if (i != null && i != '' && i.length < 10 && personalMovieDB.privat == false) {

                   
          console.log(personalMovieDB);
          } else {
              console.log('vans more');              
          }
}
}
writeYourGenres();


function showMyDb(hidden) {
 
          if (!hidden) {

            console.log(personalMovieDB);
          } else {
              console.log('vans more');              
          }
}

showMyDb(personalMovieDB.privat);

// const toInput = {
//     name: 'input',
//     type: 'button',
//     value: 'Make your choice'
// };
// console.log(toInput);
// const showMyDb = {
//     if (personalMovieDB.privat = false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('error');
//     }
// }


// const a = prompt("One from wathed film?", "");
// const b = +prompt("Your rating?", "");
// const c = prompt("One from wathed film?", "");
// const d = +prompt("Your rating?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt("One from wathed film?", ""),
          b = +prompt("Your rating?", "");

          if (a != null && b != null && a != '' && b != '' && a.length < 50) {

          personalMovieDB.movies[a] = b;
          console.log('done');
          } else {
              console.log('error');
              i--;
          }
        }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log('but way?');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('It is good!');
} else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
    console.log('Amazing!');
} else {
    console.log('what du you think?');
}
}
detectPersonalLevel();


// console.log(personalMovieDB);

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 9));
// console.log(calc(2, 5));
// const calc = (a, b) => { return (a + b) };
// const calc = (a, b) => a + b;
// console.log(calc(3, 4));

// function ret() {
//     let num = 50;
//     return num;
// }
//  const anotherNum = ret();
//  console.log(anotherNum);

//  const str = 'test';
//  const arr = [1, 2, 5];

//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());
 
//  console.log(str);

//  let fruit = 'some fruit';
//  console.log(fruit.indexOf('fruit'));

//  const logg = 'Hello World!';

//  console.log(logg.slice(6, 11));

//  console.log(logg.substring(6, 11));

//  console.log(logg.substr(6, 5));

//  const num = 12.2;

//  console.log(Math.round(num));
 
//  const test1 = '12.2px';
 
//  console.log(parseInt(test1)); 

//  console.log(parseFloat(test1));