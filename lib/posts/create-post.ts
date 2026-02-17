import {supabaseConfig} from "../supabase-client";

interface CreatePostParams {
    title: string;
    content: string;
    excerpt: string;
    image_url?: string;
    category?: string;
    author_id: string;
}

export async function createPost({
                                     title,
                                     content,
                                     excerpt,
                                     image_url,
                                     category,
                                     author_id,
                                 }: CreatePostParams) {
    const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const {data, error} = await supabaseConfig
        .from("posts")
        .insert({
            title,
            slug,
            excerpt,
            content,
            image_url,
            category,
            published: true,
            author_id,
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}
