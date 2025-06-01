const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { userName, content } = req.body;
    const post = new Post({ userName, content });
    await post.save();
    res.status(201).json({ message: 'Post créé', post });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, { content }, { new: true });
    if (!post) return res.status(404).json({ error: 'Post non trouvé' });
    res.status(200).json({ message: 'Post mis à jour', post });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post non trouvé' });
    res.status(200).json({ message: 'Post supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};