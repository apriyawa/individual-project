const customerBookmarkRouter = require('express').Router();
const CustomerController = require('../controllers/customerController');

customerBookmarkRouter.get('/', CustomerController.viewAllBookmark);
customerBookmarkRouter.post('/:id', CustomerController.bookmarkSong);
customerBookmarkRouter.delete('/:id', CustomerController.deleteBookmarkSong);

module.exports = customerBookmarkRouter;