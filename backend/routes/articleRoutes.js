import express from "express";
const router = express.Router();

import { writeArticle } from "../controllers/articleController.js";

router.post("/write", writeArticle);

export default router;
