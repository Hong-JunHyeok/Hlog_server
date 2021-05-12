import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.params.idx);

  try {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne({ where: { postIdx: idx } });

    if (!post) {
      logger.yellow("조회할 포스트가 없습니다");
      return res.status(404).json({
        message: "조회할 포스트가 없습니다",
      });
    }

    logger.green("포스트 조회 성공");
    return res.status(200).json({
      message: "포스트 조회 성공",
      post,
    });
    
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
      error,
    });
  }
};
