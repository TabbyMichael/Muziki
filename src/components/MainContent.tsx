import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';
import { useNavigate } from 'react-router-dom';
import { spotifyService } from '../services/spotifyApi';
import SpotifyLogin from './SpotifyLogin';

function MainContent() {
  const navigate = useNavigate();
  const { play } = useAudio();
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('spotify_token');
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    loadFeaturedPlaylists();
  }, []);

  const loadFeaturedPlaylists = async () => {
    try {
      setLoading(true);
      const response = await spotifyService.getFeaturedPlaylists();
      const formattedPlaylists = response.map((playlist: any) => ({
        id: playlist.id,
        title: playlist.name,
        cover: playlist.images[0]?.url,
        description: playlist.description,
        tracks: {
          length: playlist.tracks?.total || 0
        },
        owner: playlist.owner?.display_name || 'Spotify'
      }));
      setFeaturedPlaylists(formattedPlaylists);
    } catch (error) {
      console.error('Error loading playlists:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayTrack = async (playlistId: string) => {
    try {
      const playlist = await spotifyService.getPlaylist(playlistId);
      if (playlist.tracks.items.length > 0) {
        const track = playlist.tracks.items[0].track;
        if (track.preview_url) {
          play({
            id: track.id,
            title: track.name,
            artist: track.artists.map((a: any) => a.name).join(', '),
            cover: track.album.images[0]?.url,
            duration: msToTime(track.duration_ms),
            url: track.preview_url,
          });
        }
      }
    } catch (error) {
      console.error('Error playing track:', error);
    }
  };

  const msToTime = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-black overflow-y-auto p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {!isAuthenticated ? (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-6">Welcome to Muziki</h1>
            <p className="text-zinc-400 mb-8">Connect with Spotify to access your music</p>
            <SpotifyLogin />
          </div>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Good evening</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
              {featuredPlaylists.slice(0, 6).map((playlist: any) => (
                <div 
                  key={playlist.id}
                  className="bg-zinc-800/50 group rounded-lg overflow-hidden hover:bg-zinc-800 transition cursor-pointer flex items-center"
                  onClick={() => navigate(`/playlist/${playlist.id}`)}
                >
                  <img 
                    src={playlist.cover} 
                    alt={playlist.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold truncate">{playlist.title}</h3>
                  </div>
                  <button 
                    className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition duration-300 mr-4 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayTrack(playlist.id);
                    }}
                  >
                    <Play fill="black" size={24} />
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Playlists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {featuredPlaylists.map((playlist: any) => (
                <div 
                  key={playlist.id}
                  className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer group"
                  onClick={() => navigate(`/playlist/${playlist.id}`)}
                >
                  <div className="relative mb-4">
                    <img 
                      src={playlist.cover} 
                      alt={playlist.title}
                      className="w-full aspect-square object-cover rounded-md shadow-lg"
                    />
                    <button 
                      className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayTrack(playlist.id);
                      }}
                    >
                      <Play fill="black" size={20} />
                    </button>
                  </div>
                  <h3 className="font-semibold mb-1 truncate">{playlist.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">{playlist.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default MainContent;