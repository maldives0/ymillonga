const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');//비밀번호 암호화 라이브러리
const passport = require('passport');
const { User, Post, Image } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const frontUrl = require('../app');
router.get('/', async (req, res, next) => {
    try {
        if (req.user) {//사용자가 있을 때
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: ['id', 'nickname'],
                include: [{//데이터효율을 위해 게시글수, 팔로잉수, 팔로워수만 가져오면 된다
                    model: Post,
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            res.status(200).json(fullUserWithoutPassword);

        } else {
            res.status(200).json(null);
        }
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
    //POST/user
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다');//응답을 한번만 보내야 함(res.send) header는 한번밖에 보낼 수 없다는 에러가 난다
        }
        const exNickname = await User.findOne({
            where: {
                nickname: req.body.nickname
            },
        });
        if (exNickname) {
            return res.status(403).send('이미 사용중인 닉네임입니다');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 11);//10~13 사이로 숫자가 높아질수록 보안이 높아진다, 대신 서버가 느리면 오래걸릴 수 있다
        await User.create({
            email: req.body.email,
            password: hashedPassword,
            nickname: req.body.nickname
        });// res.json 전에 실행되도록 await붙여주기
        res.status(201).send('ok');
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
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
                },
                {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/google', function (req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
}), async (req, res, next) => {
    return res.status(200).redirect('http://localhost:3050');

});
router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
}), async (req, res, next) => {
    return res.status(200).redirect('http://localhost:3050');

});


// GET '/user/google'
// : 여기로 접근하면 로그인 과정이 실행된다. 로그인 창으로 리다이렉트를 하고 결과를 GET '/user/google/callback'으로 받는다.
// passport.authenticate 메서드에 콜백 함수를 제공하지 않는다. 
// 카카오 로그인은 내부적으로 req.login을 호출하므로 직접 호출할 필요가 없다.
module.exports = router;