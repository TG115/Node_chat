const express = require('express');
const router = express.Router();

const bbsCreateController = require('../controller/bbs/create');
const bbsDeleteController = require('../controller/bbs/delete');
const bbsReadController = require('../controller/bbs/read');


router.post('/create', bbsCreateController);
router.delete('/delete', bbsDeleteController);
router.get('/read', bbsReadController);

/*

C : post
R : get
U : put, patch
D : delete

*/

module.exports = router;