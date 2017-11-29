const mongoose = require('mongoose');

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
  comments: [String]
});

module.exports = mongoose.model('Post', PostSchema);

//comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]