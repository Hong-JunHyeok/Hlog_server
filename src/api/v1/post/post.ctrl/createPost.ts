import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response) => {
  const { title, thumnail, content } = req.body;

  try {
    if (!title || !content!!) {
      logger.yellow("제목, 내용은 필수 항목입니다.");
      return res.status(401).json({
        message: "제목, 내용은 필수 항목입니다.",
      });
    }

    const postRepo = getRepository(Post);
    const post = new Post();

    post.title = title;
    post.content = content;
    post.thumnail = thumnail;

    await postRepo.save(post);

    logger.green("포스트 등록 성공");
    res.status(200).json({
      message: "포스트 등록 성공",
      data: {
        title,
      },
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
    });
  }
};
