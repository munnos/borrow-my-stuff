const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchemaLS = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,

    }

});
const CategoryLS = mongoose.model('CategoryLS', categorySchemaLS);

module.exports = CategoryLS;