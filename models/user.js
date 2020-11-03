const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
  userId: String,
  displayName: String
});

mongoose.model('users', user_schema);
