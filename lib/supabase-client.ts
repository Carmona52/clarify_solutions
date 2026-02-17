import {createClient} from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) throw new Error("Algo salió mal al conectarse a la base de datos");

export const supabaseConfig = createClient(
    url,
    key
)