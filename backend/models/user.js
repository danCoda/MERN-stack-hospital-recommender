const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    painLevel: {
        type: Number,
        required: true
    },
    diagnosisId: {
        type: Number,
        required: true
    },
});

// Compile model.
const User = mongoose.model('User', userSchema);

module.exports = User;