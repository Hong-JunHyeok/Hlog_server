import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.params.idx);

  if (isNaN(idx)) {
    logger.yellow("파라미터는 숫자(number)형식으로 전달해야 합니다.");
    return res.status(401).json({
      message: "파라미터는 숫자(number)형식으로 전달해야 합니다.",
    });
  }

  try {
    const postRepo = getRepository(Post);
    const post: Post = await postRepo.findOne({
      where: {
        postIdx: idx,
      },
    });

    if (!post) {
      logger.yellow("포스트 없음");
      return res.status(404).json({
        message: "포스트 없음",
      });
    }

    await postRepo.remove(post);

    logger.green("글 삭제 성공");
    return res.status(200).json({
      message: "글 삭제 성공",
      data: {
        post,
      },
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
    });
  }
};
