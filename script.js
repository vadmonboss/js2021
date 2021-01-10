const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const presonalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

console.log(presonalMovieBD.count);

const q1 = prompt("Одни из последних просмотренных фильмов?", ""),
      q2 = prompt("На сколько оцените его?", ""),      
      q11 = prompt("Одни из последних просмотренных фильмов?", ""),
      q22 =  prompt("На сколько оцените его?", "");

presonalMovieBD.movies[q1] = q2;
presonalMovieBD.movies[q11] = q22;

console.log(presonalMovieBD);