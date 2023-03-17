const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res) => {
  Post.find()
    .then((posts) => {
      res.status(200).json({ message: "posts fetched successfully", posts });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "validation failed",
      error: errors.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title,
    content,
  });
  post
    .save()
    .then((result) => {
      console.log(res);
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Post fetched successfully", post });
    })
    .catch((err) => console.log(err));
};
