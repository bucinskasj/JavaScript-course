"use strict";

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement("li");
    const {info, ...otherProps} = movie;
    console.log(otherProps);
    // const{title: movieTitle} = info;
    let {getFormatedTitle} = movie;
    // getFormatedTitle = getFormatedTitle.bind(movie);
    let text = getFormatedTitle.apply(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if(val.trim() === '') {
          this._title = 'Default';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormatedTitle(){
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function() {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);


//More on this.


//Arrow function is bound to the element
// const members = {teamName: 'Blue rockerts', people: ['Max', 'Manuel'], getTeamMembers () {
//   this.people.forEach( p => {
//       console.log(p + ' - ' + this.teamName);
//   });
// }};

//Regular is bound to forEach, which is basically the browser

// const members2 = {teamName: 'Blue rockerts', people: ['Max', 'Manuel'], getTeamMembers () {
//   this.people.forEach(function(p) {
//       console.log(p + ' - ' + this.teamName);
//   });
// }};