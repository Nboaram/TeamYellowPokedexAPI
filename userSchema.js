let mongoose = require("mongoose");
let schema = mongoose.Schema;

exports.user = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    pokemon1: {
        type: String
    },
    pokemon2: {
        type: String
    },
    pokemon3: {
        type: String
    },
    pokemon4: {
        type: String
    },
    pokemon5: {
        type: String
    },
    pokemon6: {
        type: String
    }
});

exports.UsersModel = mongoose.model('pokeTeam', this.user);