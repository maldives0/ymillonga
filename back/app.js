const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);
passportConfig();

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
} else {
    app.use(morgan('dev'));
}


app.use(cors({
    origin: ['http://localhost:3060', 'nodebird.com'],//'http://nodebird.com', 해당 주소에서 온 요청만 허용
    credentials: true,//true: cookie를 다른 도메인(3060 port에서 3065 port로 전달하는 경우)으로 전달하게 함
}));

app.use('/', express.static(path.join(__dirname, 'uploads')));// '/' => 'localhost:3065/모모.png',__dirname(현재폴더:back), __dirname + 'uploads'로 적지 않는다. 운영체제마다 /(맥),\(윈도우) 경로설정 다른 것을 자동으로 해준다. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session(
    {
        saveUninitialized: false,
        resave: false,
        secret: process.env.COOKIE_SECRET,
    }
));
app.use(passport.initialize());
app.use(passport.session());


app.use('/posts', postsRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);


// app.use((err, req, res, next) => {
//     //에러 처리 미들웨어를 특별하게 보이도록 하고 싶을 때 따로 만들어주기

// });
app.listen(80, () => {
    console.log('서버 실행 중');
});