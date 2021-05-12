import "reflect-metadata";
import * as express from "express";
import * as logger from "./lib/logger";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hlog's REST API server");
});

app.listen(PORT, () => {
  logger.blue(`Server is running at ${PORT}port.`);
});
