import * as colors from "chalk";

//오류가 있을 시에 로그
export const red = (...logs: string[]) => {
  logs.forEach((log) => {
    console.log(colors.white.bgRed(log));
  });
};

//프로세스 처리에 대한 로그
export const green = (...logs: string[]) => {
  logs.forEach((log) => {
    console.log(colors.black.bgGreen(log));
  });
};

//프로세스 처리 성공에 대한 로그
export const blue = (...logs: string[]) => {
  logs.forEach((log) => {
    console.log(colors.white.bgBlue(log));
  });
};

//위험이나 경고등의 대한 로그
export const yellow = (...logs: string[]) => {
  logs.forEach((log) => {
    console.log(colors.black.bgYellow(log));
  });
};
