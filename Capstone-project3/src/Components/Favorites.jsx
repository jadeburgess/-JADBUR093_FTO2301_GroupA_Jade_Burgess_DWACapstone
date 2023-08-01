//This component displays a list of favorite podcasts and allows users to sort the list in different ways. 
//It uses state variables to manage the sorting option and provides functions for sorting the podcasts alphabetically and by date.
// component receives two props: favoritePodcasts, which is an array of podcast objects representing the favorites, and onToggleFavorite, 
//which is a function to toggle the favorite status of a podcast when the corresponding button is clicked.
//component renders a header displaying "Favorites" and a set of buttons to trigger different sorting options. 
//It then maps through the favoritePodcasts array and renders each podcast's image, title, and a button to toggle its favorite status. 
//When the sorting buttons are clicked, the list of favorite podcasts is re-ordered accordingly.

import React, { useState } from "react";

// Favorites component that displays a list of favorite podcasts and provides sorting options
export default function Favorites({ favoritePodcasts, onToggleFavorite }) {
  // State variable to manage the sorting option
  const [sorting, setSorting] = useState("none");

  // Function to sort podcasts alphabetically in ascending order
  const handleSortAtoZ = () => {
    setSorting("AtoZ");
    favoritePodcasts.sort((a, b) => a.title.localeCompare(b.title));
  };

  // Function to sort podcasts alphabetically in descending order
  const handleSortZtoA = () => {
    setSorting("ZtoA");
    favoritePodcasts.sort((a, b) => b.title.localeCompare(a.title));
  };

  // Function to sort podcasts by date in ascending order
  const handleSortByDateAsc = () => {
    setSorting("DateAsc");
    favoritePodcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated));
  };

  // Function to sort podcasts by date in descending order
  const handleSortByDateDesc = () => {
    setSorting("DateDesc");
    favoritePodcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <button onClick={handleSortAtoZ}>Sort A-Z</button>
        <button onClick={handleSortZtoA}>Sort Z-A</button>
        <button onClick={handleSortByDateAsc}>Sort by Date (Ascending)</button>
        <button onClick={handleSortByDateDesc}>Sort by Date (Descending)</button>
      </div>
      {favoritePodcasts.map((podcast) => (
        <div key={podcast.id}>
          <img src={podcast.image} alt={podcast.title} style={{ maxWidth: '100px' }} />
          <p>{podcast.title}</p>
          <button onClick={() => onToggleFavorite(podcast.id)}>
            {podcast.isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
}












