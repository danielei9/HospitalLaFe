/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           User.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */

import * as mongoose from 'mongoose'; 
import bcrypt from 'bcrypt';

const saltRounds = 8

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, lowercase: true },
  createdAt: { type: Date, default: Date.now() },
});
// Bcrypt Password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, saltRounds);
    console.log(user.password)
  }
  next();
 });

const User = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
module.exports.findById = function (callback, limit) {
    User.find(callback).limit(limit);
}

module.exports = User;