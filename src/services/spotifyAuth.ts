export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:5173/callback";
const SCOPES = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
].join(" ");

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`; 