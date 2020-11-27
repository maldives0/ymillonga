const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, Image, Comment, User, Hashtag } = require('../models');
const multer = require('multer');//FE의 form-data형식을 받기 위해(이미지, 비디오 등등)
const fs = require('fs');
const path = require('path');
try {
    fs.accessSync('uploads');
}
catch (err) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);//확장자 추출
            const basename = path.basename(file.originalname, ext);
            done(null, basename + '-' + new Date().getTime() + ext);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },//20MB
});
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {//POST/post
    try {
        const post = await Post.create({
            UserId: req.user.id,
            content: req.body.content,
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
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
                }]
            },
            {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }],

        });
        res.status(201).json(fullPost);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {//POST/post/images
    //upload.array('image')에서 이미 이미지를 올려준다
    console.log(req.files);
    res.json(req.files.map(v => v.filename));
});

router.post('/:postId', isLoggedIn, async (req, res, next) => {//POST/1/comment
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        });
        if (!post) {
            res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            UserId: req.user.id,//deserialized user에서 가져온 값
            PostId: parseInt(req.params.postId, 10),
            content: req.body.content,
        });
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }]
        });
        res.status(201).json(fullComment);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;