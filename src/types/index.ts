export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: string;
  url: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  tracks: Track[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
}

export interface SearchResults {
  tracks: Track[];
  artists: Artist[];
  playlists: Playlist[];
}