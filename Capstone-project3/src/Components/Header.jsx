// The Header component is a simple React functional component that displays the main title and subtitle of the application.
// It provides a static header section that can be reused across different pages or components within the application.
// The title "Podcast Playground" and subtitle "A place to play with podcasts" convey the purpose of the application to users.

import React from 'react'
import './Header.css'
// Header component to display the title and subtitle of the application
export default function Header() {
    return (
        <div className='header'>
            <h1 className='header--title'>Podcast Playground</h1>
            <h2 className='header--subtitle'>A place to play with podcasts</h2>
        </div>
    )
}