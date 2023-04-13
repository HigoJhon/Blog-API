const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');
const { validPost } = require('../middlewares/post.valid');
const { tokenValid } = require('../middlewares/user.valid');

routerPost.post('/', tokenValid, validPost, postController.postPost);

module.exports = routerPost;