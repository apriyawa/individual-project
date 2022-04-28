const { User, Song, Log, Artist } = require('../models/index');

class LogController {
    static getAllLogs (req, res, next) {
        Log.findAll({
            include: [{
                model: User,
                attributes: ["username", "email"]
            }, {
                model: Song,
                include: {
                    model: Artist,
                    attributes: ["name"]
                },
                attributes: ["title", "description", "status"]
            }]
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = LogController;