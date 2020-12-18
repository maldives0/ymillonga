const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./models');
const morgan = require('morgan');
const path = require('path');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportConfig = require('./passport');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');//hpp, helmet:production모드일 때 보안에 필요한 필수 패키지들
const app = express();
dotenv.config();
passportConfig();
const prod = process.env.NODE_ENV === 'production';

const frontUrl = prod ? "//ymillonga.com" : "http://localhost:3050";

db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);
app.use(morgan('dev'));

if (prod) {
    // app.enable('trust proxy');
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(cors({
        origin: [frontUrl, '//52.78.17.63'],
        credentials: true,
    }))
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: prod,
    // cookie: {
    //     httpOnly: true,
    //     secure: false,
    //     //process.env.NODE_ENV === 'production',//https일 때 true
    //     domain: process.env.NODE_ENV === 'production' && '.ymillonga.com'
    // },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);


app.get('/', (req, res) => {
    res.send('hello express');
});


app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(80, () => {
    console.log(`80에서 대기 중`);
});