const { Song, Artist, Log } = require('../models');

class SongsController {
    static createSong (req, res, next) {
        const { title, description, ArtistId, songType } = req.body;
        
        let songCreated;

        Song.create({
            title, description, ArtistId, UserId: req.user.id, songType
        })
        .then((result) => {
            songCreated = result;

            return Log.create({
                name: "Create",
                description: `New Song with name ${title} and id ${songCreated.id} created`,
                SongId: songCreated.id,
                UserId: req.user.id
            })
        })
        .then((result) => {
            res.status(201).json(songCreated)
        })
        .catch((err) => {
            next(err);
        })
    }

    static viewAllSong (req, res, next) {
        Song.findAll({
            include: [{
                model: Artist
            }],
            order: [
                ['createdAt', 'DESC']
            ],
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }

    static viewSong (req, res, next) {
        Song.findByPk(req.params.id, {
            include: Artist
        })
        .then((result) => {
            if (!result) {
                throw ({ name: "SongNotFound" })
            } else {
                res.status(200).json(result)
            }
        })
        .catch((err) => {
            next(err);        
        })
    }

    static editSong (req, res, next) {
        const { title, description, ArtistId, songType } = req.body;
        let updatedSong;

        Song.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            if (!result) {
                throw ({ name: "SongNotFound"})
            } else if (result.UserId !== req.user.id && req.user.role !== "Admin") {
                throw ({ name: "Forbidden" })
            } else {
                return Song.update({
                    title, description, ArtistId, songType
                }, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                })
            }
        })
        .then((result) => {
            updatedSong = result[1][0];

            return Log.create({
                name: "Update",
                description: `Song with name ${title} and id ${req.params.id} updated`,
                SongId: req.params.id,
                UserId: req.user.id
            })
        })
        .then((result) => {
            res.status(200).json(updatedSong)
        })
        .catch((err) => {
            next(err);
        })
    }

    static deleteSong (req, res, next) {
        let tempTitle = "";

        Song.findByPk(req.params.id, {
            attributes: ["title", "UserId"],
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            if (!result) {
                throw ({ name: "DeleteSongNotFound", songIdToDelete: req.params.id});
            } else if (result.UserId !== req.user.id && req.user.role !== "Admin") {
                throw ({ name: "Forbidden" });
            } else {
                tempTitle = result.title;
                return Song.update({
                    status: "Archived"
                },{
                    where: {
                        id: req.params.id
                    }
                })
            }
        })
        .then((result) => {
            return Log.create({
                name: "Delete",
                description: `Song with name ${tempTitle} and id ${req.params.id} permanently deleted`,
                SongId: req.params.id,
                UserId: req.user.id
            })
        })
        .then((response) => {
            res.status(200).json({ messages: [`${tempTitle} with ID ${req.params.id} success to delete`] })
        })
        .catch((err) => {
            next(err);
        })
    }

    static editStatusSong (req, res, next) {
        let updatedSong, 
        initialStatus;

        Song.findByPk(req.params.id)
        .then((result) => {
            initialStatus = result.status;

            if (!result) {
                throw ({ name: "SongNotFound" });
            } else if (req.user.role !== "Admin") {
                throw ({ name: "Forbidden"})
            } else {
                return Song.update({
                    status: req.body.status
                }, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                })
            }
        })
        .then((result) => {
            updatedSong = result[1][0];

            return Log.create({
                name: "Patch",
                description: `The status of Song with name ${updatedSong.title} and id ${req.params.id} has been updated from ${initialStatus} into ${req.body.status}`,
                SongId: req.params.id,
                UserId: req.user.id
            })
        })
        .then((result) => {
            res.status(200).json(updatedSong)
        })
        .catch((err) => {
            next(err)
        })

    }
}

module.exports = SongsController;