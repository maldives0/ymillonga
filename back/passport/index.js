const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);//session에서는 id만 가지고 있는다
    });
    passport.deserializeUser(async (id, done) => {
        try {
            //session에 있는 id를 가지고 db에서 해당 사용자의 정보 모두를 찾는다
            const user = await User.findOne({ where: { id } });
            done(null, user);//req.user로 사용자정보를 보내줌
        }
        catch (error) {
            console.error(error);
            done(error);
        }
    });
    local();
};

// 프론트에서 서버로는 cookie만 보내요(clhxy)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 1 발견
// id: 1이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// 요청 보낼때마다 deserializeUser가 실행됨(db 요청 1번씩 실행)
// 실무에서는 deserializeUser 결과물 캐싱