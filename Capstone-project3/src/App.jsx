//This App component is the root component of the application and manages the state for favorited podcasts and mini player data. 
//It sets up the routes for different pages and renders the corresponding components based on the current URL. 
//Additionally, it renders the MiniPlayer component when miniPlayerData is available. 
//login and miniPlayer not working
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AllPodcasts from './Components/AllPodcasts';
import PodcastPage from './Components/PodcastPage';
import FavoritesPage from './Components/FavoritesPage';
import Episode from './Components/Episode';
import MiniPlayer from './Components/MiniPlayer'; // Import the new MiniPlayer component

export default function App() {
  // State to manage favorited podcasts and mini player data
  const [favoritePodcasts, setFavoritePodcasts] = useState([]);
  const [miniPlayerData, setMiniPlayerData] = useState(null);
  const [isMiniPlayerPlaying, setIsMiniPlayerPlaying] = useState(false);

  // Loads favorited podcasts from local storage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePodcasts');
    console.log('Stored Favorites:', storedFavorites);
    if (storedFavorites) {
      setFavoritePodcasts(JSON.parse(storedFavorites));
    }
  }, []);

  // Saves favorited podcasts to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoritePodcasts', JSON.stringify(favoritePodcasts));
  }, [favoritePodcasts]);

  console.log('Favorite Podcasts in App:', favoritePodcasts);

  // Function to handle opening the mini player
  const handleMiniPlayerOpen = (episodeData) => {
    setMiniPlayerData(episodeData);
    setIsMiniPlayerPlaying(true);
  };

  // Function to handle pausing or playing the mini player
  const handleMiniPlayerPausePlay = () => {
    setIsMiniPlayerPlaying(!isMiniPlayerPlaying);
  };

  // Function to handle closing the mini player
  const handleMiniPlayerClose = () => {
    setMiniPlayerData(null);
    setIsMiniPlayerPlaying(false);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <AllPodcasts
                favoritePodcasts={favoritePodcasts}
                setFavoritePodcasts={setFavoritePodcasts}
                onMiniPlayerOpen={handleMiniPlayerOpen}
              />
            }
          />
          <Route path="/podcast/:id" element={<PodcastPage />} />
          <Route
            path="/favorites"
            element={<FavoritesPage favoritePodcasts={favoritePodcasts} />}
          />
          {/* Passes the id prop to the Episode component */}
          <Route path="/episode/:id" element={<Episode onMiniPlayerOpen={handleMiniPlayerOpen} />} />
        </Routes>
        {/* Adds the MiniPlayer component */}
        {miniPlayerData && (
          <MiniPlayer
            episodeData={miniPlayerData}
            isPlaying={isMiniPlayerPlaying}
            onPausePlay={handleMiniPlayerPausePlay}
            onClose={handleMiniPlayerClose}
          />
        )}
      </div>
    </Router>
  );
}
