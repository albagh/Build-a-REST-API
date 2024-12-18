import { v4 as uuidv4 } from 'uuid';
let movies = [];

export const createMovie = (req, res)=>{
    const movie = {...req.body, id: uuidv4()};
    movies.push(movie);
    res.send(`${movie.movieName} movie has been added to the database`);
}

export const getMovies = (req, res)=>{
    res.send(movies);
}

export const getMovie = (req, res)=>{
    const foundMovie = movies.find(movie => movie.id === req.params.id);
    res.send(foundMovie);
    console.log(req.params.id);
}

export const deleteMovie = (req, res) => {
    //Write the logic to delete the movie
    movies = movies.filter(movie => movie.id !== req.params.id);
    res.send(`Movie with the id ${req.params.id} deleted from the database.`);
}

export const updateMovie = (req, res)=>{
    const foundMovie = movies.find(movie => movie.id === req.params.id);

    const {movieName, director, genre, releaseYear} = req.body; 
    if(movieName) foundMovie.movieName = movieName;// update movieName
    if(director) foundMovie.director = director;// update director
    if(genre) foundMovie.genre = genre;// update genre
    if(releaseYear) foundMovie.releaseYear = releaseYear;// update releaseYear
    res.send(`Movie with the id ${req.params.id} has been updated.`);
}