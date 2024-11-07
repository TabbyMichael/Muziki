import React, { createContext, useContext, useState, useEffect } from 'react';
import { playlistApi } from '../services/api';
import type { Playlist, Track } from '../types';

interface PlaylistContextType {
  playlists: Playlist[];
  loading: boolean;
  error: string | null;
  createPlaylist: (playlist: Partial<Playlist>) => Promise<void>;
  addTrackToPlaylist: (playlistId: string, track: Track) => Promise<void>;
  removeTrackFromPlaylist: (playlistId: string, trackId: string) => Promise<void>;
  deletePlaylist: (playlistId: string) => Promise<void>;
}

const initialState: PlaylistContextType = {
  playlists: [],
  loading: false,
  error: null,
  createPlaylist: async () => {},
  addTrackToPlaylist: async () => {},
  removeTrackFromPlaylist: async () => {},
  deletePlaylist: async () => {},
};

const PlaylistContext = createContext<PlaylistContextType>(initialState);

export function PlaylistProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    playlists: Playlist[];
    loading: boolean;
    error: string | null;
  }>({
    playlists: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    loadPlaylists();
  }, []);

  const loadPlaylists = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await playlistApi.getPlaylists();
      setState(prev => ({
        ...prev,
        playlists: data,
        loading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load playlists',
      }));
    }
  };

  const createPlaylist = async (playlist: Partial<Playlist>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const newPlaylist = await playlistApi.createPlaylist(playlist);
      setState(prev => ({
        ...prev,
        playlists: [...prev.playlists, newPlaylist],
        loading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to create playlist',
      }));
    }
  };

  const addTrackToPlaylist = async (playlistId: string, track: Track) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const updatedPlaylist = await playlistApi.addTrackToPlaylist(playlistId, track);
      setState(prev => ({
        ...prev,
        playlists: prev.playlists.map(p => p.id === playlistId ? updatedPlaylist : p),
        loading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to add track to playlist',
      }));
    }
  };

  const removeTrackFromPlaylist = async (playlistId: string, trackId: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const updatedPlaylist = await playlistApi.removeTrackFromPlaylist(playlistId, trackId);
      setState(prev => ({
        ...prev,
        playlists: prev.playlists.map(p => p.id === playlistId ? updatedPlaylist : p),
        loading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to remove track from playlist',
      }));
    }
  };

  const deletePlaylist = async (playlistId: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await playlistApi.deletePlaylist(playlistId);
      setState(prev => ({
        ...prev,
        playlists: prev.playlists.filter(p => p.id !== playlistId),
        loading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to delete playlist',
      }));
    }
  };

  const value = {
    ...state,
    createPlaylist,
    addTrackToPlaylist,
    removeTrackFromPlaylist,
    deletePlaylist,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylist must be used within a PlaylistProvider');
  }
  return context;
};