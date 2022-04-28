const { Artist } = require('../models/index');

class ArtistController {
    static viewAllArtists (req, res, next) {
        Artist.findAll()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = ArtistController;