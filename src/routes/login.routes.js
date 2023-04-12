const routerLogin = require('express').Router();
const loginController = require('../controllers/login.controller');
const { fieldValidation } = require('../middlewares/valid');

routerLogin.post('/', fieldValidation, loginController.postLogin);

module.exports = routerLogin;
