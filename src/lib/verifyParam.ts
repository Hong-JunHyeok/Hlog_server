import * as logger from "./logger";

export const verifyParam = (param: string) => {
  if (isNaN(Number(param))) {
    logger.yellow("파라미터는 숫자(number)형식으로 전달해야 합니다.");
    return false;
  }
  return true;
};
