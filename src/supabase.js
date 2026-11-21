
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Replace these with your own Supabase project details
const SUPABASE_URL = "https://xqqiosfxylmdbffohkrk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "https://xqqiosfxylmdbffohkrk.supabase.co";
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
