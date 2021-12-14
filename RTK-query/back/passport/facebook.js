const passport = require('passport');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

//페이스북 로그인 전략
dotenv.config();
const { User } = require('../models');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/user/facebook/callback',
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log('profile', profile);
            try {
                const exUser = await User.findOne({
                    where: {
                        email: profile.displayName,
                        provider: 'facebook',
                    },

                });

                if (exUser) {
                    return done(null, exUser);
                }
                else {
                    const hashedPassword = await bcrypt.hash(profile.displayName, 11);
                    if (profile.emails) {
                        const newUser = await User.create({
                            email: profile.emails[0].value,
                            password: hashedPassword,
                            nickname: profile.displayName,
                            snsId: profile.id,
                            provider: 'facebook',
                        });
                        done(null, newUser);
                    } else {
                        const newUser = await User.create({
                            email: profile.displayName,
                            password: hashedPassword,
                            nickname: profile.displayName,
                            snsId: profile.id,
                            provider: 'facebook',
                        });
                        done(null, newUser);
                    }

                }
            }
            catch (err) {
                console.error(err);
                done(err);
            }

        }
    ));
};