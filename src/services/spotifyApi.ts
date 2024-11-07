import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';
const AUTH_URL = 'https://accounts.spotify.com/api/token';
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken: string | null = null;

// Create axios instance for Spotify API calls
const spotifyApi = axios.create({
  baseURL: SPOTIFY_BASE_URL,
});

// Intercept requests to add token
spotifyApi.interceptors.request.use(async (config) => {
  // First try to get token from localStorage (user authentication)
  const userToken = window.localStorage.getItem('spotify_token');
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
    return config;
  }

  // Fall back to client credentials if no user token
  if (!accessToken) {
    accessToken = await getAccessToken();
  }
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Get access token using client credentials flow
async function getAccessToken() {
  try {
    const response = await axios.post(AUTH_URL, 
      new URLSearchParams({
        'grant_type': 'client_credentials',
      }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
}

export const spotifyService = {
  // Get featured playlists
  getFeaturedPlaylists: async () => {
    const response = await spotifyApi.get('/browse/featured-playlists');
    return response.data.playlists.items;
  },

  // Get playlist details
  getPlaylist: async (playlistId: string) => {
    const response = await spotifyApi.get(`/playlists/${playlistId}`, {
      params: {
        fields: 'id,name,description,images,tracks.items(track(id,name,artists,album,duration_ms,preview_url))',
      }
    });
    return response.data;
  },

  // Search tracks, artists, or playlists
  search: async (query: string, type: string = 'track,artist,playlist') => {
    const response = await spotifyApi.get('/search', {
      params: {
        q: query,
        type,
        limit: 20,
      },
    });
    return response.data;
  },

  // Get track audio features (tempo, key, etc.)
  getAudioFeatures: async (trackId: string) => {
    const response = await spotifyApi.get(`/audio-features/${trackId}`);
    return response.data;
  },

  // Get several tracks
  getTracks: async (trackIds: string[]) => {
    const response = await spotifyApi.get('/tracks', {
      params: {
        ids: trackIds.join(','),
      },
    });
    return response.data.tracks;
  },
}; 