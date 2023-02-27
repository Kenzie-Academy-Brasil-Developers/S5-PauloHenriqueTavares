import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { returnMovie } from "../schemas/movies.schemas";

const updateMovieService = async (
  userData: any,
  idUser: number
): Promise<any> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldMovieData = await movieRepository.findOneBy({
    id: idUser,
  });

  const movie = movieRepository.create({
    ...oldMovieData,
    ...userData,
  });

  await movieRepository.save(movie);
  const updateMovie = returnMovie.parse(movie);

  return movie;
};
export default updateMovieService;
