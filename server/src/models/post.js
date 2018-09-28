import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  desc: { type: String },
  photo: { type: String },
  likedBy: {
    type: [],
    default: []
  },
  comments: {
    type: [],
    default: []
  },
  createdAt: {
    type: String,
    default: new Date()
  },
  by: {
    type: {},
    required: true
  }
});

export default mongoose.model('Post', postSchema);
