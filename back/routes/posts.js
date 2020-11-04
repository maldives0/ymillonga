const express = require('express');
const { Post, Image } = require('../models');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            // where: { id: lastId },
            limit: 10,//10개만
            //offset: 0,//1~10번까지, 게시글 추가삭제 시 문제가 생김,
            order: [['createAt', 'DESC']],
            include: [{
                model: User,
            },
            {
                model: Image,
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;