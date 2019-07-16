const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    content: String,
    author: String
});

module.exports = mongoose.model('Comment', commentSchema);