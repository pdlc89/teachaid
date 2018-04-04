const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
