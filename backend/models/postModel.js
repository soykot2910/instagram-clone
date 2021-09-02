import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
