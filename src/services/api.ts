import axios from 'axios';
import type { Playlist, Track, SearchResults } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const playlistApi = {
  getPlaylists: async () => {
    const response = await api.get<Playlist[]>('/playlists');
    return response.data;
  },
  
  getPlaylist: async (id: string) => {
    const response = await api.get<Playlist>(`/playlists/${id}`);
    return response.data;
  },
  
  createPlaylist: async (playlist: Partial<Playlist>) => {
    const response = await api.post<Playlist>('/playlists', playlist);
    return response.data;
  },
  
  updatePlaylist: async (id: string, playlist: Partial<Playlist>) => {
    const response = await api.put<Playlist>(`/playlists/${id}`, playlist);
    return response.data;
  },
  
  deletePlaylist: async (id: string) => {
    const response = await api.delete(`/playlists/${id}`);
    return response.data;
  },
  
  addTrackToPlaylist: async (playlistId: string, track: Track) => {
    const response = await api.post<Playlist>(`/playlists/${playlistId}/tracks`, track);
    return response.data;
  },
  
  removeTrackFromPlaylist: async (playlistId: string, trackId: string) => {
    const response = await api.delete(`/playlists/${playlistId}/tracks/${trackId}`);
    return response.data;
  },
};

export const searchApi = {
  search: async (query: string): Promise<SearchResults> => {
    const response = await api.get<SearchResults>(`/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },
};