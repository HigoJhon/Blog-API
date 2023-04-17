const routerPost = require('express').Router();
const postController = require('../controllers/post.controller');
const { validPost, validPutPost } = require('../middlewares/post.valid');
const { tokenValid } = require('../middlewares/user.valid');

routerPost.post('/', tokenValid, validPost, postController.postPost);
routerPost.get('/', tokenValid, postController.getPost);
routerPost.get('/:id', tokenValid, postController.getPostId);
routerPost.put('/:id', tokenValid, validPutPost, postController.putPost);

module.exports = routerPost;