import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { verifyParam } from "../../../../lib/verifyParam";
import { getRepository } from "typeorm";

type RequestBody = {
  title: string;
  thumnail: string;
  content: string;
};
export default async (req: Request, res: Response) => {
  const postIdx = req.params.idx;
  const { title, content, thumnail }: RequestBody = req.body;

  if (!verifyParam(postIdx)) {
    return res.status(401).json({
      message: "파라미터는 숫자(number)형식으로 전달해야 합니다.",
    });
  }

  if (!title || !content || !thumnail) {
    return res.status(400).json({
      message: "수정할 내역이 없습니다.",
    });
  }

  try {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne({
      where: {
        postIdx,
      },
    });

    if (!post) {
      logger.yellow("포스트 없음");
      return res.status(404).json({
        message: "포스트 없음",
        post,
      });
    }

    post.updatedAt = new Date();
    post.title = title;
    post.content = content;
    post.thumnail = thumnail;

    await postRepo.save(post);

    logger.green("글 수정 성공");
    return res.status(201).json({
      message: "글 수정 성공",
      data: {
        post,
      },
    });
  } catch (error) {
    logger.red(error);
    return res.status(500).json({
      message: "서버 오류",
      error,
    });
  }
};
