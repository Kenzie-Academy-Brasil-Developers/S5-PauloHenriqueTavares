import { allMovies, patchSchema, returnMovie } from "../schemas/movies.schemas";
import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";
import { movieCreateSchema } from "../schemas/movies.schemas";

type IMovie = z.infer<typeof movieCreateSchema>;
type IMovieReturn = z.infer<typeof returnMovie>;
type IMovies = z.infer<typeof allMovies>;
type IPatchMovie = DeepPartial<IMovieReturn>;

interface IRetriveMovies {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
}

export { IMovie, IPatchMovie, IMovieReturn, IMovies };

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;

export { iMovieCreate, iMovieUpdate, iMovieRepo, IRetriveMovies };
