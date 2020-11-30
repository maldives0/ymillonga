const passport = require('passport');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

//구글 로그인 전략
dotenv.config();
const { User } = require('../models');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/user/google/callback',
    },
        async (accessToken, refreshToken, profile, done) => {
            // console.log('profile', profile);
            try {
                const exUser = await User.findOne({
                    where: {
                        email: profile.emails[0].value,
                        provider: 'google',
                    },

                });
                if (exUser) {
                    return done(null, exUser);
                }
                else {
                    const hashedPassword = await bcrypt.hash(profile.displayName, 11);
                    const newUser = await User.create({
                        email: profile.emails[0].value,
                        password: hashedPassword,
                        nickname: profile.displayName,
                        snsId: profile.id,
                        provider: 'google',
                    });
                    done(null, newUser);
                }
            }
            catch (err) {
                console.error(err);
                done(err);
            }

        }
    ));
};