import {supabaseConfig} from "@/lib/supabase-client";

export async function uploadImage(file: File) {
    const fileName = `${Date.now()}-${file.name}`;

    const {error} = await supabaseConfig.storage
        .from("posts")
        .upload(fileName, file);

    if (error) throw error;

    const {data} = supabaseConfig.storage
        .from("posts")
        .getPublicUrl(fileName);

    return data.publicUrl;
}
