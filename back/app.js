const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공');
    })
    .catch(console.error);

app.use(cors({
    origin: true,
    credentials: false,
}));
//app.use(cors({
//     origin: 'http://nodebird.com'
// })); // 해당 주소에서 온 요청만 허용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('hello');
});
app.get('/api', (req, res) => {
    res.send('hello api');
});
app.get('/api/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hi' },
        { id: 2, content: 'hi2' },
        { id: 3, content: 'hi3' },
    ]);
});
app.use('/post', postRouter);
app.use('/user', userRouter);
app.listen(3065, () => {
    console.log('서버 실행 중');
});