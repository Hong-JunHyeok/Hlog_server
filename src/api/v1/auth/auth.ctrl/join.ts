import { Request, Response } from "express";
import User from "../../../../entity/User";
import * as logger from "../../../../lib/logger";

export default async (req: Request, res: Response) => {
  const { id, pw, name, desc } = req.body;

  try {
    if (!id || !pw || !name) {
      logger.yellow("ID , PW , 이름은 회원가입 필수 양식입니다.");
      return res.status(401).json({
        message: "ID , PW , 이름은 회원가입 필수 양식입니다.",
      });
    }

    const existUser = await User.findOne({ where: { id } });

    if (existUser) {
      logger.yellow("이미 존재하는 유저입니다.");
      res.status(401).json({
        message: "이미 존재하는 유저입니다.",
      });
      return;
    }

    const user = new User();

    user.id = id;
    user.pw = pw;
    user.name = name;
    user.desc = desc || "";
    user.isAdmin = false;

    await User.save(user)
      .then((user) => {
        logger.green("유저 등록 성공");
        return res.status(200).json({
          message: "유저 등록에 성공했습니다.",
          user,
        });
      })
      .catch((error) => {
        logger.red(error);
      });
  } catch (error) {
    logger.red(error);
  }
};
