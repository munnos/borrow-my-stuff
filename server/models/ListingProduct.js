const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
const listingProduct = new Schema ({
      name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'ListingCategory',
        required: false
      },
      borrowDuration: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "User"        
      },
      listingDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }
});
const ListingProduct = mongoose.model('ListingProduct', listingProduct);

module.exports = ListingProduct;