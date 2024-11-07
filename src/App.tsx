import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import Search from './components/Search';
import Footer from './components/Footer';
import PlaylistView from './components/PlaylistView';
import { AudioProvider } from './contexts/AudioContext';
import { PlaylistProvider } from './contexts/PlaylistContext';
import SpotifyCallback from './components/SpotifyCallback';
import SpotifyStatus from './components/SpotifyStatus';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'search'>('home');

  return (
    <BrowserRouter>
      <AudioProvider>
        <PlaylistProvider>
          <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
              <Sidebar onViewChange={setCurrentView} currentView={currentView} />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/playlist/:id" element={<PlaylistView />} />
                  <Route path="/callback" element={<SpotifyCallback />} />
                </Routes>
                <Footer />
              </div>
            </div>
            <Player />
            {import.meta.env.NODE_ENV === 'development' && <SpotifyStatus />}
          </div>
        </PlaylistProvider>
      </AudioProvider>
    </BrowserRouter>
  );
}

export default App;