const routerUser = require('express').Router();
const userController = require('../controllers/user.controller');
const { validUser, tokenValid } = require('../middlewares/user.valid');

routerUser.post('/', validUser, userController.postUser);
routerUser.get('/', tokenValid, userController.getUser);

module.exports = routerUser;