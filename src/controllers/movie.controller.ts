import { Request, Response } from "express";
import { Movie } from "../entities";
import { IMovie } from "../interfaces/movies.interface";
import createMovieServices from "../services/createMovie.services";
import deleteMovieService from "../services/deleteMovies.services";
import listMoviesServices from "../services/listMovies.services";
import updateMovieService from "../services/updateMovie.services";

const createMovie = async (req: Request, res: Response) => {
  const movieData: Movie = req.body;
  const newMovie = await createMovieServices(movieData);

  return res.status(201).json({
    id: newMovie.id,
    name: newMovie.name,
    description: newMovie.description,
    duration: newMovie.duration,
    price: newMovie.price,
  });
};

const listMovies = async (req: Request, res: Response) => {
  const movies = await listMoviesServices(req.query);
  return res.json(movies);
};
const deleteMovie = async (req: Request, res: Response) => {
  await deleteMovieService(parseInt(req.params.id));

  return res.status(204).send();
};

const updateMovie = async (req: Request, res: Response) => {
  const userData = req.body;
  const id = parseInt(req.params.id);
  const updateMovie = await updateMovieService(userData, id);

  return res.json(updateMovie);
};

export { createMovie, listMovies, deleteMovie, updateMovie };
