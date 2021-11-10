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

let numberOfFilms

function start () {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?");
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?");
    }
}
start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    let i = 0;
    while (i<2){
        const a = prompt ("Один из последних просмотреных фильмов?", ""),
        b = +prompt ("Какая их оценка?", "");
    i++;
    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
    console.log('done');
    }
    else {
        console.log('error')
        i--;
    }
    }

}

rememberMyFilms ();


function detectPersonalLevel () {

    if (personalMovieDB.count <10 && personalMovieDB.count > 0 && personalMovieDB.count != null && personalMovieDB.count != '' ){
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
        console.log('Вы класический зритель');
    }
    else if (personalMovieDB.count >= 30)  {
        console.log('Вы киноман!');
    }else {
        console.log('Произошла ошибка!')
    }
}

detectPersonalLevel ();


function showMyDB (hidden) {
if (!hidden) {
    console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat)

function writeYouGenres () {
    for (let i = 1; i <=3; i++) {
        const genre = prompt (`Ваш любимый жанр по номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYouGenres ();