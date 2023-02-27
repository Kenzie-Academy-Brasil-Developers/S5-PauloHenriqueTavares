import { IMovieReturn } from "../interfaces/movies.interface";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { returnMovie } from "../schemas/movies.schemas";

const createMovieServices = async (userData: Movie): Promise<IMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = movieRepository.create(userData);
  await movieRepository.save(movie);
  const newMovie = returnMovie.parse(movie);
  return newMovie;
};
export default createMovieServices;
