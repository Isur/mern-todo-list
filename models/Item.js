const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);