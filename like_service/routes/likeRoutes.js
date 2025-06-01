const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/', likeController.addLike);
router.delete('/:id', likeController.removeLike);
router.get('/', likeController.getLikes); // optionnel/debug

module.exports = router;
