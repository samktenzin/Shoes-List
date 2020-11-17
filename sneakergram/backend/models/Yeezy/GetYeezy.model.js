const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddYeezy = new Schema({
    AddYeezy_description: {
        type: String
    },
    AddYeezy_price: {
        type: String
    },
    AddYeezy_priority: {
        type: String
    },
    AddYeezy_released: {
        type: Boolean
    }
});

module.exports = mongoose.model('AddYeezy', AddYeezy);