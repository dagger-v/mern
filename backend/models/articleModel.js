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
    image: { type: String },
    author: { type: String, ref: "User", required: true },
    placement: {
      type: String,
      enum: ["featured", "card", "stories"],
      default: "stories",
    },
    tag: {
      type: String,
      enum: ["games", "anime", "comics", "music"],
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
