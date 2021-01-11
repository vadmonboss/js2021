
let numberOfFilms;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let presonalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};
 

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const q1 = prompt("Одни из последних просмотренных фильмов?", ""),
              q2 = prompt("На сколько оцените его?", "");     
        
              if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
            presonalMovieBD.movies[q1] = q2;
            console.log('Уcпешно');
        } else {
            console.log('Ошибка!');
            i--; 
        }   
    }
}
// remeberMyFilms();

function detectPersonalLevel() {
    if (presonalMovieBD.count < 10) {
        console.log('Просмотрено мало фильмов'); 
    } else if (presonalMovieBD.count >= 10 && presonalMovieBD.count < 30) {
        console.log('Вы классический зритель');
    } else if (presonalMovieBD.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}
// detectPersonalLevel();

// function showMyBD(hidden) {
//     if (!hidden) {
//         console.log(presonalMovieBD);
//     }
// }
// showMyBD(presonalMovieBD.privat);

function showMyBD2() {
    if (presonalMovieBD.privat == false){
        console.log(presonalMovieBD);
        console.log('Главный объект программы');
    } else {
        (console.log('Не ровняется фолс'));
    }
}
showMyBD2(presonalMovieBD.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        presonalMovieBD.genres[i - 1] = prompt(`Ваш любимый жанр ${i}?`);
    }
}
writeYourGenres();












// (presonalMovieBD.count < 10) ? console.log('Просмотрено мало фильмов'') :? (30 > presonalMovieBD.count > 10) 
// console.log(presonalMovieBD.count);