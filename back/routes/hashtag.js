const express = require('express');
const { Op } = require('sequelize');
const { Post, Image, User, Hashtag, Comment } = require('../models');
const router = express.Router();

router.get('/:tag', async (req, res, next) => {//GET/노드
    try {
        const where = {};//초기 로딩일 때는 빈 객체
        if (parseInt(req.query.lastId, 10)) {//초기 로딩이 아닐 때(스크롤 내려 불러오기)
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }//Op:연산자, lt:보다 작은, lastId보다 작은 id 불러오기
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [
                ['createdAt', 'DESC'],//최신 게시글부터 가져오기
                [Comment, 'createdAt', 'DESC'],
            ],
            include: [{
                model: Hashtag,
                where: {
                    name: decodeURIComponent(req.params.tag)
                },
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            },
            {
                model: Image,
            },
            {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User,
                through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }],
            }],
        });

        res.status(200).json(posts);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
module.exports = router;