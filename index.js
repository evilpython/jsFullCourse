'use strict';

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов', '');
const b = prompt('на сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов', '');
const d = prompt('на сколько оцените его?', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);
