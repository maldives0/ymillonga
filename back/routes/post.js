const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');//이미지 업로드를 알아서 해준다
const AWS = require('aws-sdk');//aws 접근 권한 얻기

const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');


const router = express.Router();

try {
    fs.accessSync('uploads');//uploads folder이 있는지 확인하기
}
catch (error) {
    console.log('uploads folder가 없으므로 생성합니다');
    fs.mkdirSync('uploads');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
const upload = multer({
    // storage: multer.diskStorage({
    //     destination(req, file, done) {
    //         done(null, 'uploads');//하드디스크 업로드 파일에 저장하기
    //     },
    //     filename(req, file, done) {
    //         const ext = path.extname(file.originalname);//확장자 추출(.png)
    //         const basename = path.basename(file.originalname, ext);//모모
    //         done(null, basename + '_' + new Date().getTime() + ext);//모모202011051616.png
    //     },
    // }),
    //s3 original 파일에 이미지 업로드하기
    storage: multerS3({
        s3: new AWS.S3(),//access
        bucket: 'ymillonga',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limits: { fileSize: 20 * 1024 * 1024 },//20MB로파일크기 제한
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {//POST/post
    //upload.none() 이미지 첨부하지 않고 text만 업로드하기

    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,//로그인한 뒤에는 deserializeUser값을 사용한다
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));
            //findOrCreate:기존 값이 없을 때는 등록하고 있을 때는 가져온다, 결과값: [[노드,true],[리엑트,true]]
            await post.addHashtags(result.map((v) => v[0]));
        }

        if (req.body.image) {
            if (Array.isArray(req.body.image)) {//이미지 여러 개 업로드시 image:[모모.png, 숨.png]
                const images = await Promise.all(req.body.image.map((image) => Image.create({
                    src: image
                })));//각 이미지 경로가 Promise임, 한번에 이미지경로가 db에 저장된다, db에 이미지 파일을 넣으면 캐싱을 못하게 되므로 이미지에 접근할 수 있는 주소만 가지고 있고 파일 캐싱은 cloud에 함
                await post.addImages(images);
            } else {
                //이미지 하나 업로드 image: 모모.png (배열로 감싸지 않음)
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image);
            }
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            },
            {
                model: Comment,
                include: [{
                    model: User,//댓글작성자
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User,//게시글 작성자
                attributes: ['id', 'nickname'],
            }, {
                model: User, //좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            },
            ]
        });
        res.status(201).json(fullPost);
    }
    catch (error) {
        console.error(error);
        next(error);
    }

});


router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
    console.log(req.files, 'upload image info');
    // res.json(req.files.map((v) => v.filename));
    res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb')));
});
router.get('/:postId', async (req, res, next) => {//GET/post/1
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },

        });
        if (!post) {
            return res.status(404).send('존재하지 않는 게시글입니다.');
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [
                {
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
                    attribute: ['id', 'nickname'],
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
        });
        res.status(200).json(fullPost);
    }
    catch (error) {
        console.error(error);
        next(error);
    }

});
router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {//POST/post
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send('자기 글은 리트윗할 수 없습니다.');
        }
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId
            },
        });
        if (exPost) {
            return res.status(403).send('이미 리트윗 했습니다.');
        }
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        const retweetWithPrevPost = await Post.findOne({
            where: { id: retweet.id },
            include: [
                {
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
                    attribute: ['id', 'nickname'],
                }, {
                    model: User,
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
    catch (error) {
        console.error(error);
        next(error);
    }

});
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {//POST/post
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        });
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        });
        res.status(201).json(fullComment);
    }
    catch (error) {
        console.error(error);
        next(error);
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
        res.json({ PostId: post.id, UserId: req.user.id });
    }
    catch (error) {
        console.error(error);
        next(error);
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
        res.json({ PostId: post.id, UserId: req.user.id });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
router.delete('/:postId', isLoggedIn, async (req, res, next) => {//DELETE/post
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    }
    catch (error) {
        console.error(error);
        next(error);

    }
});
module.exports = router;