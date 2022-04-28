const customerUserRouter = require('express').Router();
const customerController = require('../controllers/customerController');

customerUserRouter.get('/', customerController.viewCustomer);

module.exports = customerUserRouter;