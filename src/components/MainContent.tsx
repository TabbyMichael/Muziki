import React from 'react';
import { Play } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const featuredPlaylists = [
  {
    id: "1",
    title: "African Hits",
    description: "Top African hits of 2024",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
    tracks: [
      {
        id: "track1",
        title: "African Queen",
        artist: "2Face Idibia",
        cover: "https://images.unsplash.com/photo-1671726203638-83742a2721a1?w=300&h=300&fit=crop",
        duration: "4:15",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      },
      {
        id: "track2",
        title: "Essence",
        artist: "Wizkid ft. Tems",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        duration: "3:45",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      }
    ]
  },
  {
    id: "2",
    title: "Afrobeats Rising",
    description: "New releases from emerging artists",
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop"
  },
  {
    id: "3",
    title: "Amapiano Vibes",
    description: "South African house music",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    id: "4",
    title: "Bongo Flava",
    description: "East African flavors",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
  }
];

function MainContent() {
  const { play, currentTrack, isPlaying } = useAudio();

  const handlePlayTrack = (track: any) => {
    play(track);
  };

  return (
    <main className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Good evening</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {featuredPlaylists.map((playlist) => (
            <div 
              key={playlist.id}
              className="bg-zinc-800/50 group rounded-lg overflow-hidden hover:bg-zinc-800 transition cursor-pointer flex items-center"
            >
              <img 
                src={playlist.cover} 
                alt={playlist.title}
                className="w-20 h-20 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="font-semibold truncate">{playlist.title}</h3>
              </div>
              {playlist.tracks && (
                <button 
                  className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition duration-300 mr-4 hover:scale-105"
                  onClick={() => handlePlayTrack(playlist.tracks[0])}
                >
                  <Play fill="black" size={24} />
                </button>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Made for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div 
              key={playlist.id}
              className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer group"
            >
              <div className="relative mb-4">
                <img 
                  src={playlist.cover} 
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                {playlist.tracks && (
                  <button 
                    className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300 hover:scale-105"
                    onClick={() => handlePlayTrack(playlist.tracks[0])}
                  >
                    <Play fill="black" size={20} />
                  </button>
                )}
              </div>
              <h3 className="font-semibold mb-1">{playlist.title}</h3>
              <p className="text-sm text-zinc-400">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;