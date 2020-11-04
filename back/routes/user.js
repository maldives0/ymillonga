const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });
            res.status(200).json(fullUserWithoutPassword);
        }
        else {
            req.status(200).json(null);
        }
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {

        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            // console.log('info?', info.reason);
            return res.status(401).send(info.reason);//인증되지 않음
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                //passport에서 로그인 시 에러가 날 경우
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });
            return res.status(200).json(fullUserWithoutPassword);//사용자정보를 프론트로 넘겨준다
            //res.setHeader('Cookie','cxlyid');
        });
    })(req, res, next);//authenticate 미들웨어 확장법
});
router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        // res.setHeader('Access-Control-Allow-Origin','*');//브라우저가 cors허용하도록 함
        res.status(201).send('ok');
    }
    catch (error) {
        console.error(error);
        next(error);//status(500)
    }
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.patch('/nickname', async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,

        }, {
            where: { id: req.user.id }
        });
        res.status(200).json({ nickname: req.body.nickname });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:userId/follow', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.UserId },
        });
        if (!user) {
            res.status(403).send('유령을 팔로우하려고 하시네요?');
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
router.delete('/:userId/follow', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.UserId },
        });
        if (!user) {
            res.status(403).send('유령을 언팔로우하려고 하시네요?');
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
router.get('/followers', async (req, res, next) => {
    try {
        await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('없는 사람을 찾으려고 하시네요?');
        }
        const followers = await user.getFollowers(req.user.id);
        res.status(200).json(followers);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
router.get('/followings', async (req, res, next) => {
    try {
        await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('없는 사람을 찾으려고 하시네요?');
        }
        const followings = await user.getFollowings(req.user.id);
        res.status(200).json(followings);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;
