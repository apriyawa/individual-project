const customerRegisterRouter = require('express').Router();
const RegisterController = require('../controllers/registerController');

customerRegisterRouter.post('/', RegisterController.createUser);

module.exports = customerRegisterRouter;