import { useState, useEffect } from 'react';
import { Search as SearchIcon, Disc, User, ListMusic, Play } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';
import { spotifyService } from '../services/spotifyApi';
import { useNavigate } from 'react-router-dom';

interface SearchResults {
  tracks: any[];
  artists: any[];
  playlists: any[];
}

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const { play } = useAudio();
  const navigate = useNavigate();

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.trim()) {
        setLoading(true);
        try {
          const data = await spotifyService.search(query);
          setResults({
            tracks: data.tracks.items.map((track: any) => ({
              id: track.id,
              title: track.name,
              artist: track.artists.map((a: any) => a.name).join(', '),
              album: track.album.name,
              cover: track.album.images[0]?.url,
              preview_url: track.preview_url,
              duration_ms: track.duration_ms,
            })),
            artists: data.artists.items.map((artist: any) => ({
              id: artist.id,
              name: artist.name,
              image: artist.images[0]?.url,
              followers: artist.followers.total,
            })),
            playlists: data.playlists.items.map((playlist: any) => ({
              id: playlist.id,
              title: playlist.name,
              description: playlist.description,
              cover: playlist.images[0]?.url,
            })),
          });
        } catch (error) {
          console.error('Search failed:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults(null);
      }
    }, 500); // Debounce search

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const handlePlayTrack = (track: any) => {
    if (track.preview_url) {
      play({
        id: track.id,
        title: track.title,
        artist: track.artist,
        cover: track.cover,
        duration: msToTime(track.duration_ms),
        url: track.preview_url,
      });
    }
  };

  const msToTime = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <main className="flex-1 bg-black overflow-y-auto p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Input */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-zinc-800 rounded-full text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
          </div>
        ) : results ? (
          <div className="space-y-8">
            {/* Tracks Section */}
            {results.tracks.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Disc size={24} /> Songs
                </h2>
                <div className="grid gap-4">
                  {results.tracks.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer group"
                      onClick={() => handlePlayTrack(track)}
                    >
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-12 h-12 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{track.title}</h3>
                        <p className="text-sm text-zinc-400 truncate">{track.artist}</p>
                      </div>
                      <button className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 transition">
                        <Play fill="black" size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Artists Section */}
            {results.artists.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <User size={24} /> Artists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {results.artists.map((artist) => (
                    <div
                      key={artist.id}
                      className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer"
                    >
                      <img
                        src={artist.image || '/default-artist.png'}
                        alt={artist.name}
                        className="w-full aspect-square rounded-full object-cover mb-4"
                      />
                      <h3 className="font-semibold truncate">{artist.name}</h3>
                      <p className="text-sm text-zinc-400">Artist</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Playlists Section */}
            {results.playlists.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ListMusic size={24} /> Playlists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {results.playlists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer"
                      onClick={() => navigate(`/playlist/${playlist.id}`)}
                    >
                      <img
                        src={playlist.cover}
                        alt={playlist.title}
                        className="w-full aspect-square rounded object-cover mb-4"
                      />
                      <h3 className="font-semibold truncate">{playlist.title}</h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">{playlist.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-400">
            Search for songs, artists, or playlists
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;