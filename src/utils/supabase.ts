import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://qjrdgypcggkbyebgevgd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcmRneXBjZ2drYnllYmdldmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NDM1ODEsImV4cCI6MjAxOTQxOTU4MX0.VRRzD4tyBAdS9HOYpQPSWWRoZH250RQE7Q6mzDb7GhE"
);
