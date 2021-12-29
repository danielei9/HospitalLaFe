import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, lowercase: true },
  createdAt: { type: Date, default: Date.now() }
});
const User = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
module.exports.findById = function (callback, limit) {
    User.find(callback).limit(limit);
}

module.exports = User;