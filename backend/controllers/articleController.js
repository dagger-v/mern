import asyncHandler from "express-async-handler";
import Article from "../models/articleModel.js";
import User from "../models/userModel.js";

// POST /write
const writeArticle = asyncHandler(async (req, res) => {
  const { title, content, username, tag } = req.body;

  const articleExists = await Article.findOne({ title });

  if (articleExists) {
    res.status(400);
    throw new Error("Article Already Exists!");
  }

  const article = await Article.create({
    title,
    content,
    author: username,
    placement,
    tag,
  });

  if (article) {
    res.status(201).json({
      _id: article._id,
      title: article.title,
      content: article.content,
      author: article.author,
      placement: article.placement,
      tag: article.tag,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Article Data");
  }
});

export { writeArticle };
