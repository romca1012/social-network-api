const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post' },
  createdAt: { type: Date, default: Date.now }
});

likeSchema.index({ userName: 1, postId: 1 }, { unique: true });

module.exports = mongoose.model('Like', likeSchema);