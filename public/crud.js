'use strict'
    let movieCard = document.getElementById("movies");
    movieCard.style.cssText = "display: flex";
    let movieList= [];

    fetch('http://localhost:3000/peliculas')
    .then( response => response.json() )
    .then( movies => { 
        movieList = movies;
        createMovie();
     }) 

     function createMovie(){
         movieList.forEach(movie => {
             const cardMovie = document.createElement('div');
             cardMovie.style.cssText = "border: 2px black solid;width:15rem;padding: 1em; margin: 1em";
             const idCard = document.createElement('p');
             idCard.innerHTML = movie.id;
             idCard.style.cssText ="text-align:end; margin: 0.2vw"
             cardMovie.appendChild(idCard);
             
             const nombreCard = document.createElement('p');
             nombreCard.innerHTML = movie.nombre;
             nombreCard.style.cssText = "font-size:2vw; color:cornflowerblue;font-style:oblique;text-align:center"
             cardMovie.appendChild(nombreCard);

             const directorCard = document.createElement('p');
             directorCard.innerHTML = movie.director;
             directorCard.style.cssText = "font-size:1.2vw; color:grey;text-align:center"
             cardMovie.appendChild(directorCard);

             const imagenCard = document.getElementById("img");
             imagenCard.innerHTML = movie.image;
             directorCard.appendChild(imagenCard);

             const clasificacionCard = document.createElement('p');
             clasificacionCard.innerHTML = movie.clasificacion;
             clasificacionCard.style.cssText = "font-size:0.8vw; color:gray; text-align:center"
             cardMovie.appendChild( clasificacionCard);

             movieCard.appendChild(cardMovie);
            console.log(movie);
             
         });
     }
     
    
// let movieList = [];
// fetch('http://localhost:3000/peliculas')
// .then(res => res.json())
// .then(movies => {
//     movieList = movies;
//     createTable();
    
// })
// function createTable() {
//     movieList.forEach( movie => {
//         const rowMovie = document.createElement('tr');
//         const idMovie = document.createElement('td');
//         idMovie.innerHTML = movie.id;
//         rowMovie.appendChild(idMovie);

        
//         const titleMovie = document.createElement('td');
//         titleMovie.innerHTML = movie.nombre;
//         rowMovie.appendChild(titleMovie);

//         const directorMovie = document.createElement('td');
//         directorMovie.innerHTML = movie.director;
//         rowMovie.appendChild(directorMovie);

//         const clasMovie = document.createElement('td');
//         clasMovie.innerHTML = movie.clasificacion;
//         rowMovie.appendChild(clasMovie);
//         moviesTable.appendChild(rowMovie);
//         console.log(movie);
        
//     })
// }



