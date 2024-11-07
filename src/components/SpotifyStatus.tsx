import { useEffect, useState } from 'react';
import { spotifyService } from '../services/spotifyApi';

function SpotifyStatus() {
  const [status, setStatus] = useState<{
    authenticated: boolean;
    apiWorking: boolean;
    error: string | null;
  }>({
    authenticated: false,
    apiWorking: false,
    error: null
  });

  useEffect(() => {
    checkSpotifyStatus();
  }, []);

  const checkSpotifyStatus = async () => {
    const token = window.localStorage.getItem('spotify_token');
    
    try {
      // Test API call
      const playlists = await spotifyService.getFeaturedPlaylists();
      
      setStatus({
        authenticated: !!token,
        apiWorking: !!playlists && Array.isArray(playlists),
        error: null
      });
    } catch (error) {
      setStatus({
        authenticated: !!token,
        apiWorking: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-zinc-800 rounded-lg shadow-lg z-50">
      <h3 className="font-semibold mb-2">Spotify API Status</h3>
      <ul className="space-y-1 text-sm">
        <li className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${status.authenticated ? 'bg-green-500' : 'bg-red-500'}`} />
          Authentication: {status.authenticated ? 'Connected' : 'Not Connected'}
        </li>
        <li className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${status.apiWorking ? 'bg-green-500' : 'bg-red-500'}`} />
          API Status: {status.apiWorking ? 'Working' : 'Not Working'}
        </li>
        {status.error && (
          <li className="text-red-400 text-xs mt-2">
            Error: {status.error}
          </li>
        )}
      </ul>
    </div>
  );
}

export default SpotifyStatus; 