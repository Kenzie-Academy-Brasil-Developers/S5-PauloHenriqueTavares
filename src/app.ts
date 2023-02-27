import "express-async-errors";
import express, { Application } from "express";
import movieRoutes from "./routes/movies.routes";
import { handleErrors } from "./error";
const app: Application = express();
app.use(express.json());
app.use("/movies", movieRoutes);
app.use(handleErrors);
export default app;
