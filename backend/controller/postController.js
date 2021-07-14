import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  const { title, body } = req.body;

  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }

  if (!title || !body || !reqFiles) {
    return res.status(422).json({ error: "please add all the field" });
  }

  const post = new Post({
    title,
    body,
    image: reqFiles,
    postedBy: req.user._id,
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
