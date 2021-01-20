

let presonalMovieBD = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: true,
    start: function() {
        presonalMovieBD.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (presonalMovieBD.count == '' || presonalMovieBD.count == null || isNaN(presonalMovieBD.count)) {
            presonalMovieBD.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    }, remeberMyFilms: function() {
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
    }, detectPersonalLevel: function() {
        if (presonalMovieBD.count < 10) {
            console.log('Просмотрено мало фильмов'); 
        } else if (presonalMovieBD.count >= 10 && presonalMovieBD.count < 30) {
            console.log('Вы классический зритель');
        } else if (presonalMovieBD.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
        }, toggleVisibleMyDB: function() { 
        if (presonalMovieBD.privat) {
            presonalMovieBD.privat = false;
        } else if (presonalMovieBD.privat) {
            presonalMovieBD.privat = true;
        }
    },showMyBD: function(hidden) {
        if (!hidden) {
            console.log(presonalMovieBD);
        }
    }, writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр ${i}?`);
            if (genre === null || genre == ''){
                console.log('Ввел некорректные данные');
                i--;
            } else {
                presonalMovieBD.genres[i - 1] = genre;
            }
            
        } 
        presonalMovieBD.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};





 /* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"


 Код возьмите из предыдущего домашнего задания */