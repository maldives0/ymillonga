const passport = require('passport');

const { User } = require('../models');
const local = require('./local');
const google = require('./google');

//로그인 설정
module.exports = () => {
    passport.serializeUser((user, done) => {
        // 서버쪽에 [{ id: 1, cookie: 'clhxy' }]
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {

        try {
            const user = await User.findOne({
                where: { id }
            });
            done(null, user);//req.user
        } catch (err) {
            console.error(err);
            done(err);
        }
    });
    local();
    google();
};
