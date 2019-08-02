var mongoose = require('mongoose');
var reqExpress = require('express');
var cors = require('cors');
var config = require('./config');
var userPath = require('./router/userPath.js');
var express = reqExpress();


express.use(cors({origin: true}));
express.use(reqExpress.json());
express.use('/user', userPath);

express.use((err, req, res, next) => {
    if (config.app.logErrors) {
        console.log(err);
    }
    return res.status(500).send(err);
});

mongoose.connect(
    config.app.MONGODB_URI,
    { useNewUrlParser: true }).then(() => {
        console.log('Connection to Mongodb established!');
    }, (error) =>{
        console.log('Connection to Mongodb failed, exiting...');
        console.log(error);
        process.exit(1);
    }).then(() => {
        express.listen(config.app.PORT, () => {
            console.log(`Server running on port ${config.app.PORT}`);
        });
    });