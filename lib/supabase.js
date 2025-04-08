import { createClient } from "@supabase/supabase-js";

//replace with your Supabase URL and Anon Key
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; 

export const supabase = createClient(supabaseURL, supabaseKey);
