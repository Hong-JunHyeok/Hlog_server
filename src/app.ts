import * as express from "express";
import * as cors from "cors";
import * as logger from "./lib/logger";
import * as database from "./database";
import { router as api } from "./api";

const PORT = process.env.PORT || 8080;

const app = express();

database.getConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.status(200).json({
    requestMethod: req.method,
    message: "HLOG Rest API server",
  });
});
app.use("/api", api);

app.listen(PORT, () => {
  logger.blue(
    `${PORT}번 포트에서 서버 실행중입니다. (http://localhost:${PORT}/)`
  );
});
