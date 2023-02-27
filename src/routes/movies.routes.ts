import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureMovieExist from "../middlewares/ensureExists.middleware";
import ensureNameExist from "../middlewares/ensureNameExits.middleware";
import {
  createMovie,
  deleteMovie,
  listMovies,
  updateMovie,
} from "./../controllers/movie.controller";
import { movieCreateSchema, patchSchema } from "./../schemas/movies.schemas";
const movieRoutes: Router = Router();
movieRoutes.post(
  "",
  ensureDataIsValidMiddleware(movieCreateSchema),
  ensureNameExist,
  createMovie
);
movieRoutes.get("", listMovies);
movieRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(patchSchema),
  ensureNameExist,
  ensureMovieExist,
  updateMovie
);
movieRoutes.delete("/:id", ensureMovieExist, deleteMovie);

export default movieRoutes;
