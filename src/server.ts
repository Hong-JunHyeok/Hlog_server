import "dotenv/config";
import { createConnection } from "typeorm";
import app from "./app";
import * as logger from "./lib/logger";

const PORT = process.env.PORT || 8080;

createConnection()
  .then((connection) => {
    logger.green("DB연결에 성공했습니다.");
  })
  .catch((error) => logger.red("DB연결 과정에서 문제가 발생했습니다." , error));

app.listen(PORT , () => {
    logger.blue(`${PORT}번 포트에서 서버 실행중입니다. (http://localhost:8080/)`)
})
