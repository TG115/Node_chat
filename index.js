const express = require('express');

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// server와 browser가 연결될때까지 기다리는 것
app.listen(3000, () => {
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.send(req.query.test);
})

app.post('/', (req, res) => {
    console.log(req);
    res.send(req.body);
})