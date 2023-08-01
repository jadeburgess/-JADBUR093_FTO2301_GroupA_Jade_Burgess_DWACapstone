// This Episode component is responsible for displaying an individual episode page.
// It contains state variables to manage the playing status, current time, and duration of the audio. 
//A useRef is used to access the HTML audio element. 
//The component includes functions to handle play/pause, time update, seeking, and loaded metadata events of the audio.

//The component renders a card displaying episode details such as episode number, title, and description. 
//It also includes an audio player with play/pause button, a seekable progress bar to track the audio's current time, and timestamps to show the current time and total duration of the audio. 
//The audio player uses the URL from episodeData.file as the audio source.

//works well. Plays audio successfully. 
import React, { useState, useRef } from 'react';
import './Episode.css';
// Episode component that displays an individual episode page
export default function Episode({ episodeData }) {
   // State to manage playing status, current time, and duration of the audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null); // useRef to access the HTML audio element

  // Function to handle play and pause of the audio
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  // Function to handle time update of the audio
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Function to handle seeking the audio
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Function to handle loaded metadata of the audio
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div>
      <h2 className='episode-card-number'>Episode {episodeData.episode}</h2>
      <h4 className='episode-card-title'>{episodeData.title}</h4>
      <p className='episode-card-description'>{episodeData.description}</p>

      {/* Audio Player */}
      <audio
        ref={audioRef}
        src={episodeData.file} // Use the episodeData.file for the audio URL
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the audio element.
      </audio>

      <div>
        {/* Play/Pause Button */}
        <button 
        className='episode-play-button'
        onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>

        {/* Time Stamp */}
        <span className='episode-timestamp'>{`${Math.floor(currentTime / 60)}:${(currentTime % 60).toFixed()}`}</span> /{' '}
        <span className='episode-timestamp'>{`${Math.floor(duration / 60)}:${(duration % 60).toFixed()}`}</span>

        {/* Seekable Progress Bar */}
        <input 
        className='episode-seekbar'
        type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} />
      </div>
    </div>
  );
}





