const mongoose = require('mongoose');
const Schema = mongoose.Schema; // same as const { Schema } = mongoose

const user_schema = new Schema({
  userId: String,
  displayName: String
});

mongoose.model('users', user_schema);
