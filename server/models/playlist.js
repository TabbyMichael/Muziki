import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  id: String,
  title: String,
  artist: String,
  cover: String,
  duration: String,
  url: String,
});

const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  cover: String,
  tracks: [trackSchema],
  userId: String,
}, {
  timestamps: true,
});

export const Playlist = mongoose.model('Playlist', playlistSchema);