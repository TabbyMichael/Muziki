import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { playlistRoutes } from './routes/playlists.js';
import { searchRoutes } from './routes/search.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/muziki')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/playlists', playlistRoutes);
app.use('/api/search', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});