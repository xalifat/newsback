const { Router } = require('express');
const { commentsController } = require('../controlles/comments.controller');
const router = Router();

module.exports = router;
router.post('/comments/news/:id', commentsController.createComment)
router.delete('/comments/:id', commentsController.deleteComments)
router.get('/comments/news/:id', commentsController.getComment)