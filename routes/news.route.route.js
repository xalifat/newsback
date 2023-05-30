const { Router } = require('express');
const { newsController } = require('../Controlles/news.controller');
const router = Router();

router.get('/news', newsController.getNews)
router.post('/news', newsController.createNews)
router.patch('/news/:id', newsController.editNews)
router.post('/news/:id', newsController.getNewsById)
router.delete('/news/:id', newsController.deleteNews)
router.get('/news/category/:id', newsController.getNewsByCateg)
// localStorage.../news/5785856685
// req.params  =  {id: 5785856685}


module.exports = router;