const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    mobileno:{
        type: Number,
        required: true
    },
    address:{
        type: String
    }
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;