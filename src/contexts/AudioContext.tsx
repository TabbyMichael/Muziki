import React, { createContext, useContext, useState, useRef } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: string;
  url: string;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  play: (track: Track) => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number | null>(null);

  const startProgressUpdate = () => {
    if (progressInterval.current) return;
    progressInterval.current = window.setInterval(() => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime / audioRef.current.duration);
      }
    }, 1000);
  };

  const stopProgressUpdate = () => {
    if (progressInterval.current) {
      window.clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const play = (track: Track) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (currentTrack?.id !== track.id) {
      audioRef.current.src = track.url;
      setCurrentTrack(track);
    }

    audioRef.current.volume = volume;
    audioRef.current.play();
    setIsPlaying(true);
    startProgressUpdate();
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    stopProgressUpdate();
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else if (currentTrack) {
      play(currentTrack);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time * audioRef.current.duration;
      setProgress(time);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  React.useEffect(() => {
    return () => {
      stopProgressUpdate();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        progress,
        volume,
        play,
        pause,
        seek,
        setVolume: handleVolumeChange,
        togglePlay,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};