import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import Search from './components/Search';
import { AudioProvider } from './contexts/AudioContext';
import { PlaylistProvider } from './contexts/PlaylistContext';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'search'>('home');

  return (
    <AudioProvider>
      <PlaylistProvider>
        <div className="h-screen bg-black text-white flex flex-col">
          <div className="flex-1 flex overflow-hidden">
            <Sidebar onViewChange={setCurrentView} currentView={currentView} />
            {currentView === 'home' ? <MainContent /> : <Search />}
          </div>
          <Player />
        </div>
      </PlaylistProvider>
    </AudioProvider>
  );
}

export default App;