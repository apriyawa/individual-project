const customerSongsRouter = require('express').Router();
const CustomerController = require('../controllers/customerController');

customerSongsRouter.get('/', CustomerController.viewAllSong);
customerSongsRouter.get('/:id', CustomerController.viewSong);

module.exports = customerSongsRouter;