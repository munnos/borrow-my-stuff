const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;

const listingSchema = new Schema ({
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
        ref: 'Category',
        required: true
      },
      borrowDurationLS: {
        type: String,
      }
});
const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;