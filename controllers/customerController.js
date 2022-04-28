const { Song, Artist, User, Log, Bookmark } = require('../models');
const { Op } = require('sequelize');

class CustomerController {

    //Data pagination started
    static getPaginationData (data, page, limit) {
        const { count: totalItems, rows: songs } = data;
        const currentPage = page ? +page: 0;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, songs, totalPages, currentPage}
    }

    
    static getPagination (page) {
        const limit = 9;
        if (page === '1') {
            const offset = 0;
            return {limit, offset}
        } else {
            const offset = page ? page * limit - 9 : 0;
            return {limit, offset}
        }
    }

    //getting all song
    static viewAllSong (req, res, next) {
        const { page } = req.query || 0;
        const { limit, offset } = CustomerController.getPagination(page);
        const name = req.query.name || "";
        const company = req.query.company || "";

        Song.findAndCountAll({
            include: [{
                model: Artist,
                where: {
                    name: { [Op.iLike]: `%${company}%`} 
                }
            }],
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                [Op.and]: [
                    { status: 'Active' },
                    { title: { [Op.iLike]: `%${name}%`} }
                ],
            },
            limit,
            offset
        })
        .then((result) => {
            const response = CustomerController.getPaginationData(result, page, limit)
            res.status(200).json(response)
        })
        .catch((err) => {
            next(err)
        })
    }

    static viewSong (req, res, next) {

        Song.findByPk(req.params.id, {
            include: [{
                model: Artist
            }],
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then((result) => {
            if (!result) {
                throw ({ name: "SongNotFound" })
            } else {
                res.status(200).json(result)
            }
        })
        .catch((err) => {
            next(err)
        })
    }

    static bookmarkSong (req, res, next) {
        Bookmark.findAll({
            where: {
                [Op.and]: [
                    { SongId: req.params.id },
                    { UserId: req.user.id }
                ],
            }
        })
        .then((result) => {
            if (result.length > 0) {
                throw ({
                    name: "SongAlreadyBookmarked"
                })
            } else {
                return Song.findByPk(req.params.id, {
                    include: [{
                        model: Artist
                    }],
                    order: [
                        ['createdAt', 'DESC']
                    ]
                })
            }
        })
        .then((result) => {
            if (!result) {
                throw ({ name: "SongNotFound" })
            } else {
                return Bookmark.create({
                    UserId: req.user.id, SongId: req.params.id
                })
            }
        })
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => {
            next(err)
        })
    }

    static viewAllBookmark (req, res, next) {
        Bookmark.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },  
            where: {
                UserId: req.user.id
            },
            include: {
                model: Song,
                include: {
                    model: Artist
                }
            }
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }

    static deleteBookmarkSong (req, res, next) {
        Bookmark.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }

    static viewCustomer (req, res, next) {
        if (req.user) {
            const { id, username, email, role } = req.user;
            res.status(200).json({ id, username, email, role })
        } else {
            next()
        }
    }
}

module.exports = CustomerController;