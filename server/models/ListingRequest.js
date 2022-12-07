const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
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
    dateRequested: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    duration: String,
    approved: { type: Boolean, default: false },
    active: { type: Boolean, default: true }

});
const ListingRequest = mongoose.model('ListingRequest', listingRequest);

module.exports = ListingRequest;

//approve: false, active: true -> request is active - pending approval - default
//approve: true, active: false -> request is no longer active - request approved
//approve: false, active: false -> request is no longer active - request denied