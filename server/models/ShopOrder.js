const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopOrderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ShopProduct'
    }
  ]
});

const ShopOrder = mongoose.model('ShopOrder', shopOrderSchema);

module.exports = ShopOrder;
