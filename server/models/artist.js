import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  genres: [String],
}, {
  timestamps: true,
});

export const Artist = mongoose.model('Artist', artistSchema);