"use strict";
// let a = "Alex", g = "Gala";
// console.log(a, g);

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// console.log(numberOfFilms);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,

};


const a = prompt("One from wathed film?", "");
const b = +prompt("Your rating?", "");
const c = prompt("One from wathed film?", "");
const d = +prompt("Your rating?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
