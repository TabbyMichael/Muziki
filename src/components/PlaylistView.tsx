import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, Clock, Heart } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

function PlaylistView() {
  const { id } = useParams();
  const { play, currentTrack, isPlaying, togglePlay } = useAudio();
  const [playlist, setPlaylist] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Example playlist data - replace with actual API call
  useEffect(() => {
    // Simulated API call
    setPlaylist({
      id: "new-music-friday",
      title: "New Music Friday",
      description: "The very best in new music from around the world. Cover: The Weeknd",
      type: "Playlist",
      cover: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=300&h=300&fit=crop",
      stats: {
        saves: "392,980 saves",
        songs: "100 songs",
        duration: "about 6 hr"
      },
      tracks: [
        {
          id: "1",
          title: "São Paulo (feat. Anitta)",
          artist: "The Weeknd, Anitta",
          album: "São Paulo",
          duration: "5:01",
          addedDate: "6 days ago",
          cover: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=300&h=300&fit=crop",
        },
        // Add more tracks as needed
      ]
    });
    setIsLoading(false);
  }, [id]);

  if (isLoading || !playlist) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-black">
      {/* Header */}
      <div className="flex items-end gap-6 p-6 h-[400px] bg-gradient-to-b from-zinc-700/50">
        <img 
          src={playlist.cover}
          alt={playlist.title}
          className="w-52 h-52 shadow-lg"
        />
        <div className="flex-1">
          <span className="text-sm font-medium">{playlist.type}</span>
          <h1 className="text-8xl font-bold mb-6">{playlist.title}</h1>
          <p className="text-zinc-300 text-sm">{playlist.description}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-zinc-300">
            <span>Spotify</span>
            <span>•</span>
            <span>{playlist.stats.saves}</span>
            <span>•</span>
            <span>{playlist.stats.songs}</span>
            <span>•</span>
            <span>{playlist.stats.duration}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 py-4 flex items-center gap-6">
        <button 
          className="w-14 h-14 flex items-center justify-center bg-green-500 rounded-full hover:scale-105 transition"
          onClick={() => play(playlist.tracks[0])}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>
        <button className="text-zinc-400 hover:text-white transition">
          <Heart size={32} />
        </button>
      </div>

      {/* Tracks List */}
      <div className="px-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sm text-zinc-400 border-b border-zinc-800">
              <th className="px-4 py-2 text-left w-12">#</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Album</th>
              <th className="px-4 py-2 text-left">Date added</th>
              <th className="px-4 py-2 text-left w-12">
                <Clock size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track: any, index: number) => (
              <tr 
                key={track.id}
                className="group hover:bg-white/10 transition cursor-pointer"
                onClick={() => play(track)}
              >
                <td className="px-4 py-2 text-zinc-400 group-hover:text-white">
                  {index + 1}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-4">
                    <img 
                      src={track.cover}
                      alt={track.title}
                      className="w-10 h-10"
                    />
                    <div>
                      <div className="font-medium group-hover:text-white">
                        {track.title}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {track.artist}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-zinc-400">{track.album}</td>
                <td className="px-4 py-2 text-zinc-400">{track.addedDate}</td>
                <td className="px-4 py-2 text-zinc-400">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlaylistView; 