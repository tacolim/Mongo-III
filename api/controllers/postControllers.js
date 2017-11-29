const mongoose = require('mongoose');

const Post = require('../models/postModels');
// const Comment = require('../models/commentModels');

const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const createPost = (req, res) => {
  const { author, title, content } = req.body;
  const newPost = new Post({ title, text });
  newPost.save()
    .then((createdPost) => {
      res.json(createdPost);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};

const listPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(500).json(err);
    }
    const list = posts.map(post => (post.title, post._id));
    res.json();
  });
};

const findPost = (req, res) => {
  const { id } = req.params;
  Post.find({ '_id': id }, (err, post) => {
      if (err) {
          res.status(500).json(err);
      }
      res.json(post);
  });
};

const addComment = (req, res) => {
  const { id } = req.params;
  const { text, author } = req.body;
  const newComment = new Comment({ text, author });
  newComment.save().then((comment) => {
    Post.findById(id, (postErr, post) => {
      if (postErr || !post) {
        res.status(STATUS_USER_ERROR);
        res.json({ message: `post not found at id ${id}` });
      }
      post.comments.push(comment);
      post.save();
      res.json({ success: 'hoorray!!' });
    }).catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
  });
};



module.exports = {
  createPost,
  listPosts,
  findPost,
  addComment,
};

