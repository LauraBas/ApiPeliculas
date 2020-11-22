"use strict";

let movieCard = document.getElementById("movies");
const movieForm = document.querySelector("#movie-form");

fetch("http://localhost:3000/peliculas")
  .then((response) => response.json())
  .then((movies) => {
    createMovie(movies);
  });

function createMovie(movieList) {
  movieList.forEach((movie) => {
    const cardMovie = document.createElement("div");
    cardMovie.className = "card border";
    cardMovie.style.cssText = "margin: 0.5vw;width: 18rem;";

    const body = document.createElement("div");
    body.className = "card-body";
    body.style.cssText =
      "display: flex; flex-direction:column; align-items: center";

    const idCard = document.createElement("p");
    idCard.innerHTML = movie.id;
    idCard.className = "card-title";
    body.appendChild(idCard);
    cardMovie.appendChild(body);

    const nombreCard = document.createElement("h5");
    nombreCard.innerHTML = movie.nombre;
    nombreCard.className = "card-header";
    body.appendChild(nombreCard);
    cardMovie.appendChild(body);

    const directorCard = document.createElement("p");
    directorCard.innerHTML = movie.director;
    directorCard.className = "card-text";
    body.appendChild(directorCard);
    cardMovie.appendChild(body);

    const imagenCard = document.createElement("img");
    imagenCard.src = movie.image;
    imagenCard.innerHTML = movie.image;
    imagenCard.className = "card-img-top";
    imagenCard.style.cssText = "width:10em";
    body.appendChild(imagenCard);
    cardMovie.appendChild(body);

    const clasificacionCard = document.createElement("div");
    clasificacionCard.innerHTML = movie.clasificacion;
    clasificacionCard.className = "card-footer";
    body.appendChild(clasificacionCard);
    cardMovie.appendChild(body);

    const buttonDelete = document.createElement("button");
    buttonDelete.className = "btn btn-danger";
    buttonDelete.setAttribute("type", "delete");
    buttonDelete.innerHTML = "Delete";
    body.appendChild(buttonDelete);

    const buttonEdit = document.createElement("button");
    buttonEdit.className = "btn btn-info";
    buttonEdit.innerHTML = "Edit";
    body.appendChild(buttonEdit);
    
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "btn-group mr-2";
    buttonDiv.appendChild(buttonEdit);
    buttonDiv.appendChild(buttonDelete);
    cardMovie.appendChild(buttonDiv);

    movieCard.appendChild(cardMovie);
    console.log(movie);
  });
}

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  let formData = {
    nombre: movieForm.querySelector("#nombre").value,
    director: movieForm.querySelector("#director").value,
    image: movieForm.querySelector("#image").value,
    clasificacion: movieForm.querySelector("#clasificacion").value,
  };

  fetch("http://localhost:3000/peliculas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData }),
  })
    .then((response) => response.json())
    .then((movie) => {
      newMovie(movie);
    });
});

function newMovie(movie) {
  const cardMovie = document.createElement("div");
  cardMovie.className = "card border";
  cardMovie.style.cssText = "margin: 0.5vw;width: 18rem;";

  const body = document.createElement("div");
  body.className = "card-body";
  body.style.cssText =
    "display: flex; flex-direction:column; align-items: center";

  const idCard = document.createElement("p");
  idCard.innerHTML = movie.id;
  idCard.className = "card-title";
  body.appendChild(idCard);
  cardMovie.appendChild(body);

  const nombreCard = document.createElement("h5");
  nombreCard.innerHTML = movie.nombre;
  nombreCard.className = "card-header";
  body.appendChild(nombreCard);
  cardMovie.appendChild(body);

  const directorCard = document.createElement("p");
  directorCard.innerHTML = movie.director;
  directorCard.className = "card-text";
  body.appendChild(directorCard);
  cardMovie.appendChild(body);

  const imagenCard = document.createElement("img");
  imagenCard.src = movie.image;
  imagenCard.innerHTML = movie.image;
  imagenCard.className = "card-img-top";
  imagenCard.style.cssText = "width:10em";
  body.appendChild(imagenCard);
  cardMovie.appendChild(body);

  const clasificacionCard = document.createElement("div");
  clasificacionCard.innerHTML = movie.clasificacion;
  clasificacionCard.className = "card-footer";
  body.appendChild(clasificacionCard);
  cardMovie.appendChild(body);

  movieCard.appendChild(cardMovie);
  console.log(movie);
}
