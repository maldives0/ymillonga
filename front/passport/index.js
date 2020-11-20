const passport = require('passport');
const google = require('./google');
const axios = require('axios');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await axios.post(`/user/google/${id}`);
            done(null, user.data);
        } catch (err) {
            console.error(err);
            done(err);
        }
    });
    google();
};
//로그인 설정하기