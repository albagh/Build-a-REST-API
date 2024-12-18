import express from "express";
import { createMovie, getMovies, getMovie, deleteMovie, updateMovie } from "../controllers/movies.js";

const router = express.Router();

//get all movies
router.get('/', getMovies);

//get movie with specific id
router.get('/:id', getMovie);

//the post method
router.post('/', createMovie);

//delete the movie with the specified id
router.delete('/:id', deleteMovie);

//update the movie with the specified id
router.patch('/:id', updateMovie);
export default router;
