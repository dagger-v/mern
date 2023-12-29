import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  writeArticle,
  showAllArticles,
  showFeaturedArticles,
  showCardArticles,
  showStoriesArticles,
  viewArticle,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/write", writeArticle);
router.get("/showAllArticles", showAllArticles);
router.get("/article/:id", viewArticle);
router.get("/showCardArticles", showCardArticles);
router.get("/showStoriesArticles", showStoriesArticles);
router.get("/showFeaturedArticles", showFeaturedArticles);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
