# Muziki

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/TabbyMichael/Muziki)

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Fill in your environment variables in `.env`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `VITE_SPOTIFY_CLIENT_ID`: Your Spotify API client ID
- `VITE_SPOTIFY_CLIENT_SECRET`: Your Spotify API client secret
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (defaults to 3001)
- `NODE_ENV`: Environment (development/production)

## Development

1. Create a Spotify Developer account and get your API credentials
2. Set up a MongoDB database
3. Configure your environment variables
4. Run the development server