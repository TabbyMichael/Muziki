import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Disc, User, ListMusic } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';
import { searchApi } from '../services/api';
import type { SearchResults } from '../types';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const { play } = useAudio();

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.trim()) {
        setLoading(true);
        try {
          const data = await searchApi.search(query);
          setResults(data);
        } catch (error) {
          console.error('Search failed:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults(null);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  return (
    <div className="flex-1 bg-black/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full h-12 pl-12 pr-4 bg-zinc-800 rounded-full text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
          </div>
        ) : results && query ? (
          <div className="space-y-8">
            {/* Tracks */}
            {results.tracks.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Disc size={24} /> Songs
                </h2>
                <div className="bg-zinc-900/50 rounded-lg divide-y divide-zinc-800">
                  {results.tracks.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center gap-4 p-4 hover:bg-zinc-800/50 transition cursor-pointer group"
                      onClick={() => play(track)}
                    >
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{track.title}</h3>
                        <p className="text-sm text-zinc-400 truncate">{track.artist}</p>
                      </div>
                      <span className="text-sm text-zinc-400">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Artists */}
            {results.artists.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <User size={24} /> Artists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {results.artists.map((artist) => (
                    <div
                      key={artist.id}
                      className="bg-zinc-900/50 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer group"
                    >
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full aspect-square rounded-full object-cover mb-4"
                      />
                      <h3 className="font-semibold text-center truncate">{artist.name}</h3>
                      <p className="text-sm text-zinc-400 text-center">Artist</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Playlists */}
            {results.playlists.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ListMusic size={24} /> Playlists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {results.playlists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className="bg-zinc-900/50 p-4 rounded-lg hover:bg-zinc-800/50 transition cursor-pointer group"
                    >
                      <img
                        src={playlist.cover}
                        alt={playlist.title}
                        className="w-full aspect-square rounded object-cover mb-4"
                      />
                      <h3 className="font-semibold truncate">{playlist.title}</h3>
                      <p className="text-sm text-zinc-400 truncate">{playlist.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;