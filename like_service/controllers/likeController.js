const Like = require('../models/Like');

exports.addLike = async (req, res) => {
  try {
    const { userName, postId } = req.body;
    const like = new Like({ userName, postId });
    await like.save();
    res.status(201).json({ message: 'Like ajoute', like });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Deja like par cet utilisateur' });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
};

exports.removeLike = async (req, res) => {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    if (!like) return res.status(404).json({ error: 'Like non trouve' });
    res.status(200).json({ message: 'Like supprime' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLikes = async (req, res) => {
  try {
    const { postId } = req.query;
    const filter = postId ? { postId } : {};
    const likes = await Like.find(filter);
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
