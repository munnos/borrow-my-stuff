const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;

const listingProduct = new Schema ({
      nameLS: {
        type: String,
        required: true,
        trim: true
      },
      descriptionLS: {
        type: String
      },
      imageLS: {
        type: String
      },
      categoryLS: {
        type: Schema.Types.ObjectId,
        ref: 'ListingCategory',
        required: true
      },
      borrowDurationLS: {
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