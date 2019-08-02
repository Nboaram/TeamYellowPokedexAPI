var express = require('express');
var router = express.Router();
var schemas  = require('../userSchema');
// var paramHandler = require('');
// var utils = require('');

router.get('/:username', (request, response) => {
    return schemas.UsersModel.findOne({'username': request.params.username}).then((x) => {
        console.log(x);
        response.status(200).send(x);
    });
});

router.post('/create', async (request, response, next) => {
    const newUser = new schemas.UsersModel(request.body);
    return newUser.save().then(
        doc => response.status(201).send(doc)
    );
});

router.put('/:username', async (request, response, next) => {
    schemas.UsersModel.findOneAndUpdate({username: request.params.username}, request.body).then(() => {
        response.status(202).send("update successful");
    });
});

router.delete('/:username', (request, response, next) => {
    return schemas.UsersModel.findOneAndRemove({username: request.params.username}).then((x) =>{
        response.status(204).send(x);
    });
});

module.exports = router;