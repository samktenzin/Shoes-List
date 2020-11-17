const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddYeezy = new Schema({
    addYeezy_description: {
        type: String
    },
    addYeezy_price: {
        type: String
    },
    addYeezy_priority: {
        type: String
    },
    addYeezy_released: {
        type: Boolean
    }
});

module.exports = mongoose.model('AddYeezy', AddYeezy);