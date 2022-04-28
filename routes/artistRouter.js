const artistRouter = require('express').Router();
const ArtistController = require('../controllers/artistController');

artistRouter.get('/', ArtistController.viewAllArtists);

module.exports = artistRouter;