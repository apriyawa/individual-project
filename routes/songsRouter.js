const songsRouter = require('express').Router();
const SongsController = require('../controllers/songsController');

songsRouter.get('/', SongsController.viewAllSong);
songsRouter.post('/', SongsController.createSong);
songsRouter.get('/:id', SongsController.viewSong);
songsRouter.put('/:id', SongsController.editSong);
songsRouter.patch('/:id', SongsController.editStatusSong);
songsRouter.delete('/:id', SongsController.deleteSong);

module.exports = songsRouter;