const express = require('express');

module.exports = (req, res) => {
    res.send(req.query);
}