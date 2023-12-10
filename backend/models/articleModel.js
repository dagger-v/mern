import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: { type: String, ref: "User", required: true },
    placement: {
      type: String,
      enum: ["featured", "card", "stories"],
      default: "stories",
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
