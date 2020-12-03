const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');//비밀번호 암호화 라이브러리
const passport = require('passport');
const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const frontUrl = require('../config/frontUrl');

router.get('/google', function (req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
}), async (req, res, next) => {
    return res.status(200).redirect(frontUrl);

});
router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
}), async (req, res, next) => {
    return res.status(200).redirect(frontUrl);

});
// GET '/user/google'
// : 여기로 접근하면 로그인 과정이 실행된다. 로그인 창으로 리다이렉트를 하고 결과를 GET '/user/google/callback'으로 받는다.
// passport.authenticate 메서드에 콜백 함수를 제공하지 않는다. 
// 카카오 로그인은 내부적으로 req.login을 호출하므로 직접 호출할 필요가 없다.

router.get('/', async (req, res, next) => {
    // console.log(req.headers);//fe에서 보낸 쿠키 확인하기
    try {
        if (req.user) {//사용자가 있을 때
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: ['id', 'nickname', 'menuKey'],
                include: [{
                    model: Post,
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                },
                {
                    model: User,
                    as: 'Ignorings',
                    attributes: ['id'],
                }],
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


router.get('/followers', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자입니다.');
        }
        const followers = await user.getFollowers({
            attributes: ['id', 'nickname'],
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followers);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.get('/followings', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자입니다.');
        }
        const followings = await user.getFollowings({
            attributes: ['id', 'nickname'],
            limit: parseInt(req.query.limit, 10),
        });
        res.status(200).json(followings);
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
            nickname: req.body.nickname,
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
                    include: ['id', 'nickname'],
                },
                include: [
                    {//데이터효율을 위해 게시글수, 팔로잉수, 팔로워수만 가져오면 된다
                        model: Post,
                        attributes: ['id'],
                    },
                    {
                        model: User,
                        as: 'Followings',
                        attributes: ['id', 'nickname'],
                    },
                    {
                        model: User,
                        as: 'Followers',
                        attributes: ['id', 'nickname'],
                    }, {
                        model: User,
                        as: 'Ignorings',
                        attributes: ['id'],
                    }],
            })

            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.status(200).json({ nickname: req.body.nickname });
    }
    catch (err) {
        console.error(err);
        next(err);
    }

});
router.patch('/menuKey', async (req, res, next) => {
    try {
        if (req.user) {
            await User.update({
                menuKey: req.body.currentKey,
            }, {
                where: { id: req.user.id },
            });

            res.status(200).json({ currentKey: req.body.currentKey });
        } else {
            res.status(200).json({ currentKey: '1' });
        }
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자를 차단할 수 없습니다.');
        }
        await user.removeFollowings(req.user.id);//나를 following하는 user의 followings목록에서 나를 지우기
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.post('/logout', isLoggedIn, async (req, res) => {
    await User.update({
        menuKey: '1',
    }, {
        where: { id: req.user.id },
    });
    req.logout();
    req.session.destroy();
    res.redirect('/');
});


router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.userId }
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자는 팔로잉할 수 없습니다.');
        }
        await user.addFollowers(req.user.id);//게시글 작성자를 따라다니는 followers목록에 나를 추가
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자는 언팔로우할 수 없습니다.');
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.patch('/:userId/ignore', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자는 차단할 수 없습니다.');
        }
        await user.addIgnorings(req.params.userId);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.delete('/:userId/ignore', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id }
        });
        if (!user) {
            res.status(403).send('존재하지 않는 사용자는 차단풀기를 할 수 없습니다.');
        }
        await user.removeIgnorings(req.params.userId);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.get('/:id/', async (req, res, next) => {
    //GET/user/1
    try {
        const fullUserWithoutPassword = await User.findOne({
            where: { id: req.params.id },
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
            }, , {
                model: User,
                as: 'Ignorings',
                attributes: ['id'],
            }]
        })
        if (fullUserWithoutPassword) {//다른 유저의 개인 정보를 보호하기 위해 데이터 갯수만 보낸다
            const data = fullUserWithoutPassword.toJSON();//mysql 데이터를 json형식으로 바꾸기
            data.Posts = data.Posts.length;
            data.Followings = data.Followings.length;
            data.Followers = data.Followers.length;
            res.status(200).json(data);
        } else {
            res.status(404).json('존재하지 않는 사용자입니다.');
        }

    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
router.get('/:id/posts', async (req, res, next) => {
    //와일드 카드는 가장 아래로 내려주기
    //GET/user/1/posts
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (user) {
            const where = {};
            if (parseInt(req.query.lastId, 10)) {
                where.id = { [Op.lt]: parsetInt(req.query.lastId, 10) };
            }
            const otherUserPosts = await user.getPosts({
                where,
                limit: 10,
                order: [
                    ['createdAt', 'DESC'],
                ],
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }, {
                    model: Post,
                    as: 'Retweet',
                    include: [{
                        model: User,//유저가 리트윗한 게시글의 주인
                        attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
                    }],
                },
                {
                    model: User,
                    through: 'Like',
                    as: 'Likers',
                    attributes: ['id']
                },
                {
                    model: Comment,
                    include: [{
                        model: User,
                        attributes: ['id', 'nickname'],
                        order: ['createdAt', 'DESC'],
                    }]
                }]
            });
            res.status(200).json(otherUserPosts);
        } else {
            res.status(404).json('존재하지 않는 사용자입니다.');
        }

    }
    catch (err) {
        console.error(err);
        next(err);
    }
});


module.exports = router;