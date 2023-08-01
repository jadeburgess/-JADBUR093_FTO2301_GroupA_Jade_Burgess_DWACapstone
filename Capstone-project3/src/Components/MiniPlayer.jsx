// represents a React component called MiniPlayer, which is responsible for displaying a mini player within the application.
// The mini player shows information about the current episode, provides buttons to play or pause the episode, and a close button to hide the mini player.
// component not working
import React from 'react';
import './MiniPlayer.css'

// MiniPlayer component to display a mini player for the current episode
export default function MiniPlayer({ episodeData, isPlaying, onPausePlay, onClose }) {
  // Function to handle the close button click event
  const handleClose = () => {
    // Show a confirmation dialog before closing the mini player
    if (window.confirm('Are you sure you want to close the mini player?')) {
      onClose();
    }
  };

  return (
    <div className="mini-player">
      <h3>Current Episode: {episodeData.title}</h3>
      <button onClick={onPausePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}
