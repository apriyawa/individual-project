const customerLoginRouter = require('express').Router();
const LoginController = require('../controllers/loginController');

customerLoginRouter.post('/', LoginController.validateUserLogin);
customerLoginRouter.post('/google-sign-in', LoginController.customerGoogleSignIn);

module.exports = customerLoginRouter;