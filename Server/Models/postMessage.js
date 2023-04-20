import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creater: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("postMessage", postSchema);

export default PostMessage;
