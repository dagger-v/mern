import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Article from "../models/articleModel.js";

// POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  const user = await User.create({
    name,
    email,
    password,
    member: true,
    admin: false,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      member: user.member,
      admin: user.admin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

// GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// POST /write
const writeArticle = asyncHandler(async (req, res) => {
  const { title, content, image, username, placement, tag } = req.body;

  const articleExists = await Article.findOne({ title });

  if (articleExists) {
    res.status(400);
    throw new Error("Article Already Exists!");
  }

  const article = await Article.create({
    title,
    content,
    image,
    author: username,
    placement,
    tag,
  });

  if (article) {
    res.status(201).json({
      _id: article._id,
      title: article.title,
      content: article.content,
      image: article.image,
      author: article.author,
      placement: article.placement,
      tag: article.tag,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Article Data");
  }
});

// GET /showArticles
const showAllArticles = asyncHandler(async (req, res) => {
  const allArticles = await Article.find().sort({ createdAt: -1 });
  res.status(200).json(allArticles);
});

// GET /showArticles
const viewArticle = asyncHandler(async (req, res) => {
  const postId = req.params.id;

  const viewArticle = await Article.findById(postId);
  res.status(200).json(viewArticle);
  console.log(`id: ${postId}`);
});

// GET /showArticles
const showFeaturedArticles = asyncHandler(async (req, res) => {
  const featuredArticles = await Article.find({ placement: "featured" })
    .limit(2)
    .sort({ createdAt: -1 });
  res.status(200).json(featuredArticles);
});

// GET /showArticles
const showStoriesArticles = asyncHandler(async (req, res) => {
  const storyArticles = await Article.find({ placement: "stories" })
    .limit(8)
    .sort({ createdAt: -1 });
  res.status(200).json(storyArticles);
});

// GET /showArticles
const showCardArticles = asyncHandler(async (req, res) => {
  const cardArticles = await Article.find({ placement: "card" })
    .limit(20)
    .sort({ createdAt: -1 });
  res.status(200).json(cardArticles);
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  writeArticle,
  showAllArticles,
  viewArticle,
  showFeaturedArticles,
  showCardArticles,
  showStoriesArticles,
};
