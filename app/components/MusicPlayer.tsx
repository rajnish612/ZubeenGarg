'use client';

import { useState, useRef } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  src: string;
}

// Waveform animation bars component
const WaveformBars = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-1 bg-[var(--gold)] rounded-full ${
          isPlaying ? 'waveform-bar' : 'h-2'
        }`}
        style={{
          height: isPlaying ? '16px' : '8px',
          animationDelay: `${i * 0.1}s`
        }}
      />
    ))}
  </div>
);

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentSong] = useState<Song>({
    id: 1,
    title: "Ya Ali",
    artist: "Zubeen Garg",
    duration: "4:23",
    src: ""
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      {/* Audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src={currentSong.src}
      />

      {/* Player UI */}
      <div className="glass-effect border-t border-[var(--gold)]/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--maroon)] to-[var(--dark-maroon)] rounded-lg flex items-center justify-center flex-shrink-0">
              <WaveformBars isPlaying={isPlaying} />
            </div>
            <div className="min-w-0">
              <h4 className="text-white font-medium truncate">{currentSong.title}</h4>
              <p className="text-[var(--gold)] text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6 mx-8">
            {/* Previous Button */}
            <button className="text-white hover:text-[var(--gold)] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-gradient-to-r from-[var(--gold)] to-[#B8860B] rounded-full flex items-center justify-center hover:scale-105 transition-transform pulse-glow"
            >
              {isPlaying ? (
                <svg width="24" height="24" fill="black" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg width="24" height="24" fill="black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Next Button */}
            <button className="text-white hover:text-[var(--gold)] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>

          {/* Progress and Volume */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            {/* Time */}
            <span className="text-sm text-gray-400 whitespace-nowrap">
              {formatTime(currentTime)}
            </span>

            {/* Progress Bar */}
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--gold) 0%, var(--gold) ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #374151 ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #374151 100%)`
                }}
              />
            </div>

            {/* Duration */}
            <span className="text-sm text-gray-400 whitespace-nowrap">
              {formatTime(duration)}
            </span>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;