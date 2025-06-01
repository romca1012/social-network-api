const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/', postController.getPosts);

module.exports = router;