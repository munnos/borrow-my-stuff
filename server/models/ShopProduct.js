const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopProductSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'ShopCategory',
    required: true
  }
});

const ShopProduct = mongoose.model('ShopProduct', shopProductSchema);

module.exports = ShopProduct;
