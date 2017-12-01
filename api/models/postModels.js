const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: String,  
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
});

module.exports = mongoose.model('Post', PostSchema);