const express = require('express');
const { Op } = require('sequelize');

const { Post, Image, User, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {//GET/posts
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
            limit: 10,//10개만
            //offset: 0,//1~10번까지, 게시글 추가삭제 시 문제가 생김,
            order: [
                ['createdAt', 'DESC'],
                [Comment, 'createdAt', 'DESC']
            ],
            include: [
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