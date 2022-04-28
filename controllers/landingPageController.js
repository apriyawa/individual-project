const { Song, Artist } = require('../models/index');

class LandingPageController {
    static getNewestSongs (req, res, next) {
        Song.findAll({
            include: [{
                model: Artist
            }],
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                status: 'Active'
            },
            limit: 5
        })
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = LandingPageController;