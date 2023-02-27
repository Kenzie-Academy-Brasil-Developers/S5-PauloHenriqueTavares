import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IRetriveMovies } from "../interfaces/movies.interface";

const listMoviesServices = async (payload: any) => {
  const moviesRepository: Repository<Movie> =
    AppDataSource.getRepository(Movie);
  const count: number = await moviesRepository.count();
  const page: number = Number(payload.page) || 1;
  const perPage: number = Number(payload.perPage) || 5;
  const sort: string = payload.sort || "id";
  const order: string = payload.order || "asc";

  let prevPage: string | null = `http://localhost:3000/movies?page=${
    page - 1
  }&perPage=${perPage}`;
  if (page - 1 === 0) {
    prevPage = null;
  }
  const nextPage = `http://localhost:3000/movies?page=${
    page + 1
  }&perPage=${perPage}`;

  const findMovies: Array<Movie> = await moviesRepository.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: {
      [sort]: order,
    },
  });

  // const movies = allMovies.parse(findMovies);
  const movies: IRetriveMovies = {
    prevPage: prevPage,
    nextPage: nextPage,
    count: count,
    data: findMovies,
  };
  return movies;
};
export default listMoviesServices;
