const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Post, Hashtag, Image, Comment, User } = require('../models');

router.get('/:hashtag', async (req, res, next) => {//GET/hashtag/노드
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) {//초기 로딩이 아닐 때
            where.id = {
                [Op.lt]:
                    parseInt(req.query.lastId, 10)
            }//조건은 lastId보다 작은 게시물 10개를 불러온다, operator의 약자
        }
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [
                ['createdAt', 'DESC'],
            ],
            include: [{
                model: Hashtag,
                where: { name: decodeURIComponent(req.params.hashtag) },
            },//조건 한가지 더 추가, hashtag로 게시글 검색하기
            {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            },
            {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],

                }],
            },
            {
                model: User, //좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            },
            {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }],
            },
            ],

        });
        // console.log('posts', posts);
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;