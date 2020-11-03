const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {

        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            console.log('info?', info.reason);
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
                }, {
                    model: User,
                    as: 'Followings',
                },
                {
                    model: User,
                    as: 'Followers',
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

module.exports = router;
