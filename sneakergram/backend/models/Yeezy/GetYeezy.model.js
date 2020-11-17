const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GetYeezy = new Schema({
    GetYeezy_description: {
        type: String
    },
    GetYeezy_price: {
        type: String
    },
    GetYeezy_priority: {
        type: String
    },
    GetYeezy_released: {
        type: Boolean
    }
});

module.exports = mongoose.model('GetYeezy', GetYeezy);