import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

const ensureNameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.body.name === undefined) {
    return next();
  }
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const findMovieName = await movieRepository.findOne({
    where: {
      name: req.body.name,
    },
  });
  const isTrue = findMovieName !== null;
  if (isTrue) {
    throw new AppError("Movie already exists.", 409);
  }
  return next();
};
export default ensureNameExist;
