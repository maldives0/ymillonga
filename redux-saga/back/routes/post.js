const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, Image, Comment, User, Hashtag, Report } = require('../models');
const multer = require('multer');//FE의 form-data형식을 받기 위해(이미지, 비디오 등등)
const multerS3 = require('multer-s3');//이미지 업로드를 알아서 해준다
const AWS = require('aws-sdk');//aws 접근 권한 얻기

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const frontUrl = require('../config/frontUrl');
try {
    fs.accessSync('uploads');
}
catch (err) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}
AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),//access
        bucket: 'ymillonga',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limits: { fileSize: 20 * 1024 * 1024 },//20MB
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {//POST/post
    try {
        const post = await Post.create({
            UserId: req.user.id,
            content: req.body.content,
        });
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));// [[노드, true], [리액트, true]]
            await post.addHashtags(result.map((v) => v[0]));
        }
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

router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {//POST/post/images
    //upload.array('image')에서 이미 이미지를 올려준다
    console.log(req.files);
    res.json(req.files.map(v => v.location));
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
router.post('/:postId/report', isLoggedIn, async (req, res, next) => {
    //POST/user
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.postId,
            }
        });
        if (!post) {
            return res.status(403).send('존재하지 않은 사용자입니다.');
        }
        const exReport = await Report.findOne({
            where: {
                UserId: req.user.id,
                PostId: parseInt(req.params.postId, 10),
            },
        });
        if (exReport) {
            return res.status(403).send('이미 신고한 게시글입니다.');
        }
        await Report.create({
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
            reason: req.body.reason,
        });
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'maliethy@gmail.com',
                pass: process.env.GMAIL_PASSWORD,
            },
        });
        await transporter.verify();
        await transporter.sendMail({
            from: '"ymillonga 신고내역" <report@api.ymillonga.xyz>',
            to: '"ymillonga 관리자" <maliethy@gmail.com>',
            subject: 'ymillonga - 신고발생',
            html: `
        <div>
          <a href="${frontUrl}/post/${req.params.postId}">신고가 접수되었습니다.</a>
          <p>${req.body.reason}</p>
        </div>
      `,
        });
        console.log('mail sent');
        res.status(201).send('ok');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.get('/:postId', async (req, res, next) => { // GET /post/1
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(404).send('존재하지 않는 게시글입니다.');
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }],
        })
        res.status(200).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {//POST/1/retweet
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            res.status(403).send('존재하지 않는 게시글입니다.');
        }

        if (post.UserId === req.user.id || post.Retweet && post.Retweet.UserId === req.user.id) {//게시글 작성자가 자신의 글을 리트윗하거나 또는 다른 사람이 리트윗한 자신의 게시글 다시 리트윗할 경우
            res.status(403).send('자신의 게시글은 리트윗할 수 없습니다.');
        }
        const retweetTargetId = post.RetweetId || post.id;//다른 사람이 리트윗한 게시글인지 찾아보고 아니라면 값을 넣어준다
        const exPost = await Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if (exPost) {
            return res.status(403).send('이미 리트윗한 게시글입니다.');
        }
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        const retweetWithPrevPost = await Post.findOne({
            where: { id: retweet.id },
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }],
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: User,
                through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }],
        });
        res.status(201).json(retweetWithPrevPost);
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
router.patch('/:postId', isLoggedIn, async (req, res, next) => {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    try {

        await Post.update({
            content: req.body.content
        }, {
            where: {
                id: req.params.postId,
                UserID: req.user.id,
            }
        });
        const updatePost = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));
            await updatePost.setHashtags(result.map((v) => v[0]));
        }
        res.status(200).json({ PostId: parseInt(req.params.postId, 10), content: req.body.content });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
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