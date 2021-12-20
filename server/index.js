const express = require('express');

// 라우터 경로 설정
const bbsRouter = require('./router/bbs');
const chatRouter = require('./router/chat');

// express 핵심코드
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// 라우터 연결
app.use('/bbs', bbsRouter);
app.use('/chat', chatRouter);


// 포트 오픈
let server = app.listen(3000, () => {
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.send('Hello, world');
})

// app.post('/', (req, res) => {
//     console.log(req);
//     res.send(req.body);
// })

module.exports = server;