const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
  googleId: String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);
