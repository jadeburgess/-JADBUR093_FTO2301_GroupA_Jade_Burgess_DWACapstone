//this code imports the necessary modules from the @supabase/supabase-js and @supabase/auth-ui-react packages, 
//creates a Supabase client instance using the provided environment variables, 
//and defines the Login component that renders the authentication UI using the Supabase client and applies a specific theme. 
//The component is then exported as the default export of the module.

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabaseURL, supabaseAnonKey } from '../clients/supabase'; // Imports the environment variables
// Creates a Supabase client instance using 'createClient' and pass the 'supabaseURL' and 'supabaseAnonKey' environment variables as arguments.
const supabase = createClient(supabaseURL, supabaseAnonKey); 

const Login = () => ( // Defines the 'Login' component.
  // Renders the 'Auth' component from the '@supabase/auth-ui-react' package.
  // Provides the 'supabase' client instance as the 'supabaseClient' prop to enable authentication functionalities.
  // Sets the appearance theme of the authentication UI to 'ThemeSupa' using the 'appearance' prop.
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
);
// Exports the 'Login' component as the default export of this module.
export default Login;


















