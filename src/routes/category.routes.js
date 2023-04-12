const routerCategory = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { tokenValid } = require('../middlewares/user.valid');
const { validCategory } = require('../middlewares/category.valid');

routerCategory.post('/', validCategory, tokenValid, categoryController.postCategories);
routerCategory.get('/', tokenValid, categoryController.getCategories);

module.exports = routerCategory;
