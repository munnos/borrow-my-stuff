const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;

const listingRequest = new Schema({
    listingProduct: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "ListingProduct"
    },
    requestee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    dateRequested: { type: Date, default: Date.now },
    duration: String,
    approved: { type: Boolean, default: false },
    active: { type: Boolean, default: true }

});
const ListingRequest = mongoose.model('ListingRequest', listingRequest);

module.exports = ListingRequest;