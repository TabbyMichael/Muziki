import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import About from './components/About';
import Legal from './components/Legal';
import PrivacyCenter from './components/PrivacyCenter';
import Jobs from './components/Jobs';
import Developers from './components/Developers';
import Support from './components/Support';
import ForArtists from './components/ForArtists';
import SpotifyPlans from './components/SpotifyPlans';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Wrapper component to handle layout logic
function AppContent() {
  const [currentView, setCurrentView] = useState<'home' | 'search'>('home');
  const location = useLocation();

  // List of routes that should be full screen
  const fullScreenRoutes = [
    '/about',
    '/legal',
    '/privacy',
    '/jobs',
    '/developers',
    '/support',
    '/for-artists',
    '/premium/individual',
    '/premium/duo',
    '/premium/family',
    '/premium/student',
    '/muziki-free'
  ];

  const isFullScreenRoute = fullScreenRoutes.includes(location.pathname);

  if (isFullScreenRoute) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<PrivacyCenter />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/for-artists" element={<ForArtists />} />
          <Route path="/premium/individual" element={<SpotifyPlans />} />
          <Route path="/premium/duo" element={<SpotifyPlans />} />
          <Route path="/premium/family" element={<SpotifyPlans />} />
          <Route path="/premium/student" element={<SpotifyPlans />} />
          <Route path="/muziki-free" element={<SpotifyPlans />} />
        </Routes>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col">
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AudioProvider>
          <PlaylistProvider>
            <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
              <ThemeToggle />
              <AppContent />
            </div>
          </PlaylistProvider>
        </AudioProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;