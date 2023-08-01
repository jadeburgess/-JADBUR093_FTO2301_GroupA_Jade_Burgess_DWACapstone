// The ProtectedApp component is a higher-order component used to protect routes that require authentication.
// It utilizes the react-router-dom library to handle routing.
// The component uses the Supabase client instance to check if a user is authenticated.
// If the user is authenticated, it renders the component specified by the component prop.
// If the user is not authenticated, it redirects to the login page (/login). 
//This ensures that the protected route is accessible only to authenticated users.

//Login component not working, so ProtectedApp not working
import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import supabase from '../supabase'; // Import the Supabase client instance

// ProtectedApp component to protect routes that require authentication
export default function ProtectedApp({ component: Component, ...rest }) {
  const [user, setUser] = useState(null); // State to store the authenticated user object

  useEffect(() => {
    // Fetch the user object from Supabase when the component mounts
    const fetchUser = async () => {
      const currentUser = supabase.auth.user(); // Get the current authenticated user
      setUser(currentUser);
    };
    fetchUser();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}


















