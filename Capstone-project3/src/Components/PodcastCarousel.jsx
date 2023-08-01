// represents a React component called PodcastCarousel that displays a carousel of recommended podcasts.
// It uses the react-slick library for carousel functionality.
// The component fetches podcast data from an API using axios and renders each podcast as a slide in the carousel. 
// It also includes custom NextArrow and PrevArrow components to control the carousel navigation.
// It provides a "Read More" feature to toggle the expanded description of each podcast.
// component working
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PodcastCarousel.css';

// NextArrow and PrevArrow components here
const NextArrow = ({ onClick }) => (
  <button className="arrow next" onClick={onClick}>
    <h3 className='next-arrow-button'>next</h3>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick}>
    <h3 className='prev-arrow-button'>prev</h3>
  </button>
);

// PodcastCarousel component to display a carousel of recommended podcasts
export default function PodcastCarousel() {
  const [podcasts, setPodcasts] = useState([]);
  const [expandedDescription, setExpandedDescription] = useState({});

  useEffect(() => {
    // Fetch podcast information from the API
    axios
      .get('https://podcast-api.netlify.app/shows')
      .then((response) => {
        setPodcasts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching podcasts:', error);
      });
  }, []);

  // Function to handle "Read More" click and toggle expanded podcast description
  const handleReadMoreClick = (podcastId) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [podcastId]: !prevState[podcastId],
    }));
  };

  // Settings for the carousel using the react-slick library
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, // Display only one podcast at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom NextArrow component
    prevArrow: <PrevArrow />, // Custom PrevArrow component
  };

  return (
    <div className="carousel-container">
      <h1 className='recomended-podcasts'>recommended podcasts</h1>
      {/* Create a carousel using the react-slick Slider component */}
      <Slider {...settings}>
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="carousel-item">
             {/* Link to the podcast details page */}
            <Link to={`/podcast/${podcast.id}`}>
              <img src={podcast.image} alt={podcast.title} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}



