"use strict";

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    pass: String,
});

module.exports = mongoose.model("users", UserSchema);
