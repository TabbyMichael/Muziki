import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

interface SidebarProps {
  currentView: 'home' | 'search';
  onViewChange: (view: 'home' | 'search') => void;
}

function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <div className="w-60 flex flex-col bg-black p-2 gap-2">
      <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
        <button 
          className={`flex items-center gap-4 ${
            currentView === 'home' ? 'text-white' : 'text-zinc-400'
          } hover:text-white transition`}
          onClick={() => onViewChange('home')}
        >
          <Home size={24} />
          <span className="font-semibold">Home</span>
        </button>
        <button 
          className={`flex items-center gap-4 ${
            currentView === 'search' ? 'text-white' : 'text-zinc-400'
          } hover:text-white transition`}
          onClick={() => onViewChange('search')}
        >
          <Search size={24} />
          <span className="font-semibold">Search</span>
        </button>
      </div>
      
      <div className="flex-1 bg-zinc-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
            <Library size={24} />
            <span className="font-semibold">Your Library</span>
          </button>
          <button className="text-zinc-300 hover:text-white transition p-1">
            <Plus size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800 transition cursor-pointer">
            <h3 className="font-bold mb-1">Create your first playlist</h3>
            <p className="text-sm text-zinc-400">It's easy, we'll help you</p>
          </div>
          
          <div className="bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800 transition cursor-pointer">
            <h3 className="font-bold mb-1">Let's find some podcasts</h3>
            <p className="text-sm text-zinc-400">We'll keep you updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;