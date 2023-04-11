const routerUser = require('express').Router();
const userController = require('../controllers/user.controller');
const { validUser } = require('../middlewares/user.valid');

routerUser.post('/', validUser, userController.postUser);

module.exports = routerUser;