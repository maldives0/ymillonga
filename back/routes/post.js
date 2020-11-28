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
        if (req.body.image) {//FE의 key값, 이미지나 파일이 아니면 req.body에 넣어준다, 배열로 보낸다 
            if (Array.isArray(req.body.image)) {
                //더할 이미지가 여러 개이면 image: [제로초.png, 부기초.png]
                const images = await Promise.all(req.body.image.map((image) => Image.create({
                    src: image
                })));//각 파일 경로는 제로초 create promise, ... 등이다
                await post.addImages(images);
            } else { //이미지를 하나만 올리면 image: 제로초.png
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image);
            }
        }
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

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {//POST/1/comment
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
            }],//특이사항은 조건으로 적고 나머지 값은 그대로 가져오기
        });
        res.status(201).json(fullComment);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.status(200).json({ PostId: post.id, UserId: req.user.id });
    }
    catch (err) {
        console.error(err);
        next(err);
    }


});
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.status(200).json({ PostId: post.id, UserId: req.user.id });

    }
    catch (err) {
        console.error(err);
        next(err);
    }
    const post = await Post.findOne({
        where: { id: req.params.postId }
    });

});
router.delete('/:postId', isLoggedIn, async (req, res, next) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                UserId: req.user.id,//내가 쓴 게시글만 지우기(보안 강화)
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }

});

module.exports = router;