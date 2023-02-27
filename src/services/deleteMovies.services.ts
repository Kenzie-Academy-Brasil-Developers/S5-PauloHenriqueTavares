import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const deleteMovieService = async (moviesId: number): Promise<void> => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);

  const movie = await moviesRepository.findOne({
    where: {
      id: moviesId,
    },
  });

  await moviesRepository.remove(movie!);
};
export default deleteMovieService;
