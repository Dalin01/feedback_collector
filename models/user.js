const mongoose = require('mongoose');
const { Schema } = mongoose;

const user_schema = new Schema({
  id: String
})

mongoose.model('users', user_schema);
