import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  cover: String,
  duration: String,
  url: String,
}, {
  timestamps: true,
});

export const Track = mongoose.model('Track', trackSchema);