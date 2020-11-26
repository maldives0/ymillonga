const express = require('express');
const router = express.Router();

const { Post, Image, Comment, User, Hashtag } = require('../models');

router.post('/', async (req, res, next) => {
    try { }
    catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;