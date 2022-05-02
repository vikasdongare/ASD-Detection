const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorySchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    imagelink: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
});
const History = mongoose.model('history', HistorySchema);
module.exports = History;