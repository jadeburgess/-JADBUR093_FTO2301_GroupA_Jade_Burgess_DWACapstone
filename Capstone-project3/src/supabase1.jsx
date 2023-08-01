// imports the createClient function from the @supabase/supabase-js library. 
// defines the supabaseUrl and supabaseAnonKey variables that hold the Supabase project URL and anonymous key.
// Then creates a Supabase client using the createClient function, passing in the Supabase URL and anonymous key, and exports it as the default value.
// This Supabase client can be used to interact with the Supabase backend and perform various operations like querying the database and managing authentication.

//not working
import { createClient } from '@supabase/supabase-js' 

const supabaseUrl = 'https://oyvlusrfgriwbzjbjbgj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dmx1c3JmZ3Jpd2J6amJqYmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMDk2ODMsImV4cCI6MjAwNTc4NTY4M30.fPaJNBoB_KNRUW9mZSkFmPljSuV49jBz8zZ36Bdfun4'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
