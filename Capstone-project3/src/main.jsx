import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render( //creates root instance using ReactDom.createRoot()and attach it to the element with the ID 'root' in the DOM.
  // Wraps the entire application component tree with React.StrictMode, a wrapper that enables additional checks and warnings for potential problems in development mode.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
