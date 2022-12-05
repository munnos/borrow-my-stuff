const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ShopCategory = mongoose.model('ShopCategory', shopCategorySchema);

module.exports = ShopCategory;
