const express = require('express');
const { Post, Image, User, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {//GET/posts
    try {
        const posts = await Post.findAll({
            // where: { id: lastId },

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
            ],

        });
        console.log('posts', posts);
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;