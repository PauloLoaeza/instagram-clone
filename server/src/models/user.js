import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: { type: String },
  fullname: { type: String },
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

userSchema.pre('save', async function(next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (ex) {
    next(ex);
  }
});

export default mongoose.model('User', userSchema);
