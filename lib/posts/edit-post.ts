import {supabaseConfig} from "@/lib/supabase-client";

export async function updatePostAction(id: string, updates: any) {
    const {data, error} = await supabaseConfig
        .from("posts")
        .update(updates)
        .eq("id", id)
        .select();

    if (error) throw error;
    return data;
}

export async function deletePostComplete(id: string, imageUrl: string | null) {
    if (imageUrl) {
        const path = imageUrl.split('/').pop();
        if (path) {
            await supabaseConfig.storage.from('posts_images').remove([path]);
        }
    }
    const {error} = await supabaseConfig.from("posts").delete().eq("id", id);
    if (error) throw error;
}