const mongoose = require('mongoose');

const blogTemplate = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("myTable" , blogTemplate);