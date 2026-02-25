import {supabaseConfig} from "@/lib/supabase-client";
import {createClient} from "@supabase/supabase-js";

export async function searchAnswers(query: string) {
    console.log(query);
    try {
        const {data, error} = await supabaseConfig
            .from('knowledge_base')
            .select('answer')
            .ilike('keyword', `%${query}%`)
            .limit(1);

        if (error) {
            console.error("Error de Supabase:", error);
            return null;
        }
        return data.length > 0 ? data[0].answer : null;

        console.log(data)

    } catch (err) {
        console.error("Error inesperado:", err);
        return null;
    }
}