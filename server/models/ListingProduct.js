const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;

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
        required: true
      },
      borrowDuration: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"        
      },
      listingDate: {type: Date, default: Date.now}
});
const ListingProduct = mongoose.model('ListingProduct', listingProduct);

module.exports = ListingProduct;