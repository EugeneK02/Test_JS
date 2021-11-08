"use strict"
/*
const menu = [];
menu[0]= confirm ("Are you ready?");


menu[1]= prompt ("how old are you?");


menu[2]= prompt ("What is you name?");
const use = menu[2];
const access = menu[0] && menu[1]>18 == true;

console.log(access);

menu[3]= alert (`Hello, ${use}, ${access}`);
*/
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ("Один из последних просмотреных фильмов?", ""),
      b = +prompt ("Какая их оценка?", ""),
      c = prompt ("Один из последних просмотреных фильмов?", ""),
      d = +prompt ("Какая их оценка?", "");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB); 