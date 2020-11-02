const express = require('express');
const app = express();
const postRouter = require('./routes/post');
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
app.listen(3066, () => {
    console.log('서버 실행 중');
});