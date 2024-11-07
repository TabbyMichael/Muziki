import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

function Player() {
  const { 
    currentTrack, 
    isPlaying, 
    progress, 
    volume,
    togglePlay, 
    seek, 
    setVolume 
  } = useAudio();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="h-24 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-80">
        <img 
          src={currentTrack.cover} 
          alt={currentTrack.title}
          className="h-14 w-14 rounded"
        />
        <div>
          <h4 className="text-sm font-semibold">{currentTrack.title}</h4>
          <p className="text-xs text-zinc-400">{currentTrack.artist}</p>
        </div>
        <button className="text-zinc-400 hover:text-white transition">
          <Heart size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center max-w-xl w-full gap-2">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition">
            <Shuffle size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition">
            <SkipBack size={20} />
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-zinc-400 hover:text-white transition">
            <SkipForward size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition">
            <Repeat size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full group">
          <span className="text-xs text-zinc-400">
            {formatTime(progress * (currentTrack?.duration ? parseInt(currentTrack.duration) : 0))}
          </span>
          <div 
            className="h-1 flex-1 bg-zinc-600 rounded-full cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              seek(x / rect.width);
            }}
          >
            <div 
              className="h-1 bg-white rounded-full relative transition-all"
              style={{ width: `${progress * 100}%` }}
            >
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-zinc-400">{currentTrack.duration}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-80 justify-end group">
        <Volume2 size={20} className="text-zinc-400" />
        <div 
          className="h-1 w-24 bg-zinc-600 rounded-full cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setVolume(Math.max(0, Math.min(1, x / rect.width)));
          }}
        >
          <div 
            className="h-1 bg-white rounded-full relative transition-all"
            style={{ width: `${volume * 100}%` }}
          >
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;