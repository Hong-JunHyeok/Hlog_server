import { createConnection } from "typeorm";
import * as logger from "./lib/logger";

export const getConnection = async () => {
  await createConnection()
    .then((connection) => {
      logger.green("DB연결에 성공했습니다.");
      return connection;
    })
    .catch((error) =>
      logger.red("DB연결 과정에서 문제가 발생했습니다.", error)
    );
};
