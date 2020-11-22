'use strict'
    
    let movieCard = document.getElementById("movies");
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
             cardMovie.className = "card border";
             cardMovie.style.cssText = "width: 18rem;";

            const body = document.createElement('div');
            body.className = "card-body";
            body.style.cssText = "align-self: center"

             const idCard = document.createElement('p');
             idCard.innerHTML = movie.id;
             idCard.className = "card-title"
             body.appendChild(idCard);
             cardMovie.appendChild(body);
             
             const nombreCard = document.createElement('h5');
             nombreCard.innerHTML = movie.nombre;
             nombreCard.className = "card-header";
             body.appendChild(nombreCard);
             cardMovie.appendChild(body);

             const directorCard = document.createElement('p');
             directorCard.innerHTML = movie.director;
             directorCard.className = "card-text";
             body.appendChild(directorCard);
             cardMovie.appendChild(body);

             const imagenCard = document.createElement("img");
             imagenCard.src = movie.image;
             imagenCard.innerHTML = movie.image;
             imagenCard.className = "card-img-top";
             imagenCard.style.cssText = "width:10em"
             body.appendChild(imagenCard);
             cardMovie.appendChild(body);

             const clasificacionCard = document.createElement('div');
             clasificacionCard.innerHTML = movie.clasificacion;
             clasificacionCard.className = "card-footer";
             body.appendChild(clasificacionCard);
             cardMovie.appendChild(body);

             movieCard.appendChild(cardMovie);
            console.log(movie);
             
         });
     }
     
    




