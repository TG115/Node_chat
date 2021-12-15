const express = require('express');
const router = express.Router();

const chatController = require('../controller/chat/insert');

router.post('/create', chatController);

module.exports = router;