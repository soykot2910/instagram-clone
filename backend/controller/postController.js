import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  const { title } = req.body;

  const reqFile = "public/" + req.file.filename;

  if (!title || !reqFile) {
    return res.status(422).json({ error: "please add all the field" });
  }

  const post = new Post({
    title,
    image: reqFile,
  });
  post
    .save()
    .then((result) => {
      return res.status(201).json({ result });
    })
    .catch((e) => {
      console.log(e);
    });
};

const allPost = async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts });
};

const myPost = async (req, res) => {
  Post.find({ postedBy: req.user._id })
    .then((allPost) => {
      return res.status(201).json({
        posts: allPosts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { createPost, allPost, myPost };
