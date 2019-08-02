var express = require('express');
var router = express.Router();
var schemas  = require('./userSchema');
var paramHandler = require('');
var utils = require('');

router.get('/:username'), (req, res) => {
    return schemas.user.findOne({'username': req.params.username}).then((x) => {
        console.log(x);
        res.status(200).send(x);
    });
}

router.post('/create'), (request, response, next) => {
    schemas
}