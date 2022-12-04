const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    descriptiom: {
        type: String,
        required: true,
        trim: true,
      },
    image:{
        type: String,
    },
    category: {
        type: Schema.types.ObjectID,
        ref: 'Category',
        required: true,
      }
});


const Product = model('Product', productSchema);
  
module.exports = User;