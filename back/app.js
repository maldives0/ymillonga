const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
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

app.use(cors({
    origin: 'http://localhost:3060',
    credentials: true,//true: cookie를 다른 도메인(3060 port에서 3065 port로 전달하는 경우)으로 전달하게 함
}));
//app.use(cors({
//     origin: 'http://nodebird.com'
// })); // 해당 주소에서 온 요청만 허용
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

app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
    //에러 처리 미들웨어를 특별하게 보이도록 하고 싶을 때 따로 만들어주기

});
app.listen(3065, () => {
    console.log('서버 실행 중');
});