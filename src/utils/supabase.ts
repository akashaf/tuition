import { createClient } from "@supabase/supabase-js";

// Access environment variables
const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL as string,
  NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);
