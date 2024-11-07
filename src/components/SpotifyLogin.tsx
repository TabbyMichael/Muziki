import { loginUrl } from '../services/spotifyAuth';

function SpotifyLogin() {
  return (
    <a
      href={loginUrl}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
    >
      Connect with Spotify
    </a>
  );
}

export default SpotifyLogin; 