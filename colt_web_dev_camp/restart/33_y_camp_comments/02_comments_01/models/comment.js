const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    comment: String,
    author: String
});

module.exports = mongoose.model('Comment', commentSchema);