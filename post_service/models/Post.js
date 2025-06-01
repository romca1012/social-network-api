const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Post', postSchema);
