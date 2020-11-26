const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./models');
const morgan = require('morgan');
const userRouter = require('./routes/user');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportConfig = require('./passport');
const cors = require('cors');//브라우저에서 다른 도메인 서버로 요청을 보낼 때 브라우저에서 cors문제가 발생한다, 같은 도메인 FE 서버로 요청을 보낸다(proxy방식)
//또는 res.setHeader('Access-Control-Allow-Origin','http://localhost:3050');를 응답 값에 함께 보낸다
const app = express();
dotenv.config();
passportConfig();
const prod = process.env.NODE_ENV === 'production';
const port = prod ? 80 : 3051;


db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);

app.use(cors({
    origin: true,//해당주소에서 온 요청만 허용한다
    credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//app.use안에 들어가는 middleware,
//FE로 부터 넘어온 데이터를 req.body안에 넣어준다, router보다 먼저 실행되도록 위에 위치시키기
//form submit data를 urlencoded방식으로 처리해준다
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/post', userRouter);
app.use('/posts', userRouter);

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(port, () => {
    console.log(`${port}에서 대기 중`);
});