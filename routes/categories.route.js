
const { Router } = require('express');
const { categoriesController } = require('../controlles/categories.controller');
const router = Router();

module.exports = router;
router.post('/categories', categoriesController.createCategories)
router.delete('/categories/:id', categoriesController.deleteCategoties)
router.get('/categories', categoriesController.getCategories)
