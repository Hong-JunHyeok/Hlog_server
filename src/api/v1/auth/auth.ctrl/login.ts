import { Request, Response } from "express";
import User from "../../../../entity/User";
import * as logger from "../../../../lib/logger";
import { createToken } from "../../../../lib/token";

export default async (req: Request, res: Response) => {
  const { id, pw } = req.body;

  try {
    if (!id || !pw) {
      logger.yellow("ID나 PW를 입력해주세요.");
      return res.status(400).json({
        message: "ID나 PW를 입력해주세요.",
      });
    }

    const isExistUser = await User.findOne({ where: { id, pw } }).catch(
      (error) => {
        logger.yellow(error);
      }
    );

    if (!isExistUser) {
      logger.yellow("등록되지 않은 회원입니다.");
      res.status(401).json({
        message: "등록되지 않은 회원입니다.",
      });
      return;
    }

    const token = await createToken(isExistUser.id);

    logger.green("로그인 성공");
    return res.status(200).json({
      status: 200,
      message: "로그인 성공.",
      data: {
        user: isExistUser,
        access_token: token,
      },
    });
  } catch (error) {
    logger.red(error);
  }
};
