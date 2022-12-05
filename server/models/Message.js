const mongoose = require('mongoose');
//LS refers to the listing Schema
const { Schema } = mongoose;

const message = new Schema({
    from: {
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
    },
    to: {
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        read: {type: Boolean, default: false}
    },
    message: String,
    dateCreated: {type: Date, default: Date.now}

});
const Message = mongoose.model('Message', message);

module.exports = Message;

//Messages: 2 scenarios:
//1st api call) -> fetch all elements from Message model where to: me.id group by from.id (just get the users who messaged me)

//2nd api call (once I have clicked on a user that messaged me) -> fetch all messages where to.id = me.id AND from.id = personYouClickedOn id
//and then populate the Chat section