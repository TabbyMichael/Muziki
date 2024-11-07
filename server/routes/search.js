import express from 'express';
import { Playlist } from '../models/playlist.js';
import { Artist } from '../models/artist.js';
import { Track } from '../models/track.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const searchRegex = new RegExp(q, 'i');

    const [tracks, artists, playlists] = await Promise.all([
      Track.find({
        $or: [
          { title: searchRegex },
          { artist: searchRegex },
        ],
      }).limit(10),
      
      Artist.find({
        $or: [
          { name: searchRegex },
          { genres: searchRegex },
        ],
      }).limit(10),
      
      Playlist.find({
        $or: [
          { title: searchRegex },
          { description: searchRegex },
        ],
      }).limit(10),
    ]);

    res.json({
      tracks,
      artists,
      playlists,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as searchRoutes };