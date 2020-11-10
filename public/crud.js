'use strict'
let moviesTable = document.getElementById("movies");
let movieList = [];
fetch('http://localhost:3000/peliculas')
.then(res => res.json())
.then(movies => {
    movieList = movies;
    createTable();
    
})
function createTable() {
    movieList.forEach( movie => {
        const rowMovie = document.createElement('tr');
        const idMovie = document.createElement('td');
        idMovie.innerHTML = movie.id;
        rowMovie.appendChild(idMovie);

        
        const titleMovie = document.createElement('td');
        titleMovie.innerHTML = movie.nombre;
        rowMovie.appendChild(titleMovie);

        const directorMovie = document.createElement('td');
        directorMovie.innerHTML = movie.director;
        rowMovie.appendChild(directorMovie);

        const clasMovie = document.createElement('td');
        clasMovie.innerHTML = movie.clasificacion;
        rowMovie.appendChild(clasMovie);
        moviesTable.appendChild(rowMovie);
        console.log(movie);
        
    })
}



