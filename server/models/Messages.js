const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String
    },
    message: {
        type: String
    },
    imageUrl: {
        type: String, // New field for image URL
        default: "", // Optional field, default is null
    }
});

const Messages = mongoose.model('Message', messageSchema);

module.exports = Messages;