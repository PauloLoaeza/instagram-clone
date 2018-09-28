import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: { type: String },
  desc: { type: String },
  bio: { type: String },
  email: { type: String },
  thumbnail: { type: String },
  posts: {
    type: [],
    default: []
  },
  following: {
    type: [],
    default: []
  },
  followers: {
    type: [],
    default: []
  }
});

export default mongoose.model('User', userSchema);
