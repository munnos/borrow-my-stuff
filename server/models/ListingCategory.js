const mongoose = require('mongoose');

const { Schema } = mongoose;

const listingCategory = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String
    }

});
const ListingCategory = mongoose.model('ListingCategory', listingCategory);

module.exports = ListingCategory;