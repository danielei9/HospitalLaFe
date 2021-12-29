import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true, lowercase: true },
  content: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;