import React, { useState } from 'react';
import { Home, Search, Library, Plus, ExternalLink } from 'lucide-react';
import { usePlaylist } from '../contexts/PlaylistContext';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  currentView: 'home' | 'search';
  onViewChange: (view: 'home' | 'search') => void;
}

function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { createPlaylist } = usePlaylist();
  const navigate = useNavigate();

  const handleCreatePlaylist = async () => {
    const newPlaylist = {
      title: "My Playlist #1",
      description: "My first playlist",
      cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
    };
    
    try {
      await createPlaylist(newPlaylist);
      setShowCreateModal(false);
    } catch (error) {
      console.error('Failed to create playlist:', error);
    }
  };

  const footerLinks = [
    { label: 'Legal', href: '#' },
    { label: 'Privacy Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'About Ads', href: '#' },
    { label: 'Accessibility', href: '#' }
  ];

  return (
    <div className="w-full sm:w-[420px] flex-shrink-0 flex flex-col bg-black">
      {/* Navigation Section */}
      <div className="p-2">
        <div className="bg-zinc-900 rounded-lg p-4">
          <div className="flex sm:flex-col gap-4">
            <button 
              className={`flex items-center gap-4 flex-1 sm:flex-none ${
                currentView === 'home' ? 'text-white' : 'text-zinc-400'
              } hover:text-white transition`}
              onClick={() => {
                onViewChange('home');
                navigate('/');
              }}
            >
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </button>
            <button 
              className={`flex items-center gap-4 flex-1 sm:flex-none ${
                currentView === 'search' ? 'text-white' : 'text-zinc-400'
              } hover:text-white transition`}
              onClick={() => {
                onViewChange('search');
                navigate('/search');
              }}
            >
              <Search size={24} />
              <span className="font-semibold">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <div className="flex-1 p-2">
        <div className="bg-zinc-900 rounded-lg p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
              <Library size={24} />
              <span className="font-semibold">Your Library</span>
            </button>
            <button 
              className="text-zinc-400 hover:text-white transition p-2 hover:bg-zinc-800 rounded-full"
              onClick={() => setShowCreateModal(true)}
            >
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1">
            <div 
              className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/50 transition cursor-pointer"
              onClick={() => setShowCreateModal(true)}
            >
              <h3 className="font-bold text-white mb-2">Create your first playlist</h3>
              <p className="text-sm text-zinc-400 mb-4">It's easy, we'll help you</p>
              <button 
                className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition"
              >
                Create playlist
              </button>
            </div>

            <div className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/50 transition cursor-pointer">
              <h3 className="font-bold text-white mb-2">Let's find some podcasts to follow</h3>
              <p className="text-sm text-zinc-400 mb-4">We'll keep you updated on new episodes</p>
              <button 
                className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition"
              >
                Browse podcasts
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-zinc-800 mt-4">
            <div className="flex flex-wrap gap-2 text-xs">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <button className="mt-4 border border-zinc-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 hover:border-white hover:scale-105 transition">
              <ExternalLink size={16} />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>

      {/* Create Playlist Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Create playlist</h2>
            <div className="space-y-4">
              <button
                className="w-full bg-green-500 text-black font-semibold py-3 px-4 rounded-full hover:scale-105 transition"
                onClick={handleCreatePlaylist}
              >
                Create
              </button>
              <button
                className="w-full bg-zinc-800 text-white font-semibold py-3 px-4 rounded-full hover:bg-zinc-700 transition"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;