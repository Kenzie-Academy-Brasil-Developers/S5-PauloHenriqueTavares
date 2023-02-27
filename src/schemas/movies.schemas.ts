import { z } from "zod";

const movieCreateSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullable().optional(),
  duration: z.number().positive(),
  price: z.number().int().min(1),
});
const returnMovie = movieCreateSchema.extend({
  id: z.number(),
});

const allMovies = returnMovie.array();

const patchSchema = movieCreateSchema.partial();

export { movieCreateSchema, returnMovie, patchSchema, allMovies };
